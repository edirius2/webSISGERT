using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webSISGERT.Models.OT
{
    public class DetalleEmpleado
    {
        public int Id { get; set; }
        public int EmpleadoId { get; set; }
        public virtual Empleado empleado { get; set; }
        public int OrdenTrabajoId { get; set; }
        public virtual OrdenTrabajo ordenTrabajo { get; set; }
    }
}
