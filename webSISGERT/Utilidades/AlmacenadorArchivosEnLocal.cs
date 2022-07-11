using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.IO;


namespace webSISGERT.Utilidades
{
    public class AlmacenadorArchivosEnLocal : IAlmacenadorArchivos
    {
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public AlmacenadorArchivosEnLocal(IHostingEnvironment hostingEnvironment, IHttpContextAccessor httpContextAccessor)
        {
            _hostingEnvironment = hostingEnvironment;
            _httpContextAccessor = httpContextAccessor;
        }

        public Task Borrar(string ruta, string container)
        {
            string webRootPath = _hostingEnvironment.WebRootPath;
            if (string.IsNullOrEmpty(webRootPath))
            {
                throw new Exception();
            }

            var nombreArchivo = Path.GetFileName(ruta);
            string pathFinal = Path.Combine(webRootPath, ruta);
            if (File.Exists(pathFinal))
            {
                File.Delete(pathFinal);
            }
            return Task.CompletedTask;
        }

        public async Task<string> Crear(byte[] archivo, string contentType, string extension, string container, string nombre)
        {
            string webRootPath = _hostingEnvironment.WebRootPath;
            if (string.IsNullOrEmpty(webRootPath))
            {
                throw new Exception();
            }

            string CarpetaArchivo = Path.Combine(webRootPath, container);
            if (!Directory.Exists(CarpetaArchivo))
            {
                Directory.CreateDirectory(CarpetaArchivo);
            }

            string nombreFinal = $"{nombre}{extension}";
            string rutaFinal = Path.Combine(CarpetaArchivo, nombreFinal);
            await System.IO.File.WriteAllBytesAsync(rutaFinal, archivo);
            string rutaActual = $"{_httpContextAccessor.HttpContext.Request.Scheme}://{_httpContextAccessor.HttpContext.Request.Host}";

            string bdUrl = Path.Combine(rutaActual, container, nombreFinal).Replace("\\", "/");

            return bdUrl;
        }
    }
}
