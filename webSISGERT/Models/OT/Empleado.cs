﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace webSISGERT.Models.OT
{
    public class Empleado
    {
        public enum enumTipoDocumentoEmpleado
        {
            DNI,
            PASAPORTE
        }

        public int Id { get; set; }
        public enumTipoDocumentoEmpleado TipoDocumento { get; set; }
        [Required(ErrorMessage = "El numero documento es requerido.")]
        [StringLength(maximumLength: 15, ErrorMessage = "El numero de documento debe tener maximo 15 caracteres")]
        public string NumeroDocumento { get; set; }
        public string Nombre { get; set; }
        public string Telefono { get; set; }
        [MaxLength(50, ErrorMessage = "El campo correo electronico debe tener maximo 50 caracteres")]
        public string CorreoElectronico { get; set; }
    }
}
