using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace webSISGERT.Migrations
{
    public partial class cambiosVarios : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Estado",
                table: "OrdenesTrabajo",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Codigo",
                table: "OrdenesTrabajo",
                maxLength: 15,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Descripcion",
                table: "OrdenesTrabajo",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "MaquinariaId",
                table: "OrdenesTrabajo",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Observaciones",
                table: "OrdenesTrabajo",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Observaciones",
                table: "Empleados",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Horas",
                table: "DetallesTareas",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Horas",
                table: "DetallesEmpleados",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "Observaciones",
                table: "Clientes",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Costo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Codigo = table.Column<string>(maxLength: 9, nullable: true),
                    Descripcion = table.Column<string>(nullable: true),
                    Comentario = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Costo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cotizaciones",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Codigo = table.Column<string>(maxLength: 15, nullable: true),
                    ClienteId = table.Column<int>(nullable: false),
                    Fecha = table.Column<DateTime>(nullable: false),
                    MaquinariaId = table.Column<int>(nullable: false),
                    Estado = table.Column<int>(nullable: false),
                    Enlazado = table.Column<bool>(nullable: false),
                    Observaciones = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cotizaciones", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cotizaciones_Clientes_ClienteId",
                        column: x => x.ClienteId,
                        principalTable: "Clientes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Cotizaciones_Maquinarias_MaquinariaId",
                        column: x => x.MaquinariaId,
                        principalTable: "Maquinarias",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DetallesCosto",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    OrdenTrabajoId = table.Column<int>(nullable: false),
                    CostoId = table.Column<int>(nullable: false),
                    Precio = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetallesCosto", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DetallesCosto_Costo_CostoId",
                        column: x => x.CostoId,
                        principalTable: "Costo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DetallesCosto_OrdenesTrabajo_OrdenTrabajoId",
                        column: x => x.OrdenTrabajoId,
                        principalTable: "OrdenesTrabajo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DetallesCostoCotizacion",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    CostoId = table.Column<int>(nullable: false),
                    Precio = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetallesCostoCotizacion", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DetallesCostoCotizacion_Costo_CostoId",
                        column: x => x.CostoId,
                        principalTable: "Costo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DetallesCostoTareas",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    CostoId = table.Column<int>(nullable: false),
                    DetalleTareaId = table.Column<int>(nullable: false),
                    Precio = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetallesCostoTareas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DetallesCostoTareas_Costo_CostoId",
                        column: x => x.CostoId,
                        principalTable: "Costo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DetallesCostoTareas_DetallesTareas_DetalleTareaId",
                        column: x => x.DetalleTareaId,
                        principalTable: "DetallesTareas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CotizacionesOrdenTrabajos",
                columns: table => new
                {
                    CotizacionId = table.Column<int>(nullable: false),
                    OrdenTrabajoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CotizacionesOrdenTrabajos", x => new { x.CotizacionId, x.OrdenTrabajoId });
                    table.ForeignKey(
                        name: "FK_CotizacionesOrdenTrabajos_Cotizaciones_CotizacionId",
                        column: x => x.CotizacionId,
                        principalTable: "Cotizaciones",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CotizacionesOrdenTrabajos_OrdenesTrabajo_OrdenTrabajoId",
                        column: x => x.OrdenTrabajoId,
                        principalTable: "OrdenesTrabajo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DetallesRepuestosCotizacion",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    RepuestoId = table.Column<int>(nullable: false),
                    CostoRepuesto = table.Column<double>(nullable: false),
                    cotizacionId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetallesRepuestosCotizacion", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DetallesRepuestosCotizacion_Repuestos_RepuestoId",
                        column: x => x.RepuestoId,
                        principalTable: "Repuestos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DetallesRepuestosCotizacion_Cotizaciones_cotizacionId",
                        column: x => x.cotizacionId,
                        principalTable: "Cotizaciones",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DetallesTareaCotizacion",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    TareaId = table.Column<int>(nullable: false),
                    Cantidad = table.Column<int>(nullable: false),
                    Precio = table.Column<double>(nullable: false),
                    Hora = table.Column<double>(nullable: false),
                    cotizacionId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetallesTareaCotizacion", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DetallesTareaCotizacion_Tarea_TareaId",
                        column: x => x.TareaId,
                        principalTable: "Tarea",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DetallesTareaCotizacion_Cotizaciones_cotizacionId",
                        column: x => x.cotizacionId,
                        principalTable: "Cotizaciones",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DetallesCostoTareaCotizacion",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    CostoId = table.Column<int>(nullable: false),
                    DetalleTareaCotizacionId = table.Column<int>(nullable: false),
                    Precio = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetallesCostoTareaCotizacion", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DetallesCostoTareaCotizacion_Costo_CostoId",
                        column: x => x.CostoId,
                        principalTable: "Costo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DetallesCostoTareaCotizacion_DetallesTareaCotizacion_Detalle~",
                        column: x => x.DetalleTareaCotizacionId,
                        principalTable: "DetallesTareaCotizacion",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrdenesTrabajo_MaquinariaId",
                table: "OrdenesTrabajo",
                column: "MaquinariaId");

            migrationBuilder.CreateIndex(
                name: "IX_Cotizaciones_ClienteId",
                table: "Cotizaciones",
                column: "ClienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Cotizaciones_MaquinariaId",
                table: "Cotizaciones",
                column: "MaquinariaId");

            migrationBuilder.CreateIndex(
                name: "IX_CotizacionesOrdenTrabajos_OrdenTrabajoId",
                table: "CotizacionesOrdenTrabajos",
                column: "OrdenTrabajoId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesCosto_CostoId",
                table: "DetallesCosto",
                column: "CostoId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesCosto_OrdenTrabajoId",
                table: "DetallesCosto",
                column: "OrdenTrabajoId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesCostoCotizacion_CostoId",
                table: "DetallesCostoCotizacion",
                column: "CostoId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesCostoTareaCotizacion_CostoId",
                table: "DetallesCostoTareaCotizacion",
                column: "CostoId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesCostoTareaCotizacion_DetalleTareaCotizacionId",
                table: "DetallesCostoTareaCotizacion",
                column: "DetalleTareaCotizacionId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesCostoTareas_CostoId",
                table: "DetallesCostoTareas",
                column: "CostoId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesCostoTareas_DetalleTareaId",
                table: "DetallesCostoTareas",
                column: "DetalleTareaId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesRepuestosCotizacion_RepuestoId",
                table: "DetallesRepuestosCotizacion",
                column: "RepuestoId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesRepuestosCotizacion_cotizacionId",
                table: "DetallesRepuestosCotizacion",
                column: "cotizacionId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesTareaCotizacion_TareaId",
                table: "DetallesTareaCotizacion",
                column: "TareaId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesTareaCotizacion_cotizacionId",
                table: "DetallesTareaCotizacion",
                column: "cotizacionId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrdenesTrabajo_Maquinarias_MaquinariaId",
                table: "OrdenesTrabajo",
                column: "MaquinariaId",
                principalTable: "Maquinarias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrdenesTrabajo_Maquinarias_MaquinariaId",
                table: "OrdenesTrabajo");

            migrationBuilder.DropTable(
                name: "CotizacionesOrdenTrabajos");

            migrationBuilder.DropTable(
                name: "DetallesCosto");

            migrationBuilder.DropTable(
                name: "DetallesCostoCotizacion");

            migrationBuilder.DropTable(
                name: "DetallesCostoTareaCotizacion");

            migrationBuilder.DropTable(
                name: "DetallesCostoTareas");

            migrationBuilder.DropTable(
                name: "DetallesRepuestosCotizacion");

            migrationBuilder.DropTable(
                name: "DetallesTareaCotizacion");

            migrationBuilder.DropTable(
                name: "Costo");

            migrationBuilder.DropTable(
                name: "Cotizaciones");

            migrationBuilder.DropIndex(
                name: "IX_OrdenesTrabajo_MaquinariaId",
                table: "OrdenesTrabajo");

            migrationBuilder.DropColumn(
                name: "Descripcion",
                table: "OrdenesTrabajo");

            migrationBuilder.DropColumn(
                name: "MaquinariaId",
                table: "OrdenesTrabajo");

            migrationBuilder.DropColumn(
                name: "Observaciones",
                table: "OrdenesTrabajo");

            migrationBuilder.DropColumn(
                name: "Observaciones",
                table: "Empleados");

            migrationBuilder.DropColumn(
                name: "Horas",
                table: "DetallesTareas");

            migrationBuilder.DropColumn(
                name: "Horas",
                table: "DetallesEmpleados");

            migrationBuilder.DropColumn(
                name: "Observaciones",
                table: "Clientes");

            migrationBuilder.AlterColumn<string>(
                name: "Estado",
                table: "OrdenesTrabajo",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<string>(
                name: "Codigo",
                table: "OrdenesTrabajo",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 15,
                oldNullable: true);
        }
    }
}
