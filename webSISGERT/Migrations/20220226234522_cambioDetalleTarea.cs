using Microsoft.EntityFrameworkCore.Migrations;

namespace webSISGERT.Migrations
{
    public partial class cambioDetalleTarea : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DetallesTareas_OrdenesTrabajo_OrdenTrabajoId",
                table: "DetallesTareas");

            migrationBuilder.AlterColumn<int>(
                name: "OrdenTrabajoId",
                table: "DetallesTareas",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "TareaId",
                table: "DetallesTareas",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_DetallesTareas_TareaId",
                table: "DetallesTareas",
                column: "TareaId");

            migrationBuilder.AddForeignKey(
                name: "FK_DetallesTareas_OrdenesTrabajo_OrdenTrabajoId",
                table: "DetallesTareas",
                column: "OrdenTrabajoId",
                principalTable: "OrdenesTrabajo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_DetallesTareas_Tarea_TareaId",
                table: "DetallesTareas",
                column: "TareaId",
                principalTable: "Tarea",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DetallesTareas_OrdenesTrabajo_OrdenTrabajoId",
                table: "DetallesTareas");

            migrationBuilder.DropForeignKey(
                name: "FK_DetallesTareas_Tarea_TareaId",
                table: "DetallesTareas");

            migrationBuilder.DropIndex(
                name: "IX_DetallesTareas_TareaId",
                table: "DetallesTareas");

            migrationBuilder.DropColumn(
                name: "TareaId",
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
    }
}
