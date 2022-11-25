using System.ComponentModel.DataAnnotations;

namespace JewelleryManagement.Model
{
    public class feedback
    {
        [Key]
        public int fid { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string message { get; set; }
    }
}
