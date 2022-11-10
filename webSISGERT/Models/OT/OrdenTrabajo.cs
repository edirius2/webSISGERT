using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace webSISGERT.Models.OT
{
    public class OrdenTrabajo
    {
        public enum EstadoOT
        {
            Activo,
            Cancelado,
            Cerrado
        }
        public int Id { get; set; }
        [StringLength(maximumLength: 15, ErrorMessage = "El numero maximo de caracteres para el codigo es 15.")]
        public string Codigo { get; set; }
        public Boolean Favorito { get; set; }
        public int ClienteId { get; set; }
        public virtual Cliente cliente { get; set; }
        public int MaquinariaId { get; set; }
        public virtual Maquinaria maquinaria {get;set;}
        public DateTime Fecha { get; set; }
        public string Descripcion { get; set; }
        public string Observaciones { get; set; }
        public string InformePreliminar { get; set; }
        public string FormatoRecepcionEquipos { get; set; }
        public string ActaConformidad { get; set; }
        public EstadoOT Estado { get; set; }
        public virtual ICollection<DetalleTarea> DetallesTareas { get; set; }
        public virtual ICollection<DetalleEmpleado> DetallesEmpleados { get; set; }
        public virtual ICollection<DetalleRepuesto> DetallesRepuestos { get; set; }
        public virtual ICollection<DetallePago> DetallesPagos { get; set; }
        public virtual ICollection<DetalleCosto> DetallesCosto { get; set; }
    }
}
