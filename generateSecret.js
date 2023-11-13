// generateSecret.js
const crypto = require('crypto');

// Generate a secure random string for the session secret
const generateSessionSecret = () => {
  const length = 32;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';

  let sessionSecret = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    sessionSecret += charset[randomIndex];
  }

  return sessionSecret;
};

console.log(generateSessionSecret());
