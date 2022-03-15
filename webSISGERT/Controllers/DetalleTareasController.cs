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
    public class DetalleTareasController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public DetalleTareasController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/DetalleTareas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetalleTarea>>> GetDetallesTareas()
        {
            return await _context.DetallesTareas.ToListAsync();
        }

        // GET: api/DetalleTareas/5
        //[HttpGet("{idordentrabajo}/{id}")]
        [HttpGet("{idOT}")]
        public async Task<ActionResult<IEnumerable<DetalleTarea>>> GetDetalleTareas(int idOT)
        {
            //private List<DetalleTarea> lista = new List<DetalleTarea>();
            var lista = await _context.DetallesTareas.Include(dt => dt.tarea).Where(d => d.OrdenTrabajoId == idOT).ToListAsync();

            return lista;

        }


        // GET: api/DetalleTareas/5
        [Route("[action]/{id}")]
        [HttpGet]
        public async Task<ActionResult<DetalleTarea>> GetDetalleTarea(int id)
        {
            var detalleTarea = await _context.DetallesTareas.FindAsync(id);

            if (detalleTarea == null)
            {
                return NotFound();
            }

            return detalleTarea;
        }

        // PUT: api/DetalleTareas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetalleTarea(int id, DetalleTarea detalleTarea)
        {
            if (id != detalleTarea.Id)
            {
                return BadRequest();
            }

            _context.Entry(detalleTarea).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetalleTareaExists(id))
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

        // POST: api/DetalleTareas
        [HttpPost]
        public async Task<ActionResult<DetalleTarea>> PostDetalleTarea(DetalleTarea detalleTarea)
        {
            _context.Tarea.Attach(detalleTarea.tarea);
            _context.DetallesTareas.Add(detalleTarea);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetalleTarea", new { id = detalleTarea.Id }, detalleTarea);
        }

        // DELETE: api/DetalleTareas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DetalleTarea>> DeleteDetalleTarea(int id)
        {
            var detalleTarea = await _context.DetallesTareas.FindAsync(id);
            if (detalleTarea == null)
            {
                return NotFound();
            }

            _context.DetallesTareas.Remove(detalleTarea);
            await _context.SaveChangesAsync();

            return detalleTarea;
        }

        private bool DetalleTareaExists(int id)
        {
            return _context.DetallesTareas.Any(e => e.Id == id);
        }
    }
}
