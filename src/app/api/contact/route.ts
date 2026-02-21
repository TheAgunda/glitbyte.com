import { NextRequest, NextResponse } from "next/server";
// import { getDb } from "@/lib/mongodb";
import nodemailer from "nodemailer";
import { APP } from '@/lib/constants';
import { m } from "framer-motion";
export async function POST(req: NextRequest) {
    const body = await req.json();

    const {
        fullName,
        phone,
        company,
        email,
        service,
        budget,
        details,
        token,
    } = body;
    // --- Capture User Agent ---
    const userAgent = req.headers.get("user-agent") || "";
    // --- Capture Client IP ---
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "";
    // 1️⃣ Verify Turnstile
    const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: process.env.TURNSTILE_SECRET_KEY!,
                response: token,
            }),
        }
    );

    // const verifyData = await verifyRes.json();

    // if (!verifyData.success) {
    //     return NextResponse.json(
    //         { success: false, message: "Turnstile failed" },
    //         { status: 400 }
    //     );
    // }

    // 2️⃣ Store in MongoDB
    // const db = await getDb();
    // await db.collection("leads").insertOne({
    //     fullName,
    //     phone,
    //     company,
    //     email,
    //     service,
    //     budget,
    //     details,
    //     createdAt: new Date(),
    // });

    // 3️⃣ Send Email Notification
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    const dateTime = new Date().toLocaleString("en-US", { timeZone: "UTC" });
    const referenceId = `GLB-${Date.now()}`;
    const info = await transporter.sendMail({
        from: `"Website Lead" <${process.env.SMTP_USER}>`,
        to: APP.CONTACT.EMAIL,
        subject: `New Contact Form Submission - ${APP.NAME}`,
        html: `
        <!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Inquiry</title>
</head>

<body
    style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px;">
        <tr>
            <td align="center">

                <table width="680" cellpadding="0" cellspacing="0"
                    style="background:#ffffff;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
                    <!-- Header -->
                    <tr>
                        <td style="padding-left: 40px;padding-right: 40px; padding-bottom:25px;padding-top:40px; border-bottom:1px solid #e5e7eb;">
                            <h2 style="margin:0;font-size:22px;color:#111827;">
                                New Contact Form Submission – ${APP.NAME}
                            </h2>
                            <p style="margin:6px 0 0 0;font-size:14px;color:#6b7280;">
                                Reference ID: <strong>${referenceId}</strong>
                                | Submitted: ${dateTime}
                            </p>
                        </td>
                    </tr>

                    <!-- Priority Badge -->
                    <tr>
                        <td style="padding-top:20px; padding-left: 40px;padding-right: 40px;">
                            <span
                                style="background:#e0f2fe;color:#0369a1;padding:6px 12px;border-radius:20px;font-size:12px;font-weight:600;">
                                ACTION REQUIRED
                            </span>
                        </td>
                    </tr>

                    <!-- Contact Info Section -->
                    <tr>
                        <td style="padding-top:30px; padding-left: 40px;padding-right: 40px;">
                            <h3 style="margin:0 0 15px 0;color:#111827;font-size:16px;">Contact Information</h3>
                            <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
                                <tr>
                                    <td width="35%" style="color:#6b7280;">Full Name</td>
                                    <td style="font-weight:600;color:#111827;">${fullName}</td>
                                </tr>
                                <tr>
                                    <td style="color:#6b7280;">Email Address</td>
                                    <td style="font-weight:600;color:#111827;">${email}</td>
                                </tr>
                                <tr>
                                    <td style="color:#6b7280;">Contact Number</td>
                                    <td style="font-weight:600;color:#111827;">${phone}</td>
                                </tr>
                                <tr>
                                    <td style="color:#6b7280;">Company Name</td>
                                    <td style="font-weight:600;color:#111827;">${company}</td>
                                </tr>
                                  <tr>
                                    <td style="color:#6b7280;">Service Required</td>
                                    <td style="font-weight:600;color:#111827;">${service}</td>
                                </tr>
                                  <tr>
                                    <td style="color:#6b7280;">Project Budget</td>
                                    <td style="font-weight:600;color:#111827;">${budget}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!-- Message Section -->
                    <tr>
                        <td style="padding-top:30px; padding-left: 40px;padding-right: 40px;">
                            <h3 style="margin-bottom:12px;color:#111827;font-size:16px;">Customer Message</h3>
                            <div
                                style="background:#f9fafb;border:1px solid #e5e7eb;padding:18px;border-radius:8px;line-height:1.6;color:#111827;font-size:14px;">
                               ${details.replace(/\n/g, "<br>")}
                            </div>
                        </td>
                    </tr>

                    <!-- Quick Actions -->
                    <tr>
                        <td style="padding-top:30px;padding-bottom:30px; padding-left: 40px;padding-right: 40px;">
                            <h3 style="margin-bottom:15px;color:#111827;font-size:16px;">Quick Actions</h3>

                            <a href="mailto:{{email}}"
                                style="display:inline-block;background:#111827;color:#ffffff;padding:10px 18px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:500;margin-right:10px;">
                                Reply to Customer
                            </a>

                            <a href="tel:{{phone}}"
                                style="display:inline-block;background:#f3f4f6;color:#111827;padding:10px 18px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:500;border:1px solid #e5e7eb;">
                                Call Customer
                            </a>
                        </td>
                    </tr>
                    <!-- Metadata -->
                    <tr>
                        <td style="padding-top:35px; padding-left: 40px;padding-right: 40px;padding-bottom: 40px;border-top:1px solid #e5e7eb;">
                            <p style="font-size:12px;color:#9ca3af;margin:0;">
                                IP Address: ${ip}<br>
                                User Agent: ${userAgent}<br>
                                Source: Website Contact Form
                            </p>
                        </td>
                    </tr>
                </table>
                <p style="font-size:12px;color:#9ca3af;margin-top:18px;">
                    Automated system notification — Glitbyte Contact Infrastructure
                </p>
            </td>
        </tr>
    </table>
</body>
</html>
`,
    });
    return NextResponse.json({ success: true, referenceId: referenceId, messageId: info.messageId });
}
