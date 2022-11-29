using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webSISGERT.Models;
using webSISGERT.Models.Cotizaciones;

namespace webSISGERT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CotizacionesController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public CotizacionesController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/Cotizaciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cotizacion>>> GetCotizaciones()
        {
            return await _context.Cotizaciones.Include(clientes => clientes.cliente).Include(maquinarias => maquinarias.maquinaria) .ToListAsync();
        }

        [HttpGet("[action]/{idCliente}/{idMaquinaria}/{estado}")]
        public async Task<ActionResult<IEnumerable<Cotizacion>>> GetCotizacionesFiltro(int idCliente, int idMaquinaria, string estado)
        {
            string clienteId = "";
            string maquinariaId = "";
            string estado2 = "";

            if (idCliente != 0)
            {
                clienteId = idCliente.ToString() ;
            }

            if (idMaquinaria != 0)
            {
                maquinariaId = idMaquinaria.ToString();
            }

            if (estado == "vacio")
            {
                estado2 = "";
            }

            return await _context.Cotizaciones.Include(clientes => clientes.cliente).Include(maquinarias => maquinarias.maquinaria).
                Where(t=> t.ClienteId.ToString().Contains(clienteId)).
                Where(t=> t.MaquinariaId.ToString().Contains(maquinariaId)).
                Where(t=> t.Estado.ToString().Contains(estado2))
                .ToListAsync();
        }

        // GET: api/Cotizaciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cotizacion>> GetCotizacion(int id)
        {
            var cotizacion = await _context.Cotizaciones.Include(c => c.cliente).Include(m=>m.maquinaria).Where(c=> c.Id == id).FirstAsync();

            if (cotizacion == null)
            {
                return NotFound();
            }

            return cotizacion;
        }

        // PUT: api/Cotizaciones/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCotizacion(int id, Cotizacion cotizacion)
        {
            if (id != cotizacion.Id)
            {
                return BadRequest();
            }

            _context.Entry(cotizacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CotizacionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cotizaciones
        [HttpPost]
        public async Task<ActionResult<Cotizacion>> PostCotizacion(Cotizacion cotizacion)
        {
            _context.Clientes.Attach(cotizacion.cliente);
            _context.Maquinarias.Attach(cotizacion.maquinaria);
            _context.Cotizaciones.Add(cotizacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCotizacion", new { id = cotizacion.Id }, cotizacion);
        }

        // DELETE: api/Cotizaciones/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cotizacion>> DeleteCotizacion(int id)
        {
            var cotizacion = await _context.Cotizaciones.FindAsync(id);
            if (cotizacion == null)
            {
                return NotFound();
            }

            _context.Cotizaciones.Remove(cotizacion);
            await _context.SaveChangesAsync();

            return cotizacion;
        }

        private bool CotizacionExists(int id)
        {
            return _context.Cotizaciones.Any(e => e.Id == id);
        }
    }
}
