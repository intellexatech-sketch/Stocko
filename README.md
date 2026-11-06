# Stocko Wholesale

Stocko Wholesale landing page built with React, TanStack Start, and Tailwind CSS.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
cp .env.example .env # configure your Gmail SMTP settings
npm run dev
```

## Gmail SMTP Setup (Contact Form)

Contact form submissions are sent directly to `stockowholesale@gmail.com` via Gmail SMTP using `nodemailer`.

1. Copy `.env.example` to `.env`.
2. Generate a 16-character Google App Password:
   - Open your Google Account at [myaccount.google.com/security](https://myaccount.google.com/security).
   - Ensure **2-Step Verification** is enabled.
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
   - Create an app password named `Stocko Website`.
   - Copy the 16-character code into `.env`:
     ```env
     GMAIL_USER=stockowholesale@gmail.com
     GMAIL_APP_PASSWORD=your_16_character_app_password
     CONTACT_RECEIVER_EMAIL=stockowholesale@gmail.com
     ```
3. Restart the dev server or re-deploy. All customer enquiries submitted via the form will now be delivered straight to `stockowholesale@gmail.com`.
