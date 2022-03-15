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
    public class RepuestosController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public RepuestosController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/Repuestos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Repuesto>>> GetRepuestos()
        {
            return await _context.Repuestos.ToListAsync();
        }

        // GET: api/Repuestos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Repuesto>> GetRepuesto(int id)
        {
            var repuesto = await _context.Repuestos.FindAsync(id);

            if (repuesto == null)
            {
                return NotFound();
            }

            return repuesto;
        }

        // PUT: api/Repuestos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRepuesto(int id, Repuesto repuesto)
        {
            if (id != repuesto.Id)
            {
                return BadRequest();
            }

            _context.Entry(repuesto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RepuestoExists(id))
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

        // POST: api/Repuestos
        [HttpPost]
        public async Task<ActionResult<Repuesto>> PostRepuesto(Repuesto repuesto)
        {
            _context.Repuestos.Add(repuesto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRepuesto", new { id = repuesto.Id }, repuesto);
        }

        // DELETE: api/Repuestos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Repuesto>> DeleteRepuesto(int id)
        {
            var repuesto = await _context.Repuestos.FindAsync(id);
            if (repuesto == null)
            {
                return NotFound();
            }

            _context.Repuestos.Remove(repuesto);
            await _context.SaveChangesAsync();

            return repuesto;
        }

        private bool RepuestoExists(int id)
        {
            return _context.Repuestos.Any(e => e.Id == id);
        }
    }
}
