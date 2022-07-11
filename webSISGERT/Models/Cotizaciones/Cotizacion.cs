using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webSISGERT.Models.OT;

namespace webSISGERT.Models.Cotizaciones
{
    public class Cotizacion
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public int ClienteId { get; set; }
        public virtual Cliente cliente { get; set; }
        public DateTime Fecha { get; set; }
        public string Estado { get; set; }
    }
}
