using Case.Dal;
using Case.Entity;
using Case.Repos.Abstract;
using Case.Repos.Concrete;
using Case.Uow;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

namespace Case
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<PersonelContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("Baglanti")));
            builder.Services.AddScoped<IPersonelRep, PersonelRep<Personel>>();
            builder.Services.AddScoped<IUow, Uow.Uow>();
            builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);




            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  policy =>
                                  {
                                      policy.AllowAnyOrigin();
                                      policy.AllowAnyHeader();
                                      policy.AllowAnyMethod();
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
        }
    }
}