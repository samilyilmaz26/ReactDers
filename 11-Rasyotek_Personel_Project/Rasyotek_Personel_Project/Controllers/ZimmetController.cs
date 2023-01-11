using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Rasyotek_Personel_Project.Entity;
using Rasyotek_Personel_Project.Models;
using Rasyotek_Personel_Project.UnitOfWork;

namespace Rasyotek_Personel_Project.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ZimmetController : ControllerBase
    {
        IUnitOfWork _uow;
        ApiResponse _response;
        public ZimmetController(IUnitOfWork uow, ApiResponse response)
        {
            _uow = uow;
            _response = response;
        }

        [HttpGet]
        public List<Zimmet> GetZimmets()
        {
            return _uow._zimmetRepository.GetAll();
        }

        [HttpGet("{id:int}")]
        public Zimmet GetZimmet(int Id)
        {
            return _uow._zimmetRepository.Find(Id);
        }
    }
}
