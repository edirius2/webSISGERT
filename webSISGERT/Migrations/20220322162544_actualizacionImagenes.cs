using Microsoft.EntityFrameworkCore.Migrations;

namespace webSISGERT.Migrations
{
    public partial class actualizacionImagenes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ActaConformidad",
                table: "OrdenesTrabajo",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Estado",
                table: "OrdenesTrabajo",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FormatoRecepcionEquipos",
                table: "OrdenesTrabajo",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "InformePreliminar",
                table: "OrdenesTrabajo",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ActaConformidad",
                table: "OrdenesTrabajo");

            migrationBuilder.DropColumn(
                name: "Estado",
                table: "OrdenesTrabajo");

            migrationBuilder.DropColumn(
                name: "FormatoRecepcionEquipos",
                table: "OrdenesTrabajo");

            migrationBuilder.DropColumn(
                name: "InformePreliminar",
                table: "OrdenesTrabajo");
        }
    }
}
