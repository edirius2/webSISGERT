using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webSISGERT.Models;
using webSISGERT.Models.OT;

namespace webSISGERT.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    [ApiController]
    public class MaquinariasController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public MaquinariasController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/Maquinarias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Maquinaria>>> GetMaquinarias()
        {
            return await _context.Maquinarias.Include(clientes => clientes.cliente).Include(tipos => tipos.Tipo).Include(estado => estado.Estado).Include(marcas => marcas.Marca).ToListAsync();
        }


        [HttpGet("[action]/{filtroClienteId}")]
        public async Task<ActionResult<IEnumerable<Maquinaria>>> GetFiltroMaquinariasXCliente(int filtroClienteId)
        {
            return await _context.Maquinarias.Include(clientes => clientes.cliente).Include(tipos => tipos.Tipo).Include(estado => estado.Estado).Include(marcas => marcas.Marca).Where(m => m.ClienteId == filtroClienteId).ToListAsync();
        }

        [HttpGet("[action]/{filtroPlaca}/{idTipoMaquinaria}/{idEstadoMaquinaria}/{idMarcaMaquinaria}/{idCliente}")]
        public async Task<ActionResult<IEnumerable<Maquinaria>>> GetMaquinariasFiltro(string filtroPlaca, int idTipoMaquinaria, int idEstadoMaquinaria, int idMarcaMaquinaria, int idCliente )
        {
            string idTipo = "";
            string idEstado = "";
            string idMarca = "";
            string idCliente2 = "";

            if (filtroPlaca=="vacio")
            {
                filtroPlaca = "";
            }

            if (idTipoMaquinaria != 0)
            {
                idTipo = idTipoMaquinaria.ToString();
            }

            if (idEstadoMaquinaria != 0)
            {
                idEstado = idEstadoMaquinaria.ToString();
            }

            if (idMarcaMaquinaria != 0)
            {
                idMarca = idMarcaMaquinaria.ToString();
            }

            if (idCliente != 0)
            {
                idCliente2 = idCliente.ToString();
            }

            return await _context.Maquinarias.Include(clientes => clientes.cliente).Include(tipos => tipos.Tipo).Include(estado => estado.Estado).Include(marcas => marcas.Marca).Where(m => m.Placa.Contains(filtroPlaca))
                    .Where(t => t.TipoMaquinariaId.ToString().Contains(idTipo))
                    .Where(t => t.EstadoMaquinariaId.ToString().Contains(idEstado))
                    .Where(t => t.MarcaMaquinariaId.ToString().Contains(idMarca))
                    .Where(t=> t.ClienteId.ToString().Contains(idCliente2))
                    .ToListAsync();

            //if (filtroPlaca != "")
            //{
            //    return await _context.Maquinarias.Include(clientes => clientes.cliente).Include(tipos => tipos.Tipo).Include(estado => estado.Estado).Include(marcas => marcas.Marca).Where(m => m.Placa.Contains(filtroPlaca)).ToListAsync();
            //}
            //else
            //{
            //    if (idTipoMaquinaria!= 0)
            //    {
            //        return await _context.Maquinarias.Include(clientes => clientes.cliente).Include(tipos => tipos.Tipo).Include(estado => estado.Estado).Include(marcas => marcas.Marca).Where(m => m.TipoMaquinariaId == idTipoMaquinaria).ToListAsync();
            //    }
            //    else
            //    {
            //        if (idEstadoMaquinaria != 0)
            //        {
            //            return await _context.Maquinarias.Include(clientes => clientes.cliente).Include(tipos => tipos.Tipo).Include(estado => estado.Estado).Include(marcas => marcas.Marca).Where(m => m.EstadoMaquinariaId == idEstadoMaquinaria).ToListAsync();
            //        }
            //        else
            //        {
            //            if (idMarcaMaquinaria != 0)
            //            {
            //                return await _context.Maquinarias.Include(clientes => clientes.cliente).Include(tipos => tipos.Tipo).Include(estado => estado.Estado).Include(marcas => marcas.Marca).Where(m => m.MarcaMaquinariaId == idMarcaMaquinaria).ToListAsync();
            //            }
            //            else
            //            {
            //                return await _context.Maquinarias.Include(clientes => clientes.cliente).Include(tipos => tipos.Tipo).Include(estado => estado.Estado).Include(marcas => marcas.Marca).ToListAsync();
            //            }
            //        }
            //    }
            //}

        }

        // GET: api/Maquinarias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Maquinaria>> GetMaquinaria(int id)
        {
            var maquinaria = await _context.Maquinarias.Include(clientes => clientes.cliente).Include(tipos => tipos.Tipo).Include(marcas => marcas.Marca).Include(estados => estados.Estado).Where(m => m.Id == id).FirstAsync();

            if (maquinaria == null)
            {
                return NotFound();
            }

            return maquinaria;
        }

        // PUT: api/Maquinarias/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMaquinaria(int id, Maquinaria maquinaria)
        {
            _context.Clientes.Attach(maquinaria.cliente);
            _context.EstadosMaquinaria.Attach(maquinaria.Estado);
            _context.TiposMaquinaria.Attach(maquinaria.Tipo);
            _context.MarcasMaquinaria.Attach(maquinaria.Marca);
            _context.Maquinarias.Add(maquinaria);

            if (id != maquinaria.Id)
            {
                return BadRequest();
            }

            _context.Entry(maquinaria).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MaquinariaExists(id))
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

        // POST: api/Maquinarias
        [HttpPost]
        public async Task<ActionResult<Maquinaria>> PostMaquinaria(Maquinaria maquinaria)
        {
            _context.Clientes.Attach(maquinaria.cliente);
            _context.EstadosMaquinaria.Attach(maquinaria.Estado);
            _context.TiposMaquinaria.Attach(maquinaria.Tipo);
            _context.MarcasMaquinaria.Attach(maquinaria.Marca);
            _context.Maquinarias.Add(maquinaria);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMaquinaria", new { id = maquinaria.Id }, maquinaria);
        }

        // DELETE: api/Maquinarias/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Maquinaria>> DeleteMaquinaria(int id)
        {
            var maquinaria = await _context.Maquinarias.FindAsync(id);
            if (maquinaria == null)
            {
                return NotFound();
            }

            _context.Maquinarias.Remove(maquinaria);
            await _context.SaveChangesAsync();

            return maquinaria;
        }

        private bool MaquinariaExists(int id)
        {
            return _context.Maquinarias.Any(e => e.Id == id);
        }
    }
}
