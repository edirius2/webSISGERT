using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using webSISGERT.Models.OT;

namespace webSISGERT.Models.Cotizaciones
{
    public class DetalleRepuestosCotizacion
    {
        public int Id { get; set; }
        public int RepuestoId { get; set; }
        public virtual Repuesto repuesto { get; set; }
        public double CostoRepuesto { get; set; }
        public int Cantidad { get; set; }
        public int CotizacionId { get; set; }
        public virtual Cotizacion cotizacion {get;set;}
    }
}
