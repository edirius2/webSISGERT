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
    public class TipoMaquinariasController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public TipoMaquinariasController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/TipoMaquinarias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoMaquinaria>>> GetTiposMaquinaria()
        {
            return await _context.TiposMaquinaria.ToListAsync();
        }

        // GET: api/TipoMaquinarias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoMaquinaria>> GetTipoMaquinaria(int id)
        {
            var tipoMaquinaria = await _context.TiposMaquinaria.FindAsync(id);

            if (tipoMaquinaria == null)
            {
                return NotFound();
            }

            return tipoMaquinaria;
        }

        // PUT: api/TipoMaquinarias/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoMaquinaria(int id, TipoMaquinaria tipoMaquinaria)
        {
            if (id != tipoMaquinaria.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoMaquinaria).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoMaquinariaExists(id))
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

        // POST: api/TipoMaquinarias
        [HttpPost]
        public async Task<ActionResult<TipoMaquinaria>> PostTipoMaquinaria(TipoMaquinaria tipoMaquinaria)
        {
            _context.TiposMaquinaria.Add(tipoMaquinaria);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoMaquinaria", new { id = tipoMaquinaria.Id }, tipoMaquinaria);
        }

        // DELETE: api/TipoMaquinarias/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TipoMaquinaria>> DeleteTipoMaquinaria(int id)
        {
            var tipoMaquinaria = await _context.TiposMaquinaria.FindAsync(id);
            if (tipoMaquinaria == null)
            {
                return NotFound();
            }

            _context.TiposMaquinaria.Remove(tipoMaquinaria);
            await _context.SaveChangesAsync();

            return tipoMaquinaria;
        }

        private bool TipoMaquinariaExists(int id)
        {
            return _context.TiposMaquinaria.Any(e => e.Id == id);
        }
    }
}
