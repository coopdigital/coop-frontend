import { toggleAllMaskUnmask } from '../fields/passwords.mjs';

// Form elements
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const passwordToggle = document.getElementById('password-show-hide');

// Unmask password text when ticked
passwordToggle.addEventListener('click',
  () => toggleAllMaskUnmask([password, passwordConfirm]));
