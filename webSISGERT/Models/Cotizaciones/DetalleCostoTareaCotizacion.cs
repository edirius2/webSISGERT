using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webSISGERT.Models.OT;

namespace webSISGERT.Models.Cotizaciones
{
    public class DetalleCostoTareaCotizacion
    {
        public int Id { get; set; }
        public int CostoId { get; set; }
        public virtual Costo costo { get; set; }
        public int DetalleTareaCotizacionId { get; set; }
        public virtual DetalleTareaCotizacion detalleTareaCotizacion { get; set; }
        public double Precio { get; set; }

    }
}
