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
    public class DetalleCostoTareaCotizacionesController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public DetalleCostoTareaCotizacionesController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/DetalleCostoTareaCotizaciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetalleCostoTareaCotizacion>>> GetDetallesCostoTareaCotizacion()
        {
            return await _context.DetallesCostoTareaCotizacion.ToListAsync();
        }

        // GET: api/DetalleCostoTareaCotizaciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DetalleCostoTareaCotizacion>> GetDetalleCostoTareaCotizacion(int id)
        {
            var detalleCostoTareaCotizacion = await _context.DetallesCostoTareaCotizacion.FindAsync(id);

            if (detalleCostoTareaCotizacion == null)
            {
                return NotFound();
            }

            return detalleCostoTareaCotizacion;
        }

        // PUT: api/DetalleCostoTareaCotizaciones/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetalleCostoTareaCotizacion(int id, DetalleCostoTareaCotizacion detalleCostoTareaCotizacion)
        {
            if (id != detalleCostoTareaCotizacion.Id)
            {
                return BadRequest();
            }

            _context.Entry(detalleCostoTareaCotizacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetalleCostoTareaCotizacionExists(id))
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

        // POST: api/DetalleCostoTareaCotizaciones
        [HttpPost]
        public async Task<ActionResult<DetalleCostoTareaCotizacion>> PostDetalleCostoTareaCotizacion(DetalleCostoTareaCotizacion detalleCostoTareaCotizacion)
        {
            _context.DetallesCostoTareaCotizacion.Add(detalleCostoTareaCotizacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetalleCostoTareaCotizacion", new { id = detalleCostoTareaCotizacion.Id }, detalleCostoTareaCotizacion);
        }

        // DELETE: api/DetalleCostoTareaCotizaciones/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetalleCostoTareaCotizacion>> DeleteDetalleCostoTareaCotizacion(int id)
        {
            var detalleCostoTareaCotizacion = await _context.DetallesCostoTareaCotizacion.FindAsync(id);
            if (detalleCostoTareaCotizacion == null)
            {
                return NotFound();
            }

            _context.DetallesCostoTareaCotizacion.Remove(detalleCostoTareaCotizacion);
            await _context.SaveChangesAsync();

            return detalleCostoTareaCotizacion;
        }

        private bool DetalleCostoTareaCotizacionExists(int id)
        {
            return _context.DetallesCostoTareaCotizacion.Any(e => e.Id == id);
        }
    }
}
