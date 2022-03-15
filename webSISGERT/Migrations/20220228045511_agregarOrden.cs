using Microsoft.EntityFrameworkCore.Migrations;

namespace webSISGERT.Migrations
{
    public partial class agregarOrden : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DetallesTareas_OrdenesTrabajo_OrdenTrabajoId",
                table: "DetallesTareas");

            migrationBuilder.AlterColumn<int>(
                name: "OrdenTrabajoId",
                table: "DetallesTareas",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_DetallesTareas_OrdenesTrabajo_OrdenTrabajoId",
                table: "DetallesTareas",
                column: "OrdenTrabajoId",
                principalTable: "OrdenesTrabajo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DetallesTareas_OrdenesTrabajo_OrdenTrabajoId",
                table: "DetallesTareas");

            migrationBuilder.AlterColumn<int>(
                name: "OrdenTrabajoId",
                table: "DetallesTareas",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_DetallesTareas_OrdenesTrabajo_OrdenTrabajoId",
                table: "DetallesTareas",
                column: "OrdenTrabajoId",
                principalTable: "OrdenesTrabajo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
