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
    public class Cotizacion_OTController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public Cotizacion_OTController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/Cotizacion_OT
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cotizacion_OT>>> GetCotizacionesOrdenTrabajos()
        {
            return await _context.CotizacionesOrdenTrabajos.ToListAsync();
        }

        // GET: api/Cotizacion_OT/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cotizacion_OT>> GetCotizacion_OT(int id)
        {
            var cotizacion_OT = await _context.CotizacionesOrdenTrabajos.FindAsync(id);

            if (cotizacion_OT == null)
            {
                return NotFound();
            }

            return cotizacion_OT;
        }

        // PUT: api/Cotizacion_OT/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCotizacion_OT(int id, Cotizacion_OT cotizacion_OT)
        {
            if (id != cotizacion_OT.CotizacionId)
            {
                return BadRequest();
            }

            _context.Entry(cotizacion_OT).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Cotizacion_OTExists(id))
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

        // POST: api/Cotizacion_OT
        [HttpPost]
        public async Task<ActionResult<Cotizacion_OT>> PostCotizacion_OT(Cotizacion_OT cotizacion_OT)
        {
            _context.CotizacionesOrdenTrabajos.Add(cotizacion_OT);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (Cotizacion_OTExists(cotizacion_OT.CotizacionId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCotizacion_OT", new { id = cotizacion_OT.CotizacionId }, cotizacion_OT);
        }

        // DELETE: api/Cotizacion_OT/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cotizacion_OT>> DeleteCotizacion_OT(int id)
        {
            var cotizacion_OT = await _context.CotizacionesOrdenTrabajos.FindAsync(id);
            if (cotizacion_OT == null)
            {
                return NotFound();
            }

            _context.CotizacionesOrdenTrabajos.Remove(cotizacion_OT);
            await _context.SaveChangesAsync();

            return cotizacion_OT;
        }

        private bool Cotizacion_OTExists(int id)
        {
            return _context.CotizacionesOrdenTrabajos.Any(e => e.CotizacionId == id);
        }
    }
}
