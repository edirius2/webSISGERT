using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webSISGERT.Utilidades
{
    public interface IAlmacenadorArchivos
    {
        Task<string> Crear(byte[] archivo, string contentType, string extension, string container, string nombre);

        Task Borrar(string ruta, string container);
        
    }
}
