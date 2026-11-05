
(() => {
  const f = document.getElementById('contact-form');
  if (!f) return;

  const mobile = f.elements.mobile;

  // Validate mobile number
  function validate() {
    const count = mobile.value.replace(/\D/g, '').length;

    mobile.setCustomValidity(
      count >= 7 && count <= 15
        ? ''
        : 'Enter a valid phone number with 7 to 15 digits, including country code.'
    );
  }

  mobile.addEventListener('input', validate);

  // Handle contact form submission
  f.addEventListener('submit', e => {
    e.preventDefault();

    validate();

    if (!f.reportValidity()) return;

    const body = `Name: ${f.elements.name.value}
Email: ${f.elements.email.value}
Mobile: ${mobile.value}

Message:
${f.elements.message.value}

--------------------------------
A S Udaya K R G
PhD Scholar in Physics
SRM University AP
Computational Physics`;

    const recipient = 'udayaddepalli236@gmail.com';

    const subject = 'Message from A S Udaya K R G Physics Portfolio';

    const mailto =
      'mailto:' + recipient +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    window.location.href = mailto;

    const status = document.getElementById('form-status');

    if (status) {
      status.textContent =
        'Your email app has been requested. Please review the email draft and press Send. If it does not open, email udayaddepalli236@gmail.com directly.';
    }
  });
})();
