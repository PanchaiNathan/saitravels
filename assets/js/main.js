/**
 * Sai Travel - Main Interactive Script
 * Handles configuration binding, WhatsApp URL generation, booking form validation,
 * counter animations, smooth scrolling, and UI interactivity.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Central Configuration Bindings
  initAppConfig();

  // 2. Setup Booking Form & Trip Type Switcher
  initBookingForm();

  // 3. Setup Contact Form
  initContactForm();

  // 4. Setup Fleet & Service Pre-fill Triggers
  initPrefillTriggers();

  // 5. Setup Animated Stats Counters
  initStatsCounter();

  // 6. Setup Sticky Header & Scroll To Top
  initScrollBehaviors();

  // 7. Setup Date Input Default (Today's date minimum)
  initDateTimeDefaults();

  // 8. Setup Mobile Nav Auto-Close
  initMobileNavClose();
});

/**
 * Hydrates DOM elements from SAI_CONFIG
 */
function initAppConfig() {
  if (typeof SAI_CONFIG === 'undefined') return;

  const cfg = SAI_CONFIG.company;

  // Replace text for elements with data-config
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.getAttribute('data-config');
    const val = getNestedValue(SAI_CONFIG, key);
    if (val !== undefined) {
      el.textContent = val;
    }
  });

  // Update telephone links
  document.querySelectorAll('a[href^="tel:"]').forEach(el => {
    el.href = `tel:${cfg.phone}`;
  });

  // Update default WhatsApp links
  const waBase = `https://wa.me/91${cfg.whatsapp}?text=${encodeURIComponent('Hello Sai Travel, I would like to inquire about taxi booking.')}`;
  document.querySelectorAll('.wa-link-btn').forEach(el => {
    el.href = waBase;
  });

  // Update mailto links
  document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
    el.href = `mailto:${cfg.email}`;
  });

  // Update Current Year
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
}

/**
 * Helper to get nested object properties like 'company.phoneDisplay'
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, obj);
}

/**
 * Sets today's date as min attribute for date pickers
 */
function initDateTimeDefaults() {
  const dateInput = document.getElementById('bookDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    if (!dateInput.value) {
      dateInput.value = today;
    }
  }

  const timeInput = document.getElementById('bookTime');
  if (timeInput && !timeInput.value) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeInput.value = `${hours}:${minutes}`;
  }
}

/**
 * Booking Form validation and WhatsApp message builder
 */
function initBookingForm() {
  const form = document.getElementById('heroBookingForm');
  if (!form) return;

  // Trip type pill switcher
  const pills = document.querySelectorAll('.trip-type-pill');
  const tripTypeInput = document.getElementById('bookTripType');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      if (tripTypeInput) {
        tripTypeInput.value = pill.getAttribute('data-value');
      }
    });
  });

  // Form Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('bookName')?.value.trim();
    const phone = document.getElementById('bookPhone')?.value.trim();
    const pickup = document.getElementById('bookPickup')?.value.trim();
    const drop = document.getElementById('bookDrop')?.value.trim();
    const date = document.getElementById('bookDate')?.value.trim();
    const time = document.getElementById('bookTime')?.value.trim();
    const tripType = document.getElementById('bookTripType')?.value || 'One Way';
    const vehicle = document.getElementById('bookVehicle')?.value || 'Sedan (Dzire / Etios)';
    const passengers = document.getElementById('bookPassengers')?.value || '1 - 4 Persons';

    // Basic Validation
    if (!name || !phone || !pickup || !drop || !date || !time) {
      showToast('Please fill in all required booking details.', 'warning');
      return;
    }

    // Phone validation (numeric, min 10 digits)
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      showToast('Please enter a valid 10-digit mobile number.', 'warning');
      return;
    }

    // Build WhatsApp message formatted as requested
    const formattedMsg = 
`Hello Sai Travel, I would like to book a taxi.

Name: ${name}
Mobile: ${phone}
Pickup: ${pickup}
Drop: ${drop}
Date: ${date}
Time: ${time}
Trip Type: ${tripType}
Vehicle: ${vehicle}
Passengers: ${passengers}`;

    const waNumber = SAI_CONFIG?.company?.whatsapp || '9003981444';
    const waUrl = `https://wa.me/91${waNumber}?text=${encodeURIComponent(formattedMsg)}`;

    // Show toast confirmation
    showToast('Redirecting to WhatsApp to complete your booking enquiry...', 'success');

    // Open WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  });
}

