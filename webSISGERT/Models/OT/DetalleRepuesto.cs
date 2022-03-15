using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webSISGERT.Models.OT
{
    public class DetalleRepuesto
    {
        public int Id { get; set; }
        public int Cantidad { get; set; }
        public double Precio { get; set; }
        public int RepuestoId { get; set; }
        public virtual Repuesto repuesto { get; set; }
        public int OrdenTrabajoId { get; set; }
        public virtual OrdenTrabajo ordenTrabajo { get; set; }
    }
}

