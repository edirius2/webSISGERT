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
    public class DetalleCostosController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public DetalleCostosController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/DetalleCostos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetalleCosto>>> GetDetallesCosto()
        {
            return await _context.DetallesCosto.ToListAsync();
        }

        // GET: api/DetalleCostos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DetalleCosto>> GetDetalleCosto(int id)
        {
            var detalleCosto = await _context.DetallesCosto.FindAsync(id);

            if (detalleCosto == null)
            {
                return NotFound();
            }

            return detalleCosto;
        }

        // PUT: api/DetalleCostos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetalleCosto(int id, DetalleCosto detalleCosto)
        {
            if (id != detalleCosto.Id)
            {
                return BadRequest();
            }

            _context.Entry(detalleCosto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetalleCostoExists(id))
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

        // POST: api/DetalleCostos
        [HttpPost]
        public async Task<ActionResult<DetalleCosto>> PostDetalleCosto(DetalleCosto detalleCosto)
        {
            _context.DetallesCosto.Add(detalleCosto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetalleCosto", new { id = detalleCosto.Id }, detalleCosto);
        }

        // DELETE: api/DetalleCostos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetalleCosto>> DeleteDetalleCosto(int id)
        {
            var detalleCosto = await _context.DetallesCosto.FindAsync(id);
            if (detalleCosto == null)
            {
                return NotFound();
            }

            _context.DetallesCosto.Remove(detalleCosto);
            await _context.SaveChangesAsync();

            return detalleCosto;
        }

        private bool DetalleCostoExists(int id)
        {
            return _context.DetallesCosto.Any(e => e.Id == id);
        }
    }
}
