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
    public class DetalleCostoCotizacionesController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public DetalleCostoCotizacionesController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/DetalleCostoCotizaciones
        [HttpGet("{idC}")]
        public async Task<ActionResult<IEnumerable<DetalleCostoCotizacion>>> GetDetallesCostoCotizacion(int idC)
        {
            return await _context.DetallesCostoCotizacion.Include(c=> c.costo).Where(c=> c.cotizacionId == idC).ToListAsync();
        }

        // GET: api/DetalleCostoCotizaciones/5
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<DetalleCostoCotizacion>> GetDetalleCostoCotizacion(int id)
        {
            var detalleCostoCotizacion = await _context.DetallesCostoCotizacion.Include(c=>c.costo).Where(c=> c.Id == id).FirstAsync();

            if (detalleCostoCotizacion == null)
            {
                return NotFound();
            }

            return detalleCostoCotizacion;
        }

        // PUT: api/DetalleCostoCotizaciones/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetalleCostoCotizacion(int id, DetalleCostoCotizacion detalleCostoCotizacion)
        {
            if (id != detalleCostoCotizacion.Id)
            {
                return BadRequest();
            }

            _context.Entry(detalleCostoCotizacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetalleCostoCotizacionExists(id))
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

        // POST: api/DetalleCostoCotizaciones
        [HttpPost]
        public async Task<ActionResult<DetalleCostoCotizacion>> PostDetalleCostoCotizacion(DetalleCostoCotizacion detalleCostoCotizacion)
        {
            _context.Costo.Attach(detalleCostoCotizacion.costo);
            _context.DetallesCostoCotizacion.Add(detalleCostoCotizacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetalleCostoCotizacion", new { id = detalleCostoCotizacion.Id }, detalleCostoCotizacion);
        }

        // DELETE: api/DetalleCostoCotizaciones/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetalleCostoCotizacion>> DeleteDetalleCostoCotizacion(int id)
        {
            var detalleCostoCotizacion = await _context.DetallesCostoCotizacion.FindAsync(id);
            if (detalleCostoCotizacion == null)
            {
                return NotFound();
            }

            _context.DetallesCostoCotizacion.Remove(detalleCostoCotizacion);
            await _context.SaveChangesAsync();

            return detalleCostoCotizacion;
        }

        private bool DetalleCostoCotizacionExists(int id)
        {
            return _context.DetallesCostoCotizacion.Any(e => e.Id == id);
        }
    }
}
