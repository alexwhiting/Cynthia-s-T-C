
// Get Started form JS
document.getElementById('modalContactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const submitText = submitBtn.querySelector('.submit-text');
  const spinner = submitBtn.querySelector('.spinner-border');
  
  submitText.textContent = 'Sending...';
  spinner.classList.remove('d-none');
  submitBtn.disabled = true;
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
      // Success message
      form.innerHTML = `
        <div class="text-center py-4" style="color: white;">
          <i class="fas fa-check-circle mb-3" style="font-size: 3rem;"></i>
          <h3>Thank You!</h3>
          <p>Your request has been sent to Cynthia. You'll receive a response within 24 hours.</p>
          <button class="success-close-btn mt-3" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      `;
      // Optional: Track conversion
      if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {'send_to': 'AW-YOUR_GOOGLE_ADS_ID'});
      }
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    form.innerHTML = `
      <div class="alert alert-danger">
        <i class="fas fa-exclamation-triangle me-2"></i>
        Message failed to send. Please email directly to:
        <a href="mailto:alexanderwhiting@icloud.com">alexanderwhiting@icloud.com</a>
      </div>
      <button class="btn btn-secondary mt-3" onclick="location.reload()">Try Again</button>
    `;
  } finally {
    submitText.textContent = 'Send Request';
    spinner.classList.add('d-none');
    submitBtn.disabled = false;
  }
});

// Reset form when modal closes
document.getElementById('contactModal').addEventListener('hidden.bs.modal', function() {
  const form = document.getElementById('modalContactForm');
  if (form) form.reset();
});