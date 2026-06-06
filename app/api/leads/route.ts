import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseSecretKey =
      process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseSecretKey) {
      return NextResponse.json(
        { error: "Missing Supabase environment variables" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const fullName = String(body.fullName || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const interestedFor = String(body.interestedFor || "").trim();
    const track = String(body.track || "").trim();
    const message = String(body.message || "").trim();

    if (!fullName || !phone || !interestedFor) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseSecretKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { error } = await supabase.from("leads").insert({
      full_name: fullName,
      phone,
      email: email || null,
      interested_for: interestedFor,
      track: track || null,
      message: message || null,
      source: "hebrew_landing_page",
      status: "new",
    });

    if (error) {
  console.error("Supabase insert error:", error);

  return NextResponse.json(
    { error: "Failed to save lead" },
    { status: 500 }
  );
}

const resendApiKey = process.env.RESEND_API_KEY;
const notifyEmail = process.env.LEAD_NOTIFY_EMAIL;

if (resendApiKey && notifyEmail) {
  try {
    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "KesherMatch <leads@keshermatch.co.il>",
      to: [notifyEmail],
      subject: "ליד חדש מ-KesherMatch",
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.7;">
          <h2>ליד חדש התקבל באתר KesherMatch</h2>

          <p><strong>שם מלא:</strong> ${fullName}</p>
          <p><strong>טלפון:</strong> ${phone}</p>
          <p><strong>אימייל:</strong> ${email || "-"}</p>
          <p><strong>מתעניין עבור:</strong> ${interestedFor}</p>
          <p><strong>מסלול:</strong> ${track || "-"}</p>
          <p><strong>הערות:</strong> ${message || "-"}</p>

          <hr />

          <p style="color:#666;font-size:12px;">
            הליד נשמר גם בטבלת leads ב-Supabase.
          </p>
        </div>
      `,
    });
  } catch (mailError) {
    console.error("Resend email error:", mailError);
  }
}

return NextResponse.json(
  { success: true, message: "Lead saved successfully" },
  { status: 201 }
);
  } catch (error) {
    console.error("Lead API error:", error);

    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}