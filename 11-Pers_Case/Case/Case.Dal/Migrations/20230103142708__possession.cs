using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Case.Dal.Migrations
{
    /// <inheritdoc />
    public partial class possession : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Possession",
                table: "Personels",
                newName: "Phone");

            migrationBuilder.AddColumn<bool>(
                name: "Car",
                table: "Personels",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Computer",
                table: "Personels",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Car",
                table: "Personels");

            migrationBuilder.DropColumn(
                name: "Computer",
                table: "Personels");

            migrationBuilder.RenameColumn(
                name: "Phone",
                table: "Personels",
                newName: "Possession");
        }
    }
}
