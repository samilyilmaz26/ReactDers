using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Rasyotek_Personel_Project.Entity
{
    public class Zimmet
    {
        [Key]
        public int Id { get; set; }
        public string ZimmetAdi { get; set; }
    }
}
