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
    public class DetalleTareaCotizacionesController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public DetalleTareaCotizacionesController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/DetalleTareaCotizaciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetalleTareaCotizacion>>> GetDetallesTareaCotizacion()
        {
            return await _context.DetallesTareaCotizacion.ToListAsync();
        }

        // GET: api/DetalleTareaCotizaciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DetalleTareaCotizacion>> GetDetalleTareaCotizacion(int id)
        {
            var detalleTareaCotizacion = await _context.DetallesTareaCotizacion.FindAsync(id);

            if (detalleTareaCotizacion == null)
            {
                return NotFound();
            }

            return detalleTareaCotizacion;
        }

        // PUT: api/DetalleTareaCotizaciones/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetalleTareaCotizacion(int id, DetalleTareaCotizacion detalleTareaCotizacion)
        {
            if (id != detalleTareaCotizacion.Id)
            {
                return BadRequest();
            }

            _context.Entry(detalleTareaCotizacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetalleTareaCotizacionExists(id))
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

        // POST: api/DetalleTareaCotizaciones
        [HttpPost]
        public async Task<ActionResult<DetalleTareaCotizacion>> PostDetalleTareaCotizacion(DetalleTareaCotizacion detalleTareaCotizacion)
        {
            _context.DetallesTareaCotizacion.Add(detalleTareaCotizacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetalleTareaCotizacion", new { id = detalleTareaCotizacion.Id }, detalleTareaCotizacion);
        }

        // DELETE: api/DetalleTareaCotizaciones/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetalleTareaCotizacion>> DeleteDetalleTareaCotizacion(int id)
        {
            var detalleTareaCotizacion = await _context.DetallesTareaCotizacion.FindAsync(id);
            if (detalleTareaCotizacion == null)
            {
                return NotFound();
            }

            _context.DetallesTareaCotizacion.Remove(detalleTareaCotizacion);
            await _context.SaveChangesAsync();

            return detalleTareaCotizacion;
        }

        private bool DetalleTareaCotizacionExists(int id)
        {
            return _context.DetallesTareaCotizacion.Any(e => e.Id == id);
        }
    }
}
