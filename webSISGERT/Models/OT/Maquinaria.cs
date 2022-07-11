using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webSISGERT.Models.OT
{
    public class Maquinaria
    {
        public int Id { get; set; }
        public string Placa { get; set; }
        public int MarcaMaquinariaId { get; set; }
        public virtual MarcaMaquinaria Marca { get; set; }
        public int TipoMaquinariaId { get; set; }
        public virtual TipoMaquinaria Tipo { get; set; }
        public int EstadoMaquinariaId { get; set; }
        public virtual EstadoMaquinaria Estado { get;set;}
        public int ClienteId { get; set; }
        public virtual Cliente cliente { get; set; }
    }
}
