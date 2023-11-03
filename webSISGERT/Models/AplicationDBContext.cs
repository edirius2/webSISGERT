using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using webSISGERT.Models.OT;
using webSISGERT.Models.Cotizaciones;
using webSISGERT.Models.cEmpleado;
using Microsoft.AspNetCore.Identity;

namespace webSISGERT.Models
{
    public class AplicationDBContext:IdentityDbContext<ApplicationUser>
    {
        public AplicationDBContext(DbContextOptions<AplicationDBContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cotizacion_OT>().HasKey(sc => new { sc.CotizacionId, sc.OrdenTrabajoId});
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<MarcaMaquinaria> MarcasMaquinaria { get; set; }
        public DbSet<TipoMaquinaria> TiposMaquinaria { get; set; }
        public DbSet<EstadoMaquinaria> EstadosMaquinaria { get; set; }
        public DbSet<Maquinaria> Maquinarias { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Repuesto> Repuestos { get; set; }
        public DbSet<webSISGERT.Models.OT.Tarea> Tarea { get; set; }
        public DbSet<Empleado> Empleados { get; set; }

        public DbSet<TipoOT> TiposOT { get; set; }
        public DbSet<OrdenTrabajo> OrdenesTrabajo { get; set; }
        public DbSet<DetalleTarea> DetallesTareas { get; set; }
        public DbSet<DetalleEmpleado> DetallesEmpleados { get; set; }
        public DbSet<DetalleRepuesto> DetalleRepuestos { get; set; }
        public DbSet<DetallePago> DetallePagos { get; set; }
        public DbSet<DetalleCostoTarea> DetallesCostoTareas { get; set; }
        public DbSet<DetalleCosto> DetallesCosto { get; set; }
        //Cotizaciones
        public DbSet<Cotizacion> Cotizaciones { get; set; }
        public DbSet<DetalleTareaCotizacion> DetallesTareaCotizacion { get; set; }
        public DbSet<DetalleCostoTareaCotizacion> DetallesCostoTareaCotizacion { get; set; }
        public DbSet<DetalleRepuestosCotizacion> DetallesRepuestosCotizacion { get; set; }
        public DbSet<DetalleCostoCotizacion> DetallesCostoCotizacion { get; set; }
        public DbSet<Cotizacion_OT> CotizacionesOrdenTrabajos { get; set; }
        public DbSet<webSISGERT.Models.OT.Costo> Costo { get; set; }
        public DbSet<Especialidad> Especialidades { get; set; }
       
    }
}

