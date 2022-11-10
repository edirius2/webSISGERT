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
    public class DetalleRepuestosCotizacionesController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public DetalleRepuestosCotizacionesController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/DetalleRepuestosCotizaciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetalleRepuestosCotizacion>>> GetDetallesRepuestosCotizacion()
        {
            return await _context.DetallesRepuestosCotizacion.ToListAsync();
        }

        // GET: api/DetalleRepuestosCotizaciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DetalleRepuestosCotizacion>> GetDetalleRepuestosCotizacion(int id)
        {
            var detalleRepuestosCotizacion = await _context.DetallesRepuestosCotizacion.FindAsync(id);

            if (detalleRepuestosCotizacion == null)
            {
                return NotFound();
            }

            return detalleRepuestosCotizacion;
        }

        // PUT: api/DetalleRepuestosCotizaciones/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetalleRepuestosCotizacion(int id, DetalleRepuestosCotizacion detalleRepuestosCotizacion)
        {
            if (id != detalleRepuestosCotizacion.Id)
            {
                return BadRequest();
            }

            _context.Entry(detalleRepuestosCotizacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetalleRepuestosCotizacionExists(id))
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

        // POST: api/DetalleRepuestosCotizaciones
        [HttpPost]
        public async Task<ActionResult<DetalleRepuestosCotizacion>> PostDetalleRepuestosCotizacion(DetalleRepuestosCotizacion detalleRepuestosCotizacion)
        {
            _context.DetallesRepuestosCotizacion.Add(detalleRepuestosCotizacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetalleRepuestosCotizacion", new { id = detalleRepuestosCotizacion.Id }, detalleRepuestosCotizacion);
        }

        // DELETE: api/DetalleRepuestosCotizaciones/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetalleRepuestosCotizacion>> DeleteDetalleRepuestosCotizacion(int id)
        {
            var detalleRepuestosCotizacion = await _context.DetallesRepuestosCotizacion.FindAsync(id);
            if (detalleRepuestosCotizacion == null)
            {
                return NotFound();
            }

            _context.DetallesRepuestosCotizacion.Remove(detalleRepuestosCotizacion);
            await _context.SaveChangesAsync();

            return detalleRepuestosCotizacion;
        }

        private bool DetalleRepuestosCotizacionExists(int id)
        {
            return _context.DetallesRepuestosCotizacion.Any(e => e.Id == id);
        }
    }
}
