using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webSISGERT.Models;
using webSISGERT.Models.OT;

namespace webSISGERT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdenesTrabajoController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public OrdenesTrabajoController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/OrdenesTrabajo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrdenTrabajo>>> GetOrdenesTrabajo()
        {
            return await _context.OrdenesTrabajo.Include(clientes=>clientes.cliente).Include(dt=>dt.DetallesTareas).ThenInclude(t=> t.tarea).Include(dp=>dp.DetallesPagos).Include(de=>de.DetallesEmpleados).ToListAsync();
        }

        // GET: api/OrdenesTrabajo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrdenTrabajo>> GetOrdenTrabajo(int id)
        {
            //var ordenTrabajo = await _context.OrdenesTrabajo.FindAsync(id);

            var ordenTrabajo = await _context.OrdenesTrabajo.Include(cliente =>cliente.cliente).Include(dt => dt.DetallesTareas).ThenInclude(t => t.tarea).Include(dp => dp.DetallesPagos).Include(de => de.DetallesEmpleados).ThenInclude(ee=> ee.empleado) .Where(ot=>ot.Id == id ).FirstAsync();

            if (ordenTrabajo == null)
            {
                return NotFound();
            }

            return ordenTrabajo;
        }

        // PUT: api/OrdenesTrabajo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrdenTrabajo(int id, OrdenTrabajo ordenTrabajo)
        {
            _context.Clientes.Attach(ordenTrabajo.cliente);

            if (id != ordenTrabajo.Id)
            {
                return BadRequest();
            }

            _context.Entry(ordenTrabajo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrdenTrabajoExists(id))
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

        // POST: api/OrdenesTrabajo
        [HttpPost]
        public async Task<ActionResult<OrdenTrabajo>> PostOrdenTrabajo(OrdenTrabajo ordenTrabajo)
        {
            try
            {
                
                _context.Clientes.Attach(ordenTrabajo.cliente);

                _context.OrdenesTrabajo.Add(ordenTrabajo);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetOrdenTrabajo", new { id = ordenTrabajo.Id }, ordenTrabajo);
            }
            catch (Exception EX)
            {
                throw new Exception(EX.Message);
            }
            
        }

        // DELETE: api/OrdenesTrabajo/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<OrdenTrabajo>> DeleteOrdenTrabajo(int id)
        {
            var ordenTrabajo = await _context.OrdenesTrabajo.FindAsync(id);
            if (ordenTrabajo == null)
            {
                return NotFound();
            }

            _context.OrdenesTrabajo.Remove(ordenTrabajo);
            await _context.SaveChangesAsync();

            return ordenTrabajo;
        }

        private bool OrdenTrabajoExists(int id)
        {
            return _context.OrdenesTrabajo.Any(e => e.Id == id);
        }
    }
}
