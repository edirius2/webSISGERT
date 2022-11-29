using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webSISGERT.Models.OT;

namespace webSISGERT.Models.Cotizaciones
{
    public class DetalleCostoCotizacion
    {
        public int Id { get; set; }
        public int CostoId { get; set; }
        public virtual Costo costo { get; set; }
        public double Precio { get; set; }
        public int cotizacionId { get; set; }
        public virtual Cotizacion cotizacion { get; set; }
    }
}
