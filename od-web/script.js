function callNow() {
  window.location.href = "tel:+2204175175";
}

function whatsapp() {
  window.open("https://wa.me/2202150303", "_blank");
}

function tiktok() {
    window.open("https://tiktok.com", "_blank");
}



function callNow() {
  window.location.href = "tel:+2204175175";
}

function whatsapp() {
  window.open("https://wa.me/2204175175", "_blank");
}

function tiktok() {
  window.open("https://tiktok.com", "_blank");
}

/* BOOKING SYSTEM */
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let pickup = document.getElementById("pickup").value;
  let dropoff = document.getElementById("dropoff").value;
  let phone = document.getElementById("phone").value;
  let note = document.getElementById("notes").value;

  let message = `Booking Confirmed!\nName: ${name}\nPickup: ${pickup}\nDrop-off: ${dropoff}\nPhone: ${phone}\nNotes: ${note}`;

  document.getElementById("message").innerText = "✅ Delivery booked successfully!";

  console.log(message);

  /* Optional: send to WhatsApp automatically */
  let whatsappMessage = `Hello OD Express,%0AName: ${name}%0APickup: ${pickup}%0ADrop-off: ${dropoff}%0APhone: ${phone}%0ANotes: ${note}`;
  window.open(`https://wa.me/2204175175?text=${whatsappMessage}`, "_blank");
});




// pricing