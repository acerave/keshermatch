"use client";

import Link from "next/link";

const FEATURES = [
  "שפה חמה, משפחתית ומכבדת",
  "מעורבות הורים בכבוד ובאיזון",
  "התאמות חכמות בלי לוותר על הלב והאינטואיציה",
];

const FAQS = [
  {
    q: "למי המסלול הזה מתאים?",
    a: "למשפחות ולאנשים מסורתיים שמחפשים שפה מוכרת יותר, אווירה מכבדת, ודרך נעימה לשלב בין עולם השידוכים לבין טכנולוגיה חדשה.",
  },
  {
    q: "האם להורים יש תפקיד בתהליך?",
    a: "כן, אבל בצורה מאוזנת. יש מקום למעורבות הורים, לצד שליטה מלאה של המועמד או המועמדת על הפרטיות וההתקדמות.",
  },
  {
    q: "מתי נחשפים פרטים אישיים?",
    a: "רק לפי הרשאות ואישורים ברורים. אנחנו שומרים על תהליך מכבד ולא חושפים מידע רגיש מוקדם מדי.",
  },
];

export function validateTraditionalForm(values: { fullName?: string; email?: string; role?: string }) {
  const fullName = String(values.fullName ?? "").trim();
  const email = String(values.email ?? "").trim();
  const role = String(values.role ?? "").trim();

  if (!fullName) return { ok: false, message: "נא למלא שם מלא." };
  if (!email) return { ok: false, message: "נא למלא כתובת אימייל." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "נא להזין כתובת אימייל תקינה." };
  }
  if (!role) return { ok: false, message: "נא לבחור סוג מצטרף." };

  return { ok: true, message: `תודה ${fullName}! נרשמתם למסלול המסורתי.` };
}

export const validationTests = [
  { name: "valid", input: { fullName: "ישראל ישראלי", email: "test@example.com", role: "parent" }, expected: { ok: true } },
  { name: "missing email", input: { fullName: "ישראל ישראלי", email: "", role: "parent" }, expected: { ok: false, message: "נא למלא כתובת אימייל." } },
];

export default function TraditionalLandingPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = validateTraditionalForm({
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      role: String(formData.get("role") ?? ""),
    });

    if (!result.ok) {
      window.alert(result.message);
      return;
    }

    window.alert(result.message);
    form.reset();
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 text-stone-900">
      <header className="border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-stone-900">
            KesherMatch
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/traditional" className="text-orange-600">מסורתיים</Link>
            <Link href="/secular" className="transition hover:text-sky-600">חילוניים</Link>
            <Link href="/mixed" className="transition hover:text-rose-600">מעורב</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
              מסלול מסורתי
            </div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              שידוכים עם כבוד
              <span className="block bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                למסורת, למשפחה וללב
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
              דף נחיתה שמדבר בשפה חמה, משפחתית ומכבדת. מתאים למשפחות מסורתיות שרוצות דרך מודרנית,
              אבל בלי לאבד את הערכים, הקרבה והכבוד לתהליך.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {FEATURES.map((feature) => (
                <div key={feature} className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-white/70">
                  <p className="font-medium text-stone-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white/90 p-6 shadow-2xl shadow-orange-200 md:p-8">
            <div className="mb-6 text-2xl font-bold">הצטרפו למסלול המסורתי</div>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium">שם מלא</label>
                <input id="fullName" name="fullName" type="text" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-orange-500" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">אימייל</label>
                <input id="email" name="email" type="email" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-orange-500" />
              </div>
              <div>
                <label htmlFor="role" className="mb-2 block text-sm font-medium">אני מצטרף בתור</label>
                <select id="role" name="role" defaultValue="" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-orange-500">
                  <option value="" disabled>בחרו אפשרות</option>
                  <option value="parent">הורה</option>
                  <option value="candidate">בן או בת</option>
                  <option value="matchmaker">שדכן או שדכנית</option>
                </select>
              </div>
              <button type="submit" className="w-full rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:opacity-95">
                אני רוצה להצטרף
              </button>
            </div>
          </form>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            { title: "בית", text: "אווירה חמה ומשפחתית שמרגישה קרובה יותר לעולם הערכים המסורתי." },
            { title: "כבוד", text: "התהליך נבנה כדי לשמור על פרטיות, רגישות והתקדמות נכונה." },
            { title: "חיבור", text: "טכנולוגיה חכמה שמסייעת לשדכנות האנושית, לא מחליפה אותה." },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-white/80 p-6 shadow-lg shadow-orange-100">
              <h3 className="text-2xl font-bold text-stone-900">{item.title}</h3>
              <p className="mt-3 leading-8 text-stone-700">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-[2rem] bg-white p-8 shadow-lg shadow-stone-200 md:p-10">
          <h2 className="text-3xl font-black md:text-4xl">שאלות נפוצות</h2>
          <div className="mt-8 space-y-4">
            {FAQS.map((item) => (
              <details key={item.q} className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6">
                <summary className="cursor-pointer text-lg font-bold text-stone-800">{item.q}</summary>
                <p className="mt-4 leading-8 text-stone-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
