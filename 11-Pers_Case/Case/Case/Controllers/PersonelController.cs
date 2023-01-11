using Case.Entity;
using Case.Repos.Abstract;
using Case.Uow;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;

namespace Case.API.Controllers
{
    [Route("/[controller]/[action]")]
    [Produces(MediaTypeNames.Application.Json)]
    [ApiController]

    public class PersonelController : Controller
    {
        private readonly IPersonelRep _personelRep;
        private readonly IUow _uow;

        public PersonelController(IPersonelRep personelRep, IUow uow)
        {
            _personelRep = personelRep;
            _uow = uow;
        }
        [HttpGet]
        public IActionResult GetPersonels()
        {
            var personels = _personelRep.GetPersonels();
            return this.Ok(personels);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetPersonelById(int id)
        {
            var personel = _personelRep.GetPersonelById(id);
            return this.Ok(personel);
        }

        [HttpPost]
        public IActionResult CreatePersonel(Personel p)
        {
            var c = _personelRep.CreatePersonel(p);
            _uow.Commit();
            return this.Ok(c);
        }

        [HttpPut]
        public IActionResult Update(Personel p)
        {
            var personel = _personelRep.UpdatePersonel(p);
            _uow.Commit();
            return this.Ok(personel);
        }
        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            _uow._personelRep.DeletePersonel(id);
            _uow.Commit();
            return this.Ok();
        }
    }
}
