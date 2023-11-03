using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace webSISGERT.Models.OT
{
    public class TipoOT
    {
        public int Id { get; set; }
        [StringLength(maximumLength:3, ErrorMessage ="El codigo debe tener maximo 3 caracteres.")]
        public string Codigo { get; set; }
        [StringLength(maximumLength: 15, ErrorMessage = "La descripcion debe tener maximo 15 caracteres.")]
        public string Descripcion { get; set; }
    }
}
