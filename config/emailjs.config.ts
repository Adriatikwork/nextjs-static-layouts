/**
 * EmailJS Configuration
 *
 * These values are safe to commit to GitHub as they are public-facing.
 * EmailJS security is handled through domain restrictions in your EmailJS dashboard.
 *
 * Setup Instructions:
 * 1. Go to https://dashboard.emailjs.com/
 * 2. Create an account and set up your email service
 * 3. Create an email template
 * 4. Replace the values below with your credentials
 * 5. Configure allowed domains in EmailJS dashboard for security
 */

export const emailJsConfig = {
  // Your EmailJS Service ID (from Email Services page)
  // Example: 'service_abc123'
  serviceId: 'YOUR_SERVICE_ID',

  // Your EmailJS Template ID (from Email Templates page)
  // Example: 'template_xyz789'
  templateId: 'YOUR_TEMPLATE_ID',

  // Your EmailJS Public Key (from Account > General)
  // Example: 'abcXYZ123_456def'
  publicKey: 'YOUR_PUBLIC_KEY',

  // Recipient name (used in email template)
  recipientName: 'Dottoressa Beconi',
}

/**
 * Security Notes:
 * - These values are meant to be public and client-side
 * - Protect your form with domain restrictions in EmailJS dashboard
 * - Optional: Add reCAPTCHA for additional protection
 * - EmailJS free tier: 200 emails/month
 */
