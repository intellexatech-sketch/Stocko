import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { contactSchema } from "@/server/contact.schema";
import { handleSendContactEmail, buildEmailContent } from "@/server/nodemailer.server";
import nodemailer from "nodemailer";

vi.mock("nodemailer", () => {
  const sendMailMock = vi.fn();
  return {
    default: {
      createTransport: vi.fn(() => ({
        sendMail: sendMailMock,
      })),
    },
  };
});

describe("Contact Schema Validation", () => {
  it("validates valid contact form input", () => {
    const input = {
      name: "John Doe",
      business: "Doe Supermarket",
      phone: "+91 9876543210",
      email: "john@example.com",
      message: "Looking for wholesale FMCG products.",
    };

    const parsed = contactSchema.parse(input);
    expect(parsed.name).toBe("John Doe");
    expect(parsed.business).toBe("Doe Supermarket");
    expect(parsed.phone).toBe("+91 9876543210");
    expect(parsed.email).toBe("john@example.com");
    expect(parsed.message).toBe("Looking for wholesale FMCG products.");
  });

  it("trims whitespace from inputs", () => {
    const input = {
      name: "  Jane Smith  ",
      business: "  Smith Enterprises  ",
      phone: "  7034499966  ",
      email: "  jane@example.com  ",
      message: "  Hello Stocko  ",
    };

    const parsed = contactSchema.parse(input);
    expect(parsed.name).toBe("Jane Smith");
    expect(parsed.business).toBe("Smith Enterprises");
    expect(parsed.phone).toBe("7034499966");
    expect(parsed.email).toBe("jane@example.com");
    expect(parsed.message).toBe("Hello Stocko");
  });

  it("handles optional fields with defaults", () => {
    const input = {
      name: "Trader One",
      phone: "9876543210",
    };

    const parsed = contactSchema.parse(input);
    expect(parsed.name).toBe("Trader One");
    expect(parsed.phone).toBe("9876543210");
    expect(parsed.business).toBe("");
    expect(parsed.email).toBe("");
    expect(parsed.message).toBe("");
  });

  it("fails when name is missing or empty", () => {
    expect(() =>
      contactSchema.parse({
        name: "   ",
        phone: "9876543210",
      }),
    ).toThrow();
  });

  it("fails when phone number is missing or empty", () => {
    expect(() =>
      contactSchema.parse({
        name: "John Doe",
        phone: "   ",
      }),
    ).toThrow();
  });
});

describe("buildEmailContent", () => {
  it("formats email content with all details", () => {
    const data = {
      name: "Raju Grocery",
      business: "Raju Stores",
      phone: "9876543210",
      email: "raju@gmail.com",
      message: "Need bulk pricing for oil & rice.",
    };

    const { subject, text, html } = buildEmailContent(data);
    expect(subject).toContain("Raju Grocery");
    expect(subject).toContain("Raju Stores");
    expect(text).toContain("9876543210");
    expect(text).toContain("raju@gmail.com");
    expect(text).toContain("Need bulk pricing for oil & rice.");
    expect(html).toContain("Raju Grocery");
    expect(html).toContain("Raju Stores");
    expect(html).toContain('href="tel:9876543210"');
    expect(html).toContain('href="mailto:raju%40gmail.com"');
  });
});

describe("handleSendContactEmail", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
    vi.clearAllMocks();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("returns an error if SMTP password is not configured", async () => {
    delete process.env.GMAIL_APP_PASSWORD;
    delete process.env.GMAIL_PASS;
    delete process.env.SMTP_PASS;
    delete process.env.SMTP_PASSWORD;

    const result = await handleSendContactEmail({
      name: "Test User",
      business: "Test Shop",
      phone: "9876543210",
      email: "test@example.com",
      message: "Wholesale inquiry",
    });

    expect(result.success).toBe(false);
    expect(result.message).toContain("Gmail SMTP credentials are not configured");
  });

  it("sends mail to stockowholesale@gmail.com when credentials are set", async () => {
    process.env.GMAIL_USER = "stockowholesale@gmail.com";
    process.env.GMAIL_APP_PASSWORD = "test-app-password";

    const fakeTransport = {
      sendMail: vi.fn().mockResolvedValue({ messageId: "12345" }),
    };
    vi.mocked(nodemailer.createTransport).mockReturnValue(
      fakeTransport as unknown as ReturnType<typeof nodemailer.createTransport>,
    );

    const result = await handleSendContactEmail({
      name: "Ali Kozhikode",
      business: "Kozhikode Traders",
      phone: "+91 9995551122",
      email: "ali@traders.com",
      message: "Interested in bulk rice and staples.",
    });

    expect(result.success).toBe(true);
    expect(fakeTransport.sendMail).toHaveBeenCalledTimes(1);
    const mailArgs = fakeTransport.sendMail.mock.calls[0][0];
    expect(mailArgs.to).toBe("stockowholesale@gmail.com");
    expect(mailArgs.replyTo).toBe("ali@traders.com");
    expect(mailArgs.subject).toContain("Ali Kozhikode");
    expect(mailArgs.subject).toContain("Kozhikode Traders");
    expect(mailArgs.text).toContain("+91 9995551122");
    expect(mailArgs.html).toContain("Ali Kozhikode");
  });

  it("automatically strips spaces from app passwords", async () => {
    process.env.GMAIL_USER = "stockowholesale@gmail.com";
    process.env.GMAIL_APP_PASSWORD = "yrpm lzce xyqf oqxu";

    const fakeTransport = {
      sendMail: vi.fn().mockResolvedValue({ messageId: "12345" }),
    };
    vi.mocked(nodemailer.createTransport).mockReturnValue(
      fakeTransport as unknown as ReturnType<typeof nodemailer.createTransport>,
    );

    const result = await handleSendContactEmail({
      name: "Ali Kozhikode",
      phone: "+91 9995551122",
    });

    expect(result.success).toBe(true);
    expect(nodemailer.createTransport).toHaveBeenCalledWith(
      expect.objectContaining({
        auth: {
          user: "stockowholesale@gmail.com",
          pass: "yrpmlzcexyqfoqxu",
        },
      }),
    );
  });

  it("handles nodemailer failure gracefully", async () => {
    process.env.GMAIL_USER = "stockowholesale@gmail.com";
    process.env.GMAIL_APP_PASSWORD = "test-app-password";

    const fakeTransport = {
      sendMail: vi.fn().mockRejectedValue(new Error("Connection timeout to SMTP server")),
    };
    vi.mocked(nodemailer.createTransport).mockReturnValue(
      fakeTransport as unknown as ReturnType<typeof nodemailer.createTransport>,
    );

    const result = await handleSendContactEmail({
      name: "Ali Kozhikode",
      phone: "+91 9995551122",
    });

    expect(result.success).toBe(false);
    expect(result.message).toContain("Connection timeout to SMTP server");
  });
});
