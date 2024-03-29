﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webSISGERT.Models.OT
{
    public class DetallePago
    {
        public int Id { get; set; }
        public double Pago { get; set; }
        public DateTime Fecha { get; set; }
        public int OrdenTrabajoId { get; set; }
        public virtual OrdenTrabajo ordenTrabajo { get; set; }
    }
}
