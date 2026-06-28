namespace online_travel_website.Models
{
    public class PaymentBooking
    {
        public int Id { get; set; }

        public string BookingId { get; set; } = string.Empty;

        public string PackageName { get; set; } = string.Empty;

        public string Destination { get; set; } = string.Empty;

        public decimal Amount { get; set; }

        public string CustomerName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Mobile { get; set; } = string.Empty;

        public string PaymentMethod { get; set; } = string.Empty;
    }
}

