using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using online_travel_website.Models;



    namespace online_travel_website.Controllers
    {
        public class PaymentController : Controller
        {
            private readonly string connStr;

            public PaymentController(IConfiguration config)
            {
                connStr = config.GetConnectionString("TravelDBConnection");
            }

            [HttpGet]
            public IActionResult Payment()
            {
                Console.WriteLine("Connection: " + connStr);

                if (HttpContext.Session.GetString("UserName") == null)
                {
                    return RedirectToAction("Login", "Home", new
                    {
                        returnUrl = Url.Action("Payment", "Payment")
                    });
                }

                return View();
            }

        [HttpPost]
        public IActionResult Payment(PaymentBooking model)
        {
            using (SqlConnection con = new SqlConnection(connStr))
            {
                con.Open();

              
                // Generate a unique BookingId
                string bookingId = "MKT-" + Guid.NewGuid().ToString("N")
                                                        .Substring(0, 8)
                                                        .ToUpper();

                string query = @"INSERT INTO PaymentBookings
        (BookingId, PackageName, Destination, Amount,
         CustomerName, Email, Mobile, PaymentMethod)
        VALUES
        (@BookingId, @PackageName, @Destination, @Amount,
         @CustomerName, @Email, @Mobile, @PaymentMethod)";

                SqlCommand cmd = new SqlCommand(query, con);

                cmd.Parameters.AddWithValue("@BookingId", bookingId);
                cmd.Parameters.AddWithValue("@PackageName", model.PackageName);
                cmd.Parameters.AddWithValue("@Destination", model.Destination);
                cmd.Parameters.AddWithValue("@Amount", model.Amount);
                cmd.Parameters.AddWithValue("@CustomerName", model.CustomerName);
                cmd.Parameters.AddWithValue("@Email", model.Email);
                cmd.Parameters.AddWithValue("@Mobile", model.Mobile);
                cmd.Parameters.AddWithValue("@PaymentMethod", model.PaymentMethod);

                cmd.ExecuteNonQuery();
                cmd.ExecuteNonQuery();

                return RedirectToAction("Success", "Home", new
                {
                    bookingId = bookingId
                });
            }

           
        }

        public IActionResult BookingDetails(string bookingId)
        {
            PaymentBooking booking = new PaymentBooking();

            using (SqlConnection con = new SqlConnection(connStr))
            {
                con.Open();

                string query = @"SELECT *
                         FROM PaymentBookings
                         WHERE BookingId=@BookingId";

                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@BookingId", bookingId);

                SqlDataReader reader = cmd.ExecuteReader();

                if (reader.Read())
                {
                    booking.BookingId = reader["BookingId"].ToString();
                    booking.PackageName = reader["PackageName"].ToString();
                    booking.Destination = reader["Destination"].ToString();
                    booking.Amount = Convert.ToDecimal(reader["Amount"]);
                    booking.CustomerName = reader["CustomerName"].ToString();
                    booking.Email = reader["Email"].ToString();
                    booking.Mobile = reader["Mobile"].ToString();
                    booking.PaymentMethod = reader["PaymentMethod"].ToString();
                }
            }

            return View(booking);
        }




    }
}


