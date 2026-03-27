"use client";

import Link from "next/link";

const LANDING_PAGES = [
  {
    href: "/traditional",
    label: "מסורתיים",
    badge: "מסלול מסורתי",
    title: "שידוכים עם כבוד למסורת, למשפחה וללב",
    description:
      "עמוד נחיתה חם ומשפחתי לקהל מסורתי שמחפש דרך חדשה, מכבדת ונעימה לעשות דבר ישן וטוב.",
    gradient: "from-amber-50 via-orange-50 to-rose-50",
    button: "from-orange-500 to-rose-500",
    card: "from-orange-50 to-white",
    highlights: [
      "שפה חמה ומשפחתית",
      "מעורבות הורים בכבוד ובאיזון",
      "התאמות חכמות בגישה אנושית",
    ],
  },
  {
    href: "/secular",
    label: "חילוניים",
    badge: "מסלול חילוני",
    title: "פלטפורמת היכרות חכמה, פתוחה ומדויקת יותר",
    description:
      "עמוד נחיתה מודרני ונקי לקהל חילוני שמחפש התאמה אישית, חופש בחירה ושליטה מלאה בתהליך.",
    gradient: "from-sky-50 via-white to-violet-50",
    button: "from-sky-500 to-violet-500",
    card: "from-sky-50 to-white",
    highlights: [
      "חוויה מודרנית ופשוטה",
      "שליטה מלאה בפרטיות ובחשיפה",
      "התאמה לפי ערכים, אופי וסגנון חיים",
    ],
  },
  {
    href: "/mixed",
    label: "מעורב",
    badge: "מסלול מעורב",
    title: "מקום שמחבר בין עולמות שונים בגישה רגישה וחכמה",
    description:
      "עמוד נחיתה שמיועד למפגש בין סגנונות חיים שונים, עם רגישות, פתיחות ויכולת לגשר בין עולמות.",
    gradient: "from-rose-50 via-white to-sky-50",
    button: "from-rose-500 via-orange-400 to-sky-500",
    card: "from-rose-50 to-white",
    highlights: [
      "שפה גמישה ולא שיפוטית",
      "התאמה מעבר להגדרות קשיחות",
      "רגישות להבדלים בין משפחות וסגנונות",
    ],
  },
];

export function validateLeadForm(values: { fullName?: string; email?: string; track?: string }) {
  const fullName = String(values.fullName ?? "").trim();
  const email = String(values.email ?? "").trim();
  const track = String(values.track ?? "").trim();

  if (!fullName) {
    return { ok: false, message: "נא למלא שם מלא." };
  }

  if (!email) {
    return { ok: false, message: "נא למלא כתובת אימייל." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { ok: false, message: "נא להזין כתובת אימייל תקינה." };
  }

  if (!track) {
    return { ok: false, message: "נא לבחור מסלול." };
  }

  return {
    ok: true,
    message: `תודה ${fullName}! שמרנו אותך למסלול ${track} וניצור קשר בכתובת ${email}`,
  };
}

export const validationTests = [
  {
    name: "valid lead",
    input: { fullName: "ישראל ישראלי", email: "test@example.com", track: "traditional" },
    expected: { ok: true },
  },
  {
    name: "missing name",
    input: { fullName: "", email: "test@example.com", track: "traditional" },
    expected: { ok: false, message: "נא למלא שם מלא." },
  },
  {
    name: "invalid email",
    input: { fullName: "ישראל ישראלי", email: "bad-email", track: "secular" },
    expected: { ok: false, message: "נא להזין כתובת אימייל תקינה." },
  },
  {
    name: "missing track",
    input: { fullName: "ישראל ישראלי", email: "test@example.com", track: "" },
    expected: { ok: false, message: "נא לבחור מסלול." },
  },
];

function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 via-orange-400 to-sky-500 text-lg font-black text-white shadow-lg">
        K
      </div>
      <div>
        <div className="text-xl font-extrabold tracking-tight text-stone-900">KesherMatch</div>
        <div className="text-xs font-medium text-stone-500">שלושה מסלולים, פלטפורמה אחת</div>
      </div>
    </div>
  );
}

