﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using webSISGERT.Models;

namespace webSISGERT.Migrations
{
    [DbContext(typeof(AplicationDBContext))]
    [Migration("20220711174703_autenticacionUsuarios")]
    partial class autenticacionUsuarios
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
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

                    b.Property<string>("Telefono");

                    b.Property<int>("TipoDocumento");

                    b.HasKey("Id");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("webSISGERT.Models.OT.DetalleEmpleado", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("EmpleadoId");

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

                    b.Property<string>("Codigo");

                    b.Property<string>("Estado");

                    b.Property<bool>("Favorito");

                    b.Property<DateTime>("Fecha");

                    b.Property<string>("FormatoRecepcionEquipos");

                    b.Property<string>("InformePreliminar");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

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
                });
#pragma warning restore 612, 618
        }
    }
}
