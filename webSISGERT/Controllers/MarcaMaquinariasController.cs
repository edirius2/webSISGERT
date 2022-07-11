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
    public class MarcaMaquinariasController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public MarcaMaquinariasController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/MarcaMaquinarias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MarcaMaquinaria>>> GetMarcasMaquinaria()
        {
            return await _context.MarcasMaquinaria.ToListAsync();
        }

        // GET: api/MarcaMaquinarias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MarcaMaquinaria>> GetMarcaMaquinaria(int id)
        {
            var marcaMaquinaria = await _context.MarcasMaquinaria.FindAsync(id);

            if (marcaMaquinaria == null)
            {
                return NotFound();
            }

            return marcaMaquinaria;
        }

        // PUT: api/MarcaMaquinarias/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMarcaMaquinaria(int id, MarcaMaquinaria marcaMaquinaria)
        {
            if (id != marcaMaquinaria.Id)
            {
                return BadRequest();
            }

            _context.Entry(marcaMaquinaria).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MarcaMaquinariaExists(id))
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

        // POST: api/MarcaMaquinarias
        [HttpPost]
        public async Task<ActionResult<MarcaMaquinaria>> PostMarcaMaquinaria(MarcaMaquinaria marcaMaquinaria)
        {
            _context.MarcasMaquinaria.Add(marcaMaquinaria);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMarcaMaquinaria", new { id = marcaMaquinaria.Id }, marcaMaquinaria);
        }

        // DELETE: api/MarcaMaquinarias/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MarcaMaquinaria>> DeleteMarcaMaquinaria(int id)
        {
            var marcaMaquinaria = await _context.MarcasMaquinaria.FindAsync(id);
            if (marcaMaquinaria == null)
            {
                return NotFound();
            }

            _context.MarcasMaquinaria.Remove(marcaMaquinaria);
            await _context.SaveChangesAsync();

            return marcaMaquinaria;
        }

        private bool MarcaMaquinariaExists(int id)
        {
            return _context.MarcasMaquinaria.Any(e => e.Id == id);
        }
    }
}
