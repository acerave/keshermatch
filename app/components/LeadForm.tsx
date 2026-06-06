"use client";

import Link from "next/link";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      interestedFor: String(formData.get("interestedFor") || ""),
      track: String(formData.get("track") || ""),
      message: "",
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("לא הצלחנו לשלוח כרגע. אפשר לנסות שוב בעוד כמה דקות.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex min-h-[430px] flex-col items-center justify-center rounded-[1.75rem] border border-[#ded2c6] bg-white p-8 text-center shadow-sm"
        role="status"
      >
        <CheckCircle2 className="h-14 w-14 text-[#a53b55]" />
        <h3 className="mt-5 text-2xl font-black text-[#17233f]">
          תודה, הפרטים התקבלו
        </h3>
        <p className="mt-3 max-w-sm leading-7 text-[#69738a]">
          שמרנו את פנייתכם. נעדכן וניצור קשר כאשר נפתח את שלב ההרצה.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-sm font-bold text-[#a53b55] underline underline-offset-4"
        >
          שליחת פנייה נוספת
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-[#dce1e9] bg-[#f8f9fc] px-4 py-3.5 text-[#17233f] outline-none transition placeholder:text-[#929bad] focus:border-[#a53b55] focus:bg-white focus:ring-4 focus:ring-[#a53b55]/10";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-[#dfe4ec] bg-white p-6 shadow-[0_20px_55px_rgba(18,32,59,0.12)] md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-[#4f5970]">
          שם מלא <span className="text-[#a53b55]">*</span>
          <input
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="ישראל ישראלי"
            className={fieldClass}
          />
        </label>

        <label className="text-sm font-bold text-[#4f5970]">
          טלפון <span className="text-[#a53b55]">*</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="050-0000000"
            className={fieldClass}
          />
        </label>

        <label className="text-sm font-bold text-[#4f5970] sm:col-span-2">
          אימייל
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            className={fieldClass}
          />
        </label>

        <label className="text-sm font-bold text-[#4f5970]">
          עבור מי הפנייה? <span className="text-[#a53b55]">*</span>
          <select name="interestedFor" required defaultValue="" className={fieldClass}>
            <option value="" disabled>בחירת אפשרות</option>
            <option value="self">עבורי</option>
            <option value="son_or_daughter">עבור בן או בת</option>
            <option value="family_member">עבור בן משפחה</option>
            <option value="other">אחר</option>
          </select>
        </label>

        <label className="text-sm font-bold text-[#4f5970]">
          אורח חיים
          <select name="track" defaultValue="" className={fieldClass}>
            <option value="" disabled>בחירת מסלול</option>
            <option value="traditional">מסורתי</option>
            <option value="secular">חילוני</option>
            <option value="mixed">משפחה מעורבת</option>
            <option value="not_sure">עדיין לא בטוח</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#a53b55] px-6 py-4 font-extrabold text-white shadow-[0_12px_26px_rgba(165,59,85,0.22)] transition hover:-translate-y-0.5 hover:bg-[#8b2d47] disabled:cursor-wait disabled:opacity-65"
      >
        {status === "loading" && <LoaderCircle className="h-5 w-5 animate-spin" />}
        {status === "loading" ? "שולחים את הפרטים..." : "אני רוצה להצטרף"}
      </button>

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-bold text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <p className="mt-4 text-center text-xs leading-6 text-[#788297]">
        בשליחה אני מאשר/ת יצירת קשר בנוגע למיזם. אפשר לבקש הסרה בכל עת.
        לפרטים נוספים:{" "}
        <Link href="/privacy" className="font-bold text-[#a53b55] underline">
          מדיניות הפרטיות
        </Link>
      </p>
    </form>
  );
}
