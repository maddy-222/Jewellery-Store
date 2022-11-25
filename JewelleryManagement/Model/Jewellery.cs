using System.ComponentModel.DataAnnotations;

namespace JewelleryManagement.Model
{
    public class Jewellery
    {
        [Key]
        public int jid { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public string description { get; set; }
        public int price { get; set; }
    }
}
