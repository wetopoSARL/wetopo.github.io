/* ============================================
   WETOPO — Form Validation
   Validation front-end du formulaire de contact
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    name: {
      el: form.querySelector('#name'),
      validate: (v) => v.trim().length >= 2,
      message: 'Veuillez saisir votre nom (minimum 2 caractères).'
    },
    email: {
      el: form.querySelector('#email'),
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      message: 'Veuillez saisir une adresse email valide.'
    },
    phone: {
      el: form.querySelector('#phone'),
      validate: (v) => v.trim() === '' || /^[\d\s\+\-\.()]{6,20}$/.test(v.trim()),
      message: 'Veuillez saisir un numéro de téléphone valide.'
    },
    subject: {
      el: form.querySelector('#subject'),
      validate: (v) => v.trim().length >= 2,
      message: 'Veuillez indiquer l\'objet de votre demande.'
    },
    message: {
      el: form.querySelector('#message'),
      validate: (v) => v.trim().length >= 10,
      message: 'Votre message doit contenir au moins 10 caractères.'
    }
  };

  // Clear error on input
  Object.values(fields).forEach(field => {
    if (!field.el) return;
    field.el.addEventListener('input', () => {
      clearError(field.el);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate each field
    Object.entries(fields).forEach(([key, field]) => {
      if (!field.el) return;
      const value = field.el.value;
      if (!field.validate(value)) {
        showError(field.el, field.message);
        isValid = false;
      } else {
        clearError(field.el);
      }
    });

    if (!isValid) {
      // Focus first errored field
      const firstError = form.querySelector('.form-input--error');
      if (firstError) firstError.focus();
      return;
    }

    // If valid — show success message
    // In production, this would send data to a backend/API
    const successEl = form.querySelector('.form-success');
    if (successEl) {
      successEl.classList.add('visible');
      form.reset();
      // Hide success after 5 seconds
      setTimeout(() => {
        successEl.classList.remove('visible');
      }, 5000);
    }
  });

  function showError(input, message) {
    input.classList.add('form-input--error');
    const errorEl = input.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = 'block';
    }
  }

  function clearError(input) {
    input.classList.remove('form-input--error');
    const errorEl = input.parentElement.querySelector('.form-error');
    if (errorEl) {
      errorEl.style.display = 'none';
    }
  }

});
