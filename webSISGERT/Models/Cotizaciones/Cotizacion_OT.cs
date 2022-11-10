using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webSISGERT.Models.OT;

namespace webSISGERT.Models.Cotizaciones
{
    public class Cotizacion_OT
    {
        public int CotizacionId { get; set; }
        public int OrdenTrabajoId { get; set; }
        public virtual Cotizacion cotizacion { get; set; }
        public virtual OrdenTrabajo ordenTrabajo { get; set; }
    }
}