function HomeHeroCard({ page }: { page: (typeof LANDING_PAGES)[number] }) {
  return (
    <div className={`rounded-[2rem] bg-gradient-to-br ${page.gradient} p-6 shadow-lg shadow-stone-200/50`}>
      <div className="mb-4 inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
        {page.badge}
      </div>
      <h3 className="text-2xl font-black leading-tight text-stone-900 md:text-3xl">{page.title}</h3>
      <p className="mt-4 leading-8 text-stone-700">{page.description}</p>
      <div className="mt-5 space-y-3">
        {page.highlights.map((highlight, index) => (
          <div key={highlight} className={`rounded-2xl bg-gradient-to-br ${page.card} p-4 shadow-sm ring-1 ring-white/70`}>
            <div className={`mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r ${page.button} text-sm font-bold text-white`}>
              {index + 1}
            </div>
            <p className="font-medium text-stone-800">{highlight}</p>
          </div>
        ))}
      </div>
      <Link
        href={page.href}
        className={`mt-6 inline-flex rounded-full bg-gradient-to-r ${page.button} px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:opacity-95`}
      >
        לעמוד {page.label}
      </Link>
    </div>
  );
}

function LeadForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = validateLeadForm({
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      track: String(formData.get("track") ?? ""),
    });

    if (!result.ok) {
      window.alert(result.message);
      return;
    }

    window.alert(result.message);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl space-y-4 rounded-[2rem] bg-white p-6 shadow-xl shadow-stone-200 md:p-8">
      <div>
        <label htmlFor="track" className="mb-2 block text-sm font-medium text-stone-700">
          מסלול מועדף
        </label>
        <select
          id="track"
          name="track"
          defaultValue="traditional"
          className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900"
        >
          <option value="traditional">מסורתיים</option>
          <option value="secular">חילוניים</option>
          <option value="mixed">מעורב</option>
        </select>
      </div>
      <div>
        <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-stone-700">
          שם מלא
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="הקלידו שם מלא"
          className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-700">
          אימייל
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900"
        />
      </div>
      <button type="submit" className="w-full rounded-full bg-stone-900 px-6 py-3 text-base font-semibold text-white transition hover:opacity-90">
        הצטרפו לרשימת ההמתנה
      </button>
    </form>
  );
}

export default function HomePage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-100 text-stone-900">
      <header className="sticky top-0 z-20 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <BrandLogo />
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="/traditional" className="transition hover:text-orange-600">מסורתיים</Link>
            <Link href="/secular" className="transition hover:text-sky-600">חילוניים</Link>
            <Link href="/mixed" className="transition hover:text-rose-600">מעורב</Link>
            <a href="#lead-form" className="rounded-full bg-stone-900 px-4 py-2 text-white transition hover:opacity-90">הצטרפות מוקדמת</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <section className="mb-12 text-center md:mb-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
              עמוד בית מרכזי + 3 דפי נחיתה נפרדים
            </div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              KesherMatch בנוי נכון
              <span className="block bg-gradient-to-r from-orange-500 via-rose-500 to-sky-500 bg-clip-text text-transparent">
                לקהלים שונים ולשפות שונות
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600 md:text-xl">
              עמוד הבית הוא מרכז המותג, וממנו יוצאים שלושה דפי נחיתה שונים לחלוטין:
              מסורתיים, חילוניים ומעורב. כך כל קהל פוגש מסר, עיצוב ושפה שמתאימים לו.
            </p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {LANDING_PAGES.map((page) => (
            <HomeHeroCard key={page.href} page={page} />
          ))}
        </section>

        <section className="mt-20 rounded-[2.5rem] bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 px-8 py-12 text-white shadow-2xl shadow-stone-300 md:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 max-w-3xl">
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-stone-300">בינלאומי ושפות</div>
              <h2 className="text-3xl font-black md:text-5xl">כן — אפשר לתמוך בכמה שפות בצורה מקצועית</h2>
              <p className="mt-4 text-lg leading-8 text-stone-300">
                הדומיין הישראלי יכול לשרת את הגרסה המקומית בעברית, והדומיין הבינלאומי יכול לשרת גרסה באנגלית ובהמשך גם שפות נוספות.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "עברית מלאה עם RTL ל־.co.il",
                "אנגלית ל־.com בתור גרסה בינלאומית",
                "הרחבה עתידית לצרפתית, ספרדית ושפות נוספות",
              ].map((item) => (
                <div key={item} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg">
                  <p className="leading-8 text-stone-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="lead-form" className="py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-stone-500">בדיקת שוק</div>
            <h2 className="text-3xl font-black md:text-5xl">בחרו את המסלול שמעניין אתכם</h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              כך תוכלו להתחיל למדוד איזה מסלול מייצר הכי הרבה התעניינות, עוד לפני בניית המערכת המלאה.
            </p>
          </div>
          <LeadForm />
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white px-6 py-8 text-center text-sm text-stone-500">
        כל הזכויות שמורות © 2026 KesherMatch
      </footer>
    </div>
  );
}
