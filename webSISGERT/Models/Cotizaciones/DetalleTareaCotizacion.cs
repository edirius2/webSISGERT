using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webSISGERT.Models.OT;

namespace webSISGERT.Models.Cotizaciones
{
    public class DetalleTareaCotizacion
    {
        public int Id { get; set; }
        public int TareaId { get; set; }
        public virtual Tarea tarea { get; set; }
        public int Cantidad { get; set; }
        public double Precio { get; set; }
        public double Hora { get; set; }
        public virtual Cotizacion cotizacion { get; set; }
        public virtual ICollection<DetalleCostoTareaCotizacion> DetallesCostos { get; set; }
    }
}
