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
    public class DetalleEmpleadosController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public DetalleEmpleadosController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/DetalleEmpleados
        [HttpGet("{idOT}")]
        public async Task<ActionResult<IEnumerable<DetalleEmpleado>>> GetDetallesEmpleados(int idOT)
        {
            return await _context.DetallesEmpleados.Include(em=> em.empleado).Where(em=>em.OrdenTrabajoId == idOT).ToListAsync();
        }

        // GET: api/DetalleEmpleados/5
        [HttpGet("[action]/{id}")]
        public async Task<ActionResult<DetalleEmpleado>> GetDetalleEmpleado(int id)
        {
            var detalleEmpleado = await _context.DetallesEmpleados.FindAsync(id);

            if (detalleEmpleado == null)
            {
                return NotFound();
            }

            return detalleEmpleado;
        }

        // PUT: api/DetalleEmpleados/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetalleEmpleado(int id, DetalleEmpleado detalleEmpleado)
        {
            if (id != detalleEmpleado.Id)
            {
                return BadRequest();
            }

            _context.Entry(detalleEmpleado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetalleEmpleadoExists(id))
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

        // POST: api/DetalleEmpleados
        [HttpPost]
        public async Task<ActionResult<DetalleEmpleado>> PostDetalleEmpleado(DetalleEmpleado detalleEmpleado)
        {
            _context.Empleados.Attach(detalleEmpleado.empleado);
            _context.DetallesEmpleados.Add(detalleEmpleado);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetalleEmpleado", new { id = detalleEmpleado.Id }, detalleEmpleado);
        }

        // DELETE: api/DetalleEmpleados/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetalleEmpleado>> DeleteDetalleEmpleado(int id)
        {
            var detalleEmpleado = await _context.DetallesEmpleados.FindAsync(id);
            if (detalleEmpleado == null)
            {
                return NotFound();
            }

            _context.DetallesEmpleados.Remove(detalleEmpleado);
            await _context.SaveChangesAsync();

            return detalleEmpleado;
        }

        private bool DetalleEmpleadoExists(int id)
        {
            return _context.DetallesEmpleados.Any(e => e.Id == id);
        }
    }
}
