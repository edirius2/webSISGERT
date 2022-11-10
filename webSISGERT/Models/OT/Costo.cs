using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using webSISGERT.Models.Cotizaciones;


namespace webSISGERT.Models.OT
{
    public class Costo
    {
        public int Id { get; set; }
        [StringLength(9,ErrorMessage ="el numero maximo de caractes es 9")]
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        public string Comentario { get; set; }
    }
}
