using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webSISGERT.Models.OT
{
    public class OrdenTrabajo
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public Boolean Favorito { get; set; }
        public int ClienteId { get; set; }
        public virtual Cliente cliente { get; set; }
        public DateTime Fecha { get; set; }
        public string InformePreliminar { get; set; }
        public string FormatoRecepcionEquipos { get; set; }
        public string ActaConformidad { get; set; }
        public string Estado { get; set; }
        public virtual ICollection<DetalleTarea> DetallesTareas { get; set; }
        public virtual ICollection<DetalleEmpleado> DetallesEmpleados { get; set; }
        public virtual ICollection<DetalleRepuesto> DetallesRepuestos { get; set; }
        public virtual ICollection<DetallePago> DetallesPagos { get; set; }
    }
}
