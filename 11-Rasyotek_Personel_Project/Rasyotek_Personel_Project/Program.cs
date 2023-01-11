using Microsoft.EntityFrameworkCore;
using Rasyotek_Personel_Project.DAL;
using Rasyotek_Personel_Project.Entity;
using Rasyotek_Personel_Project.Models;
using Rasyotek_Personel_Project.Repository.Abstracts;
using Rasyotek_Personel_Project.Repository.Concretes;
using Rasyotek_Personel_Project.UnitOfWork;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddDbContext<PersonelContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Baglanti")));
builder.Services.AddScoped<ApiResponse>();
builder.Services.AddScoped<IPersonelRepository, PersonelRepository<Personel>>();
builder.Services.AddScoped<IZimmetRepository, ZimmetRepository<Zimmet>>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.AllowAnyOrigin();
            policy.AllowAnyMethod();
            policy.AllowAnyHeader();
        });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
