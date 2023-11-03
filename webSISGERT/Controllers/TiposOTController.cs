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
    public class TiposOTController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public TiposOTController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/TiposOT
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoOT>>> GetTiposOT()
        {
            return await _context.TiposOT.ToListAsync();
        }

        // GET: api/TiposOT/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoOT>> GetTipoOT(int id)
        {
            var tipoOT = await _context.TiposOT.FindAsync(id);

            if (tipoOT == null)
            {
                return NotFound();
            }

            return tipoOT;
        }

        // PUT: api/TiposOT/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoOT(int id, TipoOT tipoOT)
        {
            if (id != tipoOT.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoOT).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoOTExists(id))
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

        // POST: api/TiposOT
        [HttpPost]
        public async Task<ActionResult<TipoOT>> PostTipoOT(TipoOT tipoOT)
        {
            _context.TiposOT.Add(tipoOT);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoOT", new { id = tipoOT.Id }, tipoOT);
        }

        // DELETE: api/TiposOT/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TipoOT>> DeleteTipoOT(int id)
        {
            var tipoOT = await _context.TiposOT.FindAsync(id);
            if (tipoOT == null)
            {
                return NotFound();
            }

            _context.TiposOT.Remove(tipoOT);
            await _context.SaveChangesAsync();

            return tipoOT;
        }

        private bool TipoOTExists(int id)
        {
            return _context.TiposOT.Any(e => e.Id == id);
        }
    }
}
