using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webSISGERT.Models.OT
{
    public class DetalleCosto
    {
        public int Id { get; set; }
        public int OrdenTrabajoId { get; set; }
        public virtual OrdenTrabajo ordenTrabajo { get; set; }
        public int CostoId { get; set; }
        public virtual Costo costo { get; set; }
        public double Precio { get; set; }
    }
}
