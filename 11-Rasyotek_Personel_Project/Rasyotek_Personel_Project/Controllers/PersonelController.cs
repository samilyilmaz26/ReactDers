using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Rasyotek_Personel_Project.DAL;
using Rasyotek_Personel_Project.Entity;
using Rasyotek_Personel_Project.Models;
using Rasyotek_Personel_Project.UnitOfWork;

namespace Rasyotek_Personel_Project.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class PersonelController : ControllerBase
    {
        IUnitOfWork _uow;
        ApiResponse _response;
        public PersonelController(IUnitOfWork uow, ApiResponse response)
        {
            _uow = uow;
            _response = response;
        }

        [HttpGet]
        public List<Personel> GetPersonels()
        {
            return _uow._personelRepository.GetAll();
        }

        [HttpGet("{id:int}")]
        public Personel GetPersonel(int Id)
        {
            return _uow._personelRepository.Find(Id);
        }

        [HttpPost]
        public ApiResponse Create(Personel personel)
        {
            try
            {
                _uow._personelRepository.Create(personel);
                _uow.Commit();
                _response.Error = false;
                _response.Msg = $"{personel.Ad} {personel.Soyad} Başarılı Şekilde Eklendi!";
            }
            catch (Exception ex)
            {
                _response.Error = true;
                _response.Msg = ex.Message;
            }
            return _response;
        }

        [HttpPut]
        public ApiResponse Update(Personel personel)
        {
            try
            {
                _uow._personelRepository.Update(personel);
                _uow.Commit();
                _response.Error = false;
                _response.Msg = $"{personel.Ad} {personel.Soyad} Başarılı Şekilde Güncellendi!";
            }
            catch (Exception ex)
            {
                _response.Error = true;
                _response.Msg = ex.Message;
            }
            return _response;
        }

        [HttpPut("{id:int}")]
        public ApiResponse UpdateById(int Id)
        {
            try
            {
                _uow._personelRepository.Update(Id);
                _uow.Commit();
                _response.Error = false;
                _response.Msg = $" Başarılı Şekilde Güncellendi!";
            }
            catch (Exception ex)
            {
                _response.Error = true;
                _response.Msg = ex.Message;
            }
            return _response;
        }

        [HttpDelete("{id:int}")]
        public ApiResponse Delete(int Id)
        {
            try
            {
                Personel selectedPersonel = _uow._personelRepository.Find(Id);
                if (selectedPersonel != null)
                {
                    _uow._personelRepository.Delete(Id);
                    _uow.Commit();
                    _response.Error = false;
                    _response.Msg = $"{selectedPersonel.Ad} {selectedPersonel.Soyad} Başarılı Şekilde Silindi!";
                }
                else
                {
                    _response.Error = true;
                    _response.Msg = "Kullanıcı Bulunamadı!";
                }
            }
            catch (Exception ex)
            {
                _response.Error= true;
                _response.Msg = ex.Message;
            }
            return _response;
        }
    }
}
