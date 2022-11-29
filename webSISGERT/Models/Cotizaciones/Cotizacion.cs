using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using webSISGERT.Models.OT;

namespace webSISGERT.Models.Cotizaciones
{
    public class Cotizacion
    {
        public enum EstadoCotizacion{
            Activo,
            Cancelado
        }
        public int Id { get; set; }
        [StringLength(maximumLength:15,ErrorMessage ="El maximo numero de caracteres es 15")]
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        public int ClienteId { get; set; }
        public virtual Cliente cliente { get; set; }
        public DateTime Fecha { get; set; }
        public int MaquinariaId { get; set; }
        public virtual Maquinaria maquinaria { get; set; }
        public EstadoCotizacion Estado { get; set; }
        public Boolean Enlazado { get; set; }
        public string Observaciones { get; set; }
        public virtual ICollection<DetalleCostoCotizacion> DetallesCostos { get; set; }
        public virtual ICollection<DetalleTareaCotizacion> DetallesTareas { get; set; }
        public virtual ICollection<DetalleRepuestosCotizacion> DetallesRepuestos { get; set; }
        public virtual ICollection<Cotizacion_OT> OrdenesTrabajo { get; set; }
    }
}
