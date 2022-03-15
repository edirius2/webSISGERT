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
    public class DetallePagosController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public DetallePagosController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/DetallePagos
        [HttpGet("{idOT}")]
        public async Task<ActionResult<IEnumerable<DetallePago>>> GetDetallePagos(int idOT)
        {
            return await _context.DetallePagos.Where(pag=> pag.OrdenTrabajoId == idOT).ToListAsync();
        }

        // GET: api/DetallePagos/5
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<DetallePago>> GetDetallePago(int id)
        {
            var detallePago = await _context.DetallePagos.FindAsync(id);

            if (detallePago == null)
            {
                return NotFound();
            }

            return detallePago;
        }

        // PUT: api/DetallePagos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetallePago(int id, DetallePago detallePago)
        {
            if (id != detallePago.Id)
            {
                return BadRequest();
            }

            _context.Entry(detallePago).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetallePagoExists(id))
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

        // POST: api/DetallePagos
        [HttpPost]
        public async Task<ActionResult<DetallePago>> PostDetallePago(DetallePago detallePago)
        {
            _context.DetallePagos.Add(detallePago);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetallePago", new { id = detallePago.Id }, detallePago);
        }

        // DELETE: api/DetallePagos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetallePago>> DeleteDetallePago(int id)
        {
            var detallePago = await _context.DetallePagos.FindAsync(id);
            if (detallePago == null)
            {
                return NotFound();
            }

            _context.DetallePagos.Remove(detallePago);
            await _context.SaveChangesAsync();

            return detallePago;
        }

        private bool DetallePagoExists(int id)
        {
            return _context.DetallePagos.Any(e => e.Id == id);
        }
    }
}
