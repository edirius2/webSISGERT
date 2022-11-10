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
    public class DetalleCostoTareasController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public DetalleCostoTareasController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/DetalleCostoTareas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetalleCostoTarea>>> GetDetallesCostoTareas()
        {
            return await _context.DetallesCostoTareas.ToListAsync();
        }

        // GET: api/DetalleCostoTareas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DetalleCostoTarea>> GetDetalleCostoTarea(int id)
        {
            var detalleCostoTarea = await _context.DetallesCostoTareas.FindAsync(id);

            if (detalleCostoTarea == null)
            {
                return NotFound();
            }

            return detalleCostoTarea;
        }

        // PUT: api/DetalleCostoTareas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetalleCostoTarea(int id, DetalleCostoTarea detalleCostoTarea)
        {
            if (id != detalleCostoTarea.Id)
            {
                return BadRequest();
            }

            _context.Entry(detalleCostoTarea).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetalleCostoTareaExists(id))
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

        // POST: api/DetalleCostoTareas
        [HttpPost]
        public async Task<ActionResult<DetalleCostoTarea>> PostDetalleCostoTarea(DetalleCostoTarea detalleCostoTarea)
        {
            _context.DetallesCostoTareas.Add(detalleCostoTarea);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetalleCostoTarea", new { id = detalleCostoTarea.Id }, detalleCostoTarea);
        }

        // DELETE: api/DetalleCostoTareas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetalleCostoTarea>> DeleteDetalleCostoTarea(int id)
        {
            var detalleCostoTarea = await _context.DetallesCostoTareas.FindAsync(id);
            if (detalleCostoTarea == null)
            {
                return NotFound();
            }

            _context.DetallesCostoTareas.Remove(detalleCostoTarea);
            await _context.SaveChangesAsync();

            return detalleCostoTarea;
        }

        private bool DetalleCostoTareaExists(int id)
        {
            return _context.DetallesCostoTareas.Any(e => e.Id == id);
        }
    }
}
