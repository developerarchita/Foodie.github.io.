// Simple interactivity: mobile nav toggle, modal, form handling
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', ()=> nav.classList.toggle('open'));

  // Reservation modal
  const modal = document.getElementById('modal');
  const reserveBtn = document.getElementById('reserve-btn');
  const modalClose = document.getElementById('modal-close');
  reserveBtn.addEventListener('click', ()=> openModal());
  modalClose.addEventListener('click', ()=> closeModal());
  modal.addEventListener('click', (e)=> { if(e.target===modal) closeModal(); });

  function openModal(){ modal.style.display='flex'; modal.setAttribute('aria-hidden','false'); }
  function closeModal(){ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); }

  // forms (no server) - show a friendly message
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thanks! Your message has been recorded (demo). We will call you at ' + (document.getElementById('phone').value || 'your phone') + '.');
    contactForm.reset();
  });

  const reserveForm = document.getElementById('reserve-form');
  reserveForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Reservation request sent (demo). We will confirm shortly.');
    reserveForm.reset();
    closeModal();
  });

  // small cart demo
  document.querySelectorAll('.add-cart').forEach(btn => {
    btn.addEventListener('click', ()=> {
      btn.textContent = 'Added';
      setTimeout(()=> btn.textContent = 'Add', 1200);
    });
  });
});