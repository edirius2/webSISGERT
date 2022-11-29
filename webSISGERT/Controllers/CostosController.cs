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
    public class CostosController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public CostosController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/Costos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Costo>>> GetCosto()
        {
            return await _context.Costo.ToListAsync();
        }

        // GET: api/Costos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Costo>> GetCosto(int id)
        {
            var costo = await _context.Costo.FindAsync(id);

            if (costo == null)
            {
                return NotFound();
            }

            return costo;
        }

        // PUT: api/Costos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCosto(int id, Costo costo)
        {
            if (id != costo.Id)
            {
                return BadRequest();
            }

            _context.Entry(costo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CostoExists(id))
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

        // POST: api/Costos
        [HttpPost]
        public async Task<ActionResult<Costo>> PostCosto(Costo costo)
        {
            _context.Costo.Add(costo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCosto", new { id = costo.Id }, costo);
        }

        // DELETE: api/Costos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Costo>> DeleteCosto(int id)
        {
            var costo = await _context.Costo.FindAsync(id);
            if (costo == null)
            {
                return NotFound();
            }

            _context.Costo.Remove(costo);
            await _context.SaveChangesAsync();

            return costo;
        }

        private bool CostoExists(int id)
        {
            return _context.Costo.Any(e => e.Id == id);
        }
    }
}
