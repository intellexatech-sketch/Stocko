import { t as contactSchema } from "./contact.schema-xM-yEEfH.mjs";
import { t as nodemailer } from "../_libs/nodemailer.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nodemailer.server-C2VTV-yL.js
function createGmailTransporter() {
	const user = (process.env.GMAIL_USER || process.env.SMTP_USER || "stockowholesale@gmail.com").trim();
	const pass = (process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS || process.env.SMTP_PASS || process.env.SMTP_PASSWORD)?.trim().replace(/\s+/g, "");
	if (!pass) return {
		transporter: null,
		error: "Gmail SMTP credentials are not configured. Please set GMAIL_APP_PASSWORD (or SMTP_PASS) in your environment variables.",
		user
	};
	const host = (process.env.SMTP_HOST || "smtp.gmail.com").trim();
	const port = Number(process.env.SMTP_PORT || 465);
	const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
	return {
		transporter: nodemailer.createTransport({
			host,
			port,
			secure,
			auth: {
				user,
				pass
			}
		}),
		error: null,
		user
	};
}
function escapeHtml(str) {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function buildEmailContent(data) {
	const formattedDate = (/* @__PURE__ */ new Date()).toLocaleString("en-IN", {
		timeZone: "Asia/Kolkata",
		dateStyle: "full",
		timeStyle: "medium"
	});
	return {
		subject: `New Contact Enquiry from ${data.name}${data.business ? ` - ${data.business}` : ""} | Stocko Wholesale`,
		text: [
			"New Contact Form Submission from Stocko Wholesale Website",
			"===========================================================",
			`Name:          ${data.name}`,
			`Business:      ${data.business || "Not specified"}`,
			`Phone:         ${data.phone}`,
			`Email:         ${data.email || "Not specified"}`,
			`Submitted at:  ${formattedDate} (IST)`,
			"",
			"Message / Questions:",
			"-----------------------------------------------------------",
			data.message || "No questions or message provided.",
			"==========================================================="
		].join("\n"),
		html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #1e293b;
      margin: 0;
      padding: 0;
      background-color: #f1f5f9;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
    }
    .header {
      background: #0f4c81;
      color: #ffffff;
      padding: 24px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    .header p {
      margin: 6px 0 0;
      color: #f7b928;
      font-size: 14px;
      font-weight: 600;
    }
    .body {
      padding: 28px 24px;
    }
    .field {
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid #f1f5f9;
    }
    .field:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .label {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: #64748b;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .value {
      font-size: 16px;
      color: #0f172a;
      font-weight: 500;
    }
    .value a {
      color: #0f4c81;
      text-decoration: none;
      font-weight: 600;
    }
    .message-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 14px;
      margin-top: 6px;
      font-size: 15px;
      color: #334155;
      white-space: pre-wrap;
    }
    .footer {
      background: #f8fafc;
      padding: 16px 24px;
      font-size: 12px;
      color: #94a3b8;
      text-align: center;
      border-top: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Stocko Wholesale</h1>
      <p>New Website Contact Form Enquiry</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Customer Name</div>
        <div class="value">${escapeHtml(data.name)}</div>
      </div>
      <div class="field">
        <div class="label">Business Name</div>
        <div class="value">${data.business ? escapeHtml(data.business) : "<em style=\"color:#94a3b8\">Not specified</em>"}</div>
      </div>
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value"><a href="tel:${encodeURIComponent(data.phone)}">${escapeHtml(data.phone)}</a></div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value">${data.email ? `<a href="mailto:${encodeURIComponent(data.email)}">${escapeHtml(data.email)}</a>` : "<em style=\"color:#94a3b8\">Not specified</em>"}</div>
      </div>
      <div class="field">
        <div class="label">Questions / Message</div>
        <div class="message-box">${data.message ? escapeHtml(data.message) : "<em style=\"color:#94a3b8\">No questions provided.</em>"}</div>
      </div>
    </div>
    <div class="footer">
      Received on ${formattedDate} (IST) &bull; Stocko Wholesale Website
    </div>
  </div>
</body>
</html>
  `.trim()
	};
}
async function handleSendContactEmail(rawInput) {
	const data = contactSchema.parse(rawInput);
	const { transporter, error: configError, user } = createGmailTransporter();
	if (!transporter) {
		console.warn("Mail config error:", configError);
		return {
			success: false,
			message: configError
		};
	}
	const recipient = process.env.CONTACT_RECEIVER_EMAIL || process.env.RECIPIENT_EMAIL || "stockowholesale@gmail.com";
	const { subject, text, html } = buildEmailContent(data);
	try {
		await transporter.sendMail({
			from: `"Stocko Wholesale Website" <${user}>`,
			to: recipient,
			replyTo: data.email && data.email.includes("@") ? data.email : void 0,
			subject,
			text,
			html
		});
		return {
			success: true,
			message: "Thank you! Your message has been sent successfully. We will get back to you shortly."
		};
	} catch (err) {
		console.error("Error sending email via Gmail SMTP:", err);
		return {
			success: false,
			message: `Failed to send email: ${err instanceof Error ? err.message : "Failed to send email. Please try again."}`
		};
	}
}
//#endregion
export { handleSendContactEmail };
