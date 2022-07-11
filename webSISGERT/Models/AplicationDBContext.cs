using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using webSISGERT.Models.OT;


namespace webSISGERT.Models
{
    public class AplicationDBContext:DbContext
    {
        public AplicationDBContext(DbContextOptions<AplicationDBContext> options) : base(options)
        {

        }

        public DbSet<MarcaMaquinaria> MarcasMaquinaria { get; set; }
        public DbSet<TipoMaquinaria> TiposMaquinaria { get; set; }
        public DbSet<EstadoMaquinaria> EstadosMaquinaria { get; set; }
        public DbSet<Maquinaria> Maquinarias { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Repuesto> Repuestos { get; set; }
        public DbSet<DetalleTarea> DetallesTareas { get; set; }
        public DbSet<OrdenTrabajo> OrdenesTrabajo { get; set; }
        public DbSet<webSISGERT.Models.OT.Tarea> Tarea { get; set; }
        public DbSet<Empleado> Empleados { get; set; }
        public DbSet<DetalleEmpleado> DetallesEmpleados { get; set; }
        public DbSet<DetalleRepuesto> DetalleRepuestos { get; set; }
        public DbSet<DetallePago> DetallePagos { get; set; }
    }
}
