using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace webSISGERT.Migrations
{
    public partial class agregaMaquinaria : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EstadosMaquinaria",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Descripcion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EstadosMaquinaria", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MarcasMaquinaria",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Descripcion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MarcasMaquinaria", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TiposMaquinaria",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Descripcion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TiposMaquinaria", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Maquinarias",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Placa = table.Column<string>(nullable: true),
                    MarcaMaquinariaId = table.Column<int>(nullable: false),
                    TipoMaquinariaId = table.Column<int>(nullable: false),
                    EstadoMaquinariaId = table.Column<int>(nullable: false),
                    ClienteId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Maquinarias", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Maquinarias_Clientes_ClienteId",
                        column: x => x.ClienteId,
                        principalTable: "Clientes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Maquinarias_EstadosMaquinaria_EstadoMaquinariaId",
                        column: x => x.EstadoMaquinariaId,
                        principalTable: "EstadosMaquinaria",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Maquinarias_MarcasMaquinaria_MarcaMaquinariaId",
                        column: x => x.MarcaMaquinariaId,
                        principalTable: "MarcasMaquinaria",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Maquinarias_TiposMaquinaria_TipoMaquinariaId",
                        column: x => x.TipoMaquinariaId,
                        principalTable: "TiposMaquinaria",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Maquinarias_ClienteId",
                table: "Maquinarias",
                column: "ClienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Maquinarias_EstadoMaquinariaId",
                table: "Maquinarias",
                column: "EstadoMaquinariaId");

            migrationBuilder.CreateIndex(
                name: "IX_Maquinarias_MarcaMaquinariaId",
                table: "Maquinarias",
                column: "MarcaMaquinariaId");

            migrationBuilder.CreateIndex(
                name: "IX_Maquinarias_TipoMaquinariaId",
                table: "Maquinarias",
                column: "TipoMaquinariaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Maquinarias");

            migrationBuilder.DropTable(
                name: "EstadosMaquinaria");

            migrationBuilder.DropTable(
                name: "MarcasMaquinaria");

            migrationBuilder.DropTable(
                name: "TiposMaquinaria");
        }
    }
}
