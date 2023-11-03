using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace webSISGERT.Models.cEmpleado
{
    public class Especialidad
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(50,ErrorMessage ="Solo se permite 50 caracteres como maximo")]
        public string Descripcion { get; set; }
    }
}
