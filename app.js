// 1. Control del Modo Oscuro (Con persistencia LocalStorage)
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

function applyTheme() {
  const isDark = localStorage.getItem('color-theme') === 'dark' || 
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    document.documentElement.classList.add('dark');
    lightIcon.classList.remove('hidden');
    darkIcon.classList.add('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
  }
}

themeToggleBtn.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('color-theme', isDark ? 'light' : 'dark');
  applyTheme();
});

applyTheme();

// 2. Control del Modal de Compra Interactivo
function toggleModal(show) {
  const modal = document.getElementById('checkout-modal');
  if (show) {
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

// 3. Procesamiento Simulado de Pago
function processPayment(event) {
  event.preventDefault();
  const btn = document.getElementById('pay-btn');
  
  // Estado cargando
  btn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Procesando...`;
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = `<i class="fa-solid fa-check"></i> ¡Pago Exitoso!`;
    btn.classList.remove('bg-violet-600', 'hover:bg-violet-700');
    btn.classList.add('bg-emerald-600');

    setTimeout(() => {
      alert('¡Gracias por tu compra simulada! Esta funcionalidad le demuestra al cliente de Gumroad cómo interactuará su usuario final.');
      toggleModal(false);
      btn.disabled = false;
      btn.innerHTML = `<span>Pagar $19.00 USD</span>`;
      btn.classList.remove('bg-emerald-600');
      btn.classList.add('bg-violet-600');
    }, 1000);
  }, 1500);
}

// Funcionalidad de Acordeón FAQ
function toggleFaq(id) {
  const answer = document.getElementById(`faq-answer-${id}`);
  const icon = document.getElementById(`faq-icon-${id}`);

  if (answer.classList.contains('hidden')) {
    answer.classList.remove('hidden');
    icon.classList.add('rotate-180');
  } else {
    answer.classList.add('hidden');
    icon.classList.remove('rotate-180');
  }
}