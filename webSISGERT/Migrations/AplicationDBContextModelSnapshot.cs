﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using webSISGERT.Models;

namespace webSISGERT.Migrations
{
    [DbContext(typeof(AplicationDBContext))]
    partial class AplicationDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("webSISGERT.Models.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("webSISGERT.Models.Cotizaciones.Cotizacion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ClienteId");

                    b.Property<string>("Codigo")
                        .HasMaxLength(15);

                    b.Property<string>("Descripcion");

                    b.Property<bool>("Enlazado");

                    b.Property<int>("Estado");

                    b.Property<DateTime>("Fecha");

                    b.Property<int>("MaquinariaId");

                    b.Property<string>("Observaciones");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

                    b.HasIndex("MaquinariaId");

                    b.ToTable("Cotizaciones");
                });

            modelBuilder.Entity("webSISGERT.Models.Cotizaciones.Cotizacion_OT", b =>
                {
                    b.Property<int>("CotizacionId");

                    b.Property<int>("OrdenTrabajoId");

                    b.HasKey("CotizacionId", "OrdenTrabajoId");

                    b.HasIndex("OrdenTrabajoId");

                    b.ToTable("CotizacionesOrdenTrabajos");
                });

            modelBuilder.Entity("webSISGERT.Models.Cotizaciones.DetalleCostoCotizacion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CostoId");

                    b.Property<double>("Precio");

                    b.Property<int>("cotizacionId");

                    b.HasKey("Id");

                    b.HasIndex("CostoId");

                    b.HasIndex("cotizacionId");

                    b.ToTable("DetallesCostoCotizacion");
                });

            modelBuilder.Entity("webSISGERT.Models.Cotizaciones.DetalleCostoTareaCotizacion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CostoId");

                    b.Property<int>("DetalleTareaCotizacionId");

                    b.Property<double>("Precio");

                    b.HasKey("Id");

                    b.HasIndex("CostoId");

                    b.HasIndex("DetalleTareaCotizacionId");

                    b.ToTable("DetallesCostoTareaCotizacion");
                });

            modelBuilder.Entity("webSISGERT.Models.Cotizaciones.DetalleRepuestosCotizacion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Cantidad");

                    b.Property<double>("CostoRepuesto");

                    b.Property<int>("CotizacionId");

                    b.Property<int>("RepuestoId");

                    b.HasKey("Id");

                    b.HasIndex("CotizacionId");

                    b.HasIndex("RepuestoId");

                    b.ToTable("DetallesRepuestosCotizacion");
                });

            modelBuilder.Entity("webSISGERT.Models.Cotizaciones.DetalleTareaCotizacion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Cantidad");

                    b.Property<double>("CotizacionId");

                    b.Property<int?>("CotizacionId1");

                    b.Property<double>("Hora");

                    b.Property<double>("Precio");

                    b.Property<int>("TareaId");

                    b.HasKey("Id");

                    b.HasIndex("CotizacionId1");

                    b.HasIndex("TareaId");

                    b.ToTable("DetallesTareaCotizacion");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.Cliente", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Contacto");

                    b.Property<string>("CorreoElectronico")
                        .HasMaxLength(50);

                    b.Property<string>("Nombre");

                    b.Property<string>("NumeroDocumento")
                        .IsRequired()
                        .HasMaxLength(15);

                    b.Property<string>("Observaciones");

                    b.Property<string>("Telefono");

                    b.Property<int>("TipoDocumento");

                    b.HasKey("Id");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.Costo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Codigo")
                        .HasMaxLength(9);

                    b.Property<string>("Comentario");

                    b.Property<string>("Descripcion");

                    b.HasKey("Id");

                    b.ToTable("Costo");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetalleCosto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CostoId");

                    b.Property<int>("OrdenTrabajoId");

                    b.Property<double>("Precio");

                    b.HasKey("Id");

                    b.HasIndex("CostoId");

                    b.HasIndex("OrdenTrabajoId");

                    b.ToTable("DetallesCosto");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetalleCostoTarea", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CostoId");

                    b.Property<int>("DetalleTareaId");

                    b.Property<double>("Precio");

                    b.HasKey("Id");

                    b.HasIndex("CostoId");

                    b.HasIndex("DetalleTareaId");

                    b.ToTable("DetallesCostoTareas");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetalleEmpleado", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("EmpleadoId");

                    b.Property<double>("Horas");

                    b.Property<int>("OrdenTrabajoId");

                    b.HasKey("Id");

                    b.HasIndex("EmpleadoId");

                    b.HasIndex("OrdenTrabajoId");

                    b.ToTable("DetallesEmpleados");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetallePago", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Fecha");

                    b.Property<int>("OrdenTrabajoId");

                    b.Property<double>("Pago");

                    b.HasKey("Id");

                    b.HasIndex("OrdenTrabajoId");

                    b.ToTable("DetallePagos");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetalleRepuesto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Cantidad");

                    b.Property<int>("OrdenTrabajoId");

                    b.Property<double>("Precio");

                    b.Property<int>("RepuestoId");

                    b.HasKey("Id");

                    b.HasIndex("OrdenTrabajoId");

                    b.HasIndex("RepuestoId");

                    b.ToTable("DetalleRepuestos");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetalleTarea", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Cantidad");

                    b.Property<double>("Horas");

                    b.Property<int>("OrdenTrabajoId");

                    b.Property<double>("Precio");

                    b.Property<int>("TareaId");

                    b.HasKey("Id");

                    b.HasIndex("OrdenTrabajoId");

                    b.HasIndex("TareaId");

                    b.ToTable("DetallesTareas");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.Empleado", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CorreoElectronico")
                        .HasMaxLength(50);

                    b.Property<string>("Nombre");

                    b.Property<string>("NumeroDocumento")
                        .IsRequired()
                        .HasMaxLength(15);

                    b.Property<string>("Observaciones");

                    b.Property<string>("Telefono");

                    b.Property<int>("TipoDocumento");

                    b.HasKey("Id");

                    b.ToTable("Empleados");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.EstadoMaquinaria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Descripcion");

                    b.HasKey("Id");

                    b.ToTable("EstadosMaquinaria");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.Maquinaria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ClienteId");

                    b.Property<int>("EstadoMaquinariaId");

                    b.Property<int>("MarcaMaquinariaId");

                    b.Property<string>("Placa");

                    b.Property<int>("TipoMaquinariaId");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

                    b.HasIndex("EstadoMaquinariaId");

                    b.HasIndex("MarcaMaquinariaId");

                    b.HasIndex("TipoMaquinariaId");

                    b.ToTable("Maquinarias");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.MarcaMaquinaria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Descripcion");

                    b.HasKey("Id");

                    b.ToTable("MarcasMaquinaria");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.OrdenTrabajo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ActaConformidad");

                    b.Property<int>("ClienteId");

                    b.Property<string>("Codigo")
                        .HasMaxLength(15);

                    b.Property<string>("Descripcion");

                    b.Property<int>("Estado");

                    b.Property<bool>("Favorito");

                    b.Property<DateTime>("Fecha");

                    b.Property<string>("FormatoRecepcionEquipos");

                    b.Property<string>("InformePreliminar");

                    b.Property<int>("MaquinariaId");

                    b.Property<string>("Observaciones");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

                    b.HasIndex("MaquinariaId");

                    b.ToTable("OrdenesTrabajo");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.Repuesto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Nombre");

                    b.Property<double>("PrecioReferencial");

                    b.HasKey("Id");

                    b.ToTable("Repuestos");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.Tarea", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Nombre");

                    b.Property<double>("PrecioReferencial");

                    b.HasKey("Id");

                    b.ToTable("Tarea");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.TipoMaquinaria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Descripcion");

                    b.HasKey("Id");

                    b.ToTable("TiposMaquinaria");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("webSISGERT.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("webSISGERT.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("webSISGERT.Models.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.Cotizaciones.Cotizacion", b =>
                {
                    b.HasOne("webSISGERT.Models.OT.Cliente", "cliente")
                        .WithMany()
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.OT.Maquinaria", "maquinaria")
                        .WithMany()
                        .HasForeignKey("MaquinariaId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.Cotizaciones.Cotizacion_OT", b =>
                {
                    b.HasOne("webSISGERT.Models.Cotizaciones.Cotizacion", "cotizacion")
                        .WithMany("OrdenesTrabajo")
                        .HasForeignKey("CotizacionId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.OT.OrdenTrabajo", "ordenTrabajo")
                        .WithMany()
                        .HasForeignKey("OrdenTrabajoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.Cotizaciones.DetalleCostoCotizacion", b =>
                {
                    b.HasOne("webSISGERT.Models.OT.Costo", "costo")
                        .WithMany()
                        .HasForeignKey("CostoId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.Cotizaciones.Cotizacion", "cotizacion")
                        .WithMany("DetallesCostos")
                        .HasForeignKey("cotizacionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.Cotizaciones.DetalleCostoTareaCotizacion", b =>
                {
                    b.HasOne("webSISGERT.Models.OT.Costo", "costo")
                        .WithMany()
                        .HasForeignKey("CostoId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.Cotizaciones.DetalleTareaCotizacion", "detalleTareaCotizacion")
                        .WithMany("DetallesCostos")
                        .HasForeignKey("DetalleTareaCotizacionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.Cotizaciones.DetalleRepuestosCotizacion", b =>
                {
                    b.HasOne("webSISGERT.Models.Cotizaciones.Cotizacion", "cotizacion")
                        .WithMany("DetallesRepuestos")
                        .HasForeignKey("CotizacionId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.OT.Repuesto", "repuesto")
                        .WithMany()
                        .HasForeignKey("RepuestoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.Cotizaciones.DetalleTareaCotizacion", b =>
                {
                    b.HasOne("webSISGERT.Models.Cotizaciones.Cotizacion", "Cotizacion")
                        .WithMany("DetallesTareas")
                        .HasForeignKey("CotizacionId1");

                    b.HasOne("webSISGERT.Models.OT.Tarea", "tarea")
                        .WithMany()
                        .HasForeignKey("TareaId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetalleCosto", b =>
                {
                    b.HasOne("webSISGERT.Models.OT.Costo", "costo")
                        .WithMany()
                        .HasForeignKey("CostoId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.OT.OrdenTrabajo", "ordenTrabajo")
                        .WithMany("DetallesCosto")
                        .HasForeignKey("OrdenTrabajoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetalleCostoTarea", b =>
                {
                    b.HasOne("webSISGERT.Models.OT.Costo", "costo")
                        .WithMany()
                        .HasForeignKey("CostoId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.OT.DetalleTarea", "detalleTarea")
                        .WithMany("DetallesCosto")
                        .HasForeignKey("DetalleTareaId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetalleEmpleado", b =>
                {
                    b.HasOne("webSISGERT.Models.OT.Empleado", "empleado")
                        .WithMany()
                        .HasForeignKey("EmpleadoId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.OT.OrdenTrabajo", "ordenTrabajo")
                        .WithMany("DetallesEmpleados")
                        .HasForeignKey("OrdenTrabajoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetallePago", b =>
                {
                    b.HasOne("webSISGERT.Models.OT.OrdenTrabajo", "ordenTrabajo")
                        .WithMany("DetallesPagos")
                        .HasForeignKey("OrdenTrabajoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetalleRepuesto", b =>
                {
                    b.HasOne("webSISGERT.Models.OT.OrdenTrabajo", "ordenTrabajo")
                        .WithMany("DetallesRepuestos")
                        .HasForeignKey("OrdenTrabajoId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.OT.Repuesto", "repuesto")
                        .WithMany()
                        .HasForeignKey("RepuestoId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetalleTarea", b =>
                {
                    b.HasOne("webSISGERT.Models.OT.OrdenTrabajo", "ordenTrabajo")
                        .WithMany("DetallesTareas")
                        .HasForeignKey("OrdenTrabajoId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.OT.Tarea", "tarea")
                        .WithMany()
                        .HasForeignKey("TareaId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.OT.Maquinaria", b =>
                {
                    b.HasOne("webSISGERT.Models.OT.Cliente", "cliente")
                        .WithMany()
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.OT.EstadoMaquinaria", "Estado")
                        .WithMany()
                        .HasForeignKey("EstadoMaquinariaId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.OT.MarcaMaquinaria", "Marca")
                        .WithMany()
                        .HasForeignKey("MarcaMaquinariaId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.OT.TipoMaquinaria", "Tipo")
                        .WithMany()
                        .HasForeignKey("TipoMaquinariaId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webSISGERT.Models.OT.OrdenTrabajo", b =>
                {
                    b.HasOne("webSISGERT.Models.OT.Cliente", "cliente")
                        .WithMany()
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webSISGERT.Models.OT.Maquinaria", "maquinaria")
                        .WithMany()
                        .HasForeignKey("MaquinariaId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
