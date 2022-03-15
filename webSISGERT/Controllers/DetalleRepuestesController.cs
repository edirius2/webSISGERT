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
    public class DetalleRepuestesController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public DetalleRepuestesController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/DetalleRepuestes
        [HttpGet("idOT")]
        public async Task<ActionResult<IEnumerable<DetalleRepuesto>>> GetDetalleRepuestos(int idOT)
        {
            return await _context.DetalleRepuestos.Include(rep=> rep.repuesto).Where(rep=> rep.OrdenTrabajoId == idOT).ToListAsync();
        }

        // GET: api/DetalleRepuestes/5
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<DetalleRepuesto>> GetDetalleRepuesto(int id)
        {
            var detalleRepuesto = await _context.DetalleRepuestos.Include(rep=> rep.repuesto).Where(rep=> rep.Id == id).FirstAsync();

            if (detalleRepuesto == null)
            {
                return NotFound();
            }

            return detalleRepuesto;
        }

        // PUT: api/DetalleRepuestes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetalleRepuesto(int id, DetalleRepuesto detalleRepuesto)
        {
            if (id != detalleRepuesto.Id)
            {
                return BadRequest();
            }

            _context.Entry(detalleRepuesto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetalleRepuestoExists(id))
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

        // POST: api/DetalleRepuestes
        [HttpPost]
        public async Task<ActionResult<DetalleRepuesto>> PostDetalleRepuesto(DetalleRepuesto detalleRepuesto)
        {
            _context.DetalleRepuestos.Add(detalleRepuesto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetalleRepuesto", new { id = detalleRepuesto.Id }, detalleRepuesto);
        }

        // DELETE: api/DetalleRepuestes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetalleRepuesto>> DeleteDetalleRepuesto(int id)
        {
            var detalleRepuesto = await _context.DetalleRepuestos.FindAsync(id);
            if (detalleRepuesto == null)
            {
                return NotFound();
            }

            _context.DetalleRepuestos.Remove(detalleRepuesto);
            await _context.SaveChangesAsync();

            return detalleRepuesto;
        }

        private bool DetalleRepuestoExists(int id)
        {
            return _context.DetalleRepuestos.Any(e => e.Id == id);
        }
    }
}
