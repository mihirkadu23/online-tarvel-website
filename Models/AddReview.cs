namespace online_travel_website.Models
{
    using System.ComponentModel.DataAnnotations;
    public class AddReview
    {
        public int Id { get; set; }

        [Required]
        public string CustomerName { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Comment { get; set; }

        [Range(1, 5, ErrorMessage = "Please select a rating")]
        public int Rating { get; set; }
    }
}