/**
 * Contact Us Form Handling
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName')?.value.trim();
    const phone = document.getElementById('contactPhone')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const service = document.getElementById('contactService')?.value;
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || !phone || !message) {
      showToast('Please fill out Name, Phone, and your Message.', 'warning');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      showToast('Please enter a valid 10-digit mobile number.', 'warning');
      return;
    }

    const contactMsg = 
`Hello Sai Travel, I have a general enquiry.

Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Service Required: ${service || 'General Enquiry'}
Message: ${message}`;

    const waNumber = SAI_CONFIG?.company?.whatsapp || '9003981444';
    const waUrl = `https://wa.me/91${waNumber}?text=${encodeURIComponent(contactMsg)}`;

    showToast('Opening WhatsApp with your enquiry...', 'success');

    setTimeout(() => {
      window.open(waUrl, '_blank');
      form.reset();
    }, 400);
  });
}

/**
 * Handle "Book Now" buttons on Service & Fleet cards
 */
function initPrefillTriggers() {
  // Service Book Now buttons
  document.querySelectorAll('[data-book-service]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-book-service');
      const tripType = btn.getAttribute('data-trip-type') || 'Outstation';

      // Set Trip Type Pill if matches
      const targetPill = document.querySelector(`.trip-type-pill[data-value="${tripType}"]`);
      if (targetPill) {
        targetPill.click();
      }

      // Smooth scroll to booking form
      scrollToBookingForm();
      showToast(`Selected "${serviceName}". Please fill your trip locations.`, 'info');
    });
  });

  // Fleet Book Now buttons
  document.querySelectorAll('[data-book-fleet]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const vehicleVal = btn.getAttribute('data-book-fleet');
      const vehicleSelect = document.getElementById('bookVehicle');
      if (vehicleSelect && vehicleVal) {
        vehicleSelect.value = vehicleVal;
      }

      scrollToBookingForm();
      showToast(`Selected vehicle "${vehicleVal}".`, 'info');
    });
  });

  // Route Book Taxi buttons
  document.querySelectorAll('[data-book-route]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const fromCity = btn.getAttribute('data-from') || 'Tiruppur';
      const toCity = btn.getAttribute('data-to') || '';

      const pickupInput = document.getElementById('bookPickup');
      const dropInput = document.getElementById('bookDrop');

      if (pickupInput) pickupInput.value = fromCity;
      if (dropInput) dropInput.value = toCity;

      scrollToBookingForm();
      showToast(`Route set: ${fromCity} to ${toCity}`, 'info');
    });
  });

  // Tour Enquire Now buttons
  document.querySelectorAll('[data-book-tour]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tourTitle = btn.getAttribute('data-book-tour');
      const dropInput = document.getElementById('bookDrop');
      const tripTypeInput = document.getElementById('bookTripType');
      const outstationPill = document.querySelector('.trip-type-pill[data-value="Outstation"]');

      if (outstationPill) outstationPill.click();
      if (dropInput) dropInput.value = tourTitle;

      scrollToBookingForm();
      showToast(`Selected Tour Package: ${tourTitle}`, 'info');
    });
  });
}

function scrollToBookingForm() {
  const bookingEl = document.getElementById('heroBookingForm') || document.getElementById('bookingCard');
  if (bookingEl) {
    bookingEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    bookingEl.classList.add('pulse-highlight');
    setTimeout(() => bookingEl.classList.remove('pulse-highlight'), 1800);
  }
}

/**
 * Animated Counter for Statistics
 */
function initStatsCounter() {
  const counterElements = document.querySelectorAll('.stat-counter');
  if (!counterElements.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const duration = 1800; // ms
          const step = Math.ceil(target / (duration / 25));
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = current;
            }
          }, 25);
        });
      }
    });
  }, { threshold: 0.25 });

  const statsSection = document.getElementById('statsSection');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/**
 * Sticky Header Scroll State & Scroll-to-top button
 */
function initScrollBehaviors() {
  const header = document.querySelector('.site-header');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    // Header shadow & compacting
    if (header) {
      if (y > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scroll to top button visibility
    if (scrollTopBtn) {
      if (y > 350) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/**
 * Mobile Navbar Collapse on Link Click
 */
function initMobileNavClose() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navCollapse = document.getElementById('primaryNav');

  if (navCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }
}

/**
 * Lightweight Toast Notification
 */
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const icon = type === 'success' ? 'bi-check-circle-fill' : type === 'warning' ? 'bi-exclamation-triangle-fill' : 'bi-info-circle-fill';
  const color = type === 'success' ? 'text-success' : type === 'warning' ? 'text-warning' : 'text-primary';

  toast.className = 'toast align-items-center show shadow-lg border-0 mb-2';
  toast.setAttribute('role', 'alert');
  toast.setAttribute('aria-live', 'assertive');
  toast.setAttribute('aria-atomic', 'true');
  toast.style.background = '#0B1E36';
  toast.style.color = '#FFFFFF';
  toast.style.borderRadius = '12px';

  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body d-flex align-items-center gap-2 py-3 px-3">
        <i class="bi ${icon} ${color} fs-5"></i>
        <span style="font-size: 0.9rem; font-weight: 500;">${message}</span>
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" aria-label="Close"></button>
    </div>
  `;

  const closeBtn = toast.querySelector('.btn-close');
  closeBtn.addEventListener('click', () => toast.remove());

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s ease';
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}
