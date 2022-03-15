using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace webSISGERT.Migrations
{
    public partial class ActualizacionBD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Favorito",
                table: "OrdenesTrabajo",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "DetallePagos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Pago = table.Column<double>(nullable: false),
                    Fecha = table.Column<DateTime>(nullable: false),
                    OrdenTrabajoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetallePagos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DetallePagos_OrdenesTrabajo_OrdenTrabajoId",
                        column: x => x.OrdenTrabajoId,
                        principalTable: "OrdenesTrabajo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DetalleRepuestos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Cantidad = table.Column<int>(nullable: false),
                    Precio = table.Column<double>(nullable: false),
                    RepuestoId = table.Column<int>(nullable: false),
                    OrdenTrabajoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetalleRepuestos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DetalleRepuestos_OrdenesTrabajo_OrdenTrabajoId",
                        column: x => x.OrdenTrabajoId,
                        principalTable: "OrdenesTrabajo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DetalleRepuestos_Repuestos_RepuestoId",
                        column: x => x.RepuestoId,
                        principalTable: "Repuestos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Empleados",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    TipoDocumento = table.Column<int>(nullable: false),
                    NumeroDocumento = table.Column<string>(maxLength: 15, nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    Telefono = table.Column<string>(nullable: true),
                    CorreoElectronico = table.Column<string>(maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Empleados", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DetallesEmpleados",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    EmpleadoId = table.Column<int>(nullable: false),
                    OrdenTrabajoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetallesEmpleados", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DetallesEmpleados_Empleados_EmpleadoId",
                        column: x => x.EmpleadoId,
                        principalTable: "Empleados",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DetallesEmpleados_OrdenesTrabajo_OrdenTrabajoId",
                        column: x => x.OrdenTrabajoId,
                        principalTable: "OrdenesTrabajo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DetallePagos_OrdenTrabajoId",
                table: "DetallePagos",
                column: "OrdenTrabajoId");

            migrationBuilder.CreateIndex(
                name: "IX_DetalleRepuestos_OrdenTrabajoId",
                table: "DetalleRepuestos",
                column: "OrdenTrabajoId");

            migrationBuilder.CreateIndex(
                name: "IX_DetalleRepuestos_RepuestoId",
                table: "DetalleRepuestos",
                column: "RepuestoId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesEmpleados_EmpleadoId",
                table: "DetallesEmpleados",
                column: "EmpleadoId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesEmpleados_OrdenTrabajoId",
                table: "DetallesEmpleados",
                column: "OrdenTrabajoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DetallePagos");

            migrationBuilder.DropTable(
                name: "DetalleRepuestos");

            migrationBuilder.DropTable(
                name: "DetallesEmpleados");

            migrationBuilder.DropTable(
                name: "Empleados");

            migrationBuilder.DropColumn(
                name: "Favorito",
                table: "OrdenesTrabajo");
        }
    }
}
