// Card animation on scroll
document.addEventListener("DOMContentLoaded",function(){
  const appearCards = document.querySelectorAll('.animate-card');
  function reveal() {
    appearCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight-90) card.classList.add('visible');
    });
  }
  window.addEventListener('scroll', reveal);
  reveal();
});

// Dynamic bikes list
const demoBikes = [
  {brand:'Honda Activa', location:'Symbiosis', price:'₹99/3hr', img:'b1.jpg', rating:4.8},
  {brand:'TVS Jupiter', location:'ADYPSOE', price:'₹99/3hr', img:'b2.jpg', rating:4.5},
  {brand:'Yamaha FZ', location:'COEP', price:'₹139/3hr', img:'b3.jpg', rating:4.7}
];
const bikesList = document.getElementById('bikes-list');
if (bikesList) {
  bikesList.innerHTML = demoBikes.map(b =>
    `<div class="bike-card card shadow-sm d-flex flex-row align-items-center mb-2">
      <img src="${b.img}" alt="${b.brand}" class="rounded" style="height:70px; width:70px; object-fit:cover; margin-right:15px;">
      <div class="card-body py-2">
        <strong>${b.brand}</strong> <span class="badge bg-success">${b.price}</span>
        <br>
        <small>${b.location}</small>
        <br>
        <span class="text-warning">${'★'.repeat(Math.round(b.rating))}</span>
      </div>
    </div>`
  ).join('');
}

// Bootstrap validation for forms
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})();

// Razorpay Payment
document.getElementById('pay-btn').onclick = function(e) {
  e.preventDefault();
  var options = {
    "key": "YOUR_RAZORPAY_KEY_ID", // Change to your real Razorpay key!
    "amount": 29900,
    "currency": "INR",
    "name": "Bikemates Premium",
    "description": "Priority Booking Subscription",
    "handler": function(response) {
      alert('Payment Successful! Transaction ID: ' + response.razorpay_payment_id);
    },
    "theme": { "color": "#009688" }
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.open();
};

// Dark mode toggle
document.getElementById('theme-toggle').onclick = function() {
  document.body.classList.toggle('darkmode');
};

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.onclick = function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  }
});
