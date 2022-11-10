using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webSISGERT.Models.OT
{
    public class DetalleCostoTarea
    {
        public int Id { get; set; }
        public int CostoId { get; set; }
        public int DetalleTareaId { get; set; }
        public virtual DetalleTarea detalleTarea { get; set; }
        public virtual Costo costo { get; set; }
        public double Precio { get; set; }
    }
}
