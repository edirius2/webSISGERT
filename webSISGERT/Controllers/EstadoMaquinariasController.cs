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
    public class EstadoMaquinariasController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public EstadoMaquinariasController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/EstadoMaquinarias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EstadoMaquinaria>>> GetEstadosMaquinaria()
        {
            return await _context.EstadosMaquinaria.ToListAsync();
        }

        // GET: api/EstadoMaquinarias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EstadoMaquinaria>> GetEstadoMaquinaria(int id)
        {
            var estadoMaquinaria = await _context.EstadosMaquinaria.FindAsync(id);

            if (estadoMaquinaria == null)
            {
                return NotFound();
            }

            return estadoMaquinaria;
        }

        // PUT: api/EstadoMaquinarias/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstadoMaquinaria(int id, EstadoMaquinaria estadoMaquinaria)
        {
            if (id != estadoMaquinaria.Id)
            {
                return BadRequest();
            }

            _context.Entry(estadoMaquinaria).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EstadoMaquinariaExists(id))
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

        // POST: api/EstadoMaquinarias
        [HttpPost]
        public async Task<ActionResult<EstadoMaquinaria>> PostEstadoMaquinaria(EstadoMaquinaria estadoMaquinaria)
        {
            _context.EstadosMaquinaria.Add(estadoMaquinaria);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEstadoMaquinaria", new { id = estadoMaquinaria.Id }, estadoMaquinaria);
        }

        // DELETE: api/EstadoMaquinarias/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EstadoMaquinaria>> DeleteEstadoMaquinaria(int id)
        {
            var estadoMaquinaria = await _context.EstadosMaquinaria.FindAsync(id);
            if (estadoMaquinaria == null)
            {
                return NotFound();
            }

            _context.EstadosMaquinaria.Remove(estadoMaquinaria);
            await _context.SaveChangesAsync();

            return estadoMaquinaria;
        }

        private bool EstadoMaquinariaExists(int id)
        {
            return _context.EstadosMaquinaria.Any(e => e.Id == id);
        }
    }
}
