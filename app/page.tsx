import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  HeartHandshake,
  LockKeyhole,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import LeadForm from "./components/LeadForm";

const principles = [
  {
    icon: LockKeyhole,
    title: "פרטיות לפני הכול",
    description: "הפרטים נועדו לפנייה ראשונית בלבד ואינם מוצגים לציבור.",
  },
  {
    icon: HeartHandshake,
    title: "היכרות אנושית",
    description: "אנחנו מתחילים בהקשבה לאדם, למשפחה ולמה שחשוב באמת.",
  },
  {
    icon: Sparkles,
    title: "איכות במקום כמות",
    description: "החזון הוא תהליך מדויק ושקול, לא עוד גלילה אינסופית.",
  },
];

const tracks = [
  {
    title: "מסורתי",
    description:
      "למשפחות וליחידים שמבקשים לשלב מסורת, משפחתיות וחיים ישראליים מודרניים.",
  },
  {
    title: "חילוני",
    description:
      "למחפשי זוגיות רצינית שרוצים תהליך אישי, דיסקרטי ומבוסס ערכים.",
  },
  {
    title: "משפחות מעורבות",
    description:
      "למי שמחפשים חיבור רגיש בין אורחות חיים, רקעים וציפיות משפחתיות.",
  },
];

const steps = [
  {
    number: "01",
    title: "משאירים פרטים",
    description: "טופס קצר עוזר לנו להבין מי פונה ומהו הכיוון הכללי.",
  },
  {
    number: "02",
    title: "שיחת היכרות",
    description: "כאשר נפתח את שלב ההרצה, נחזור לשיחה אישית וללא התחייבות.",
  },
  {
    number: "03",
    title: "בונים יחד",
    description: "המשוב מהקהילה יסייע לנו לדייק שירות אחראי, נעים ושימושי.",
  },
];

const faqs = [
  {
    question: "האם השירות כבר פעיל?",
    answer:
      "אנחנו נמצאים בשלב הקמה ואיסוף מתעניינים. אין כרגע מאגר פרופילים פעיל, והצטרפות לרשימה אינה כרוכה בתשלום או בהתחייבות.",
  },
  {
    question: "למי מיועד האתר?",
    answer:
      "ליחידים ולהורים בישראל שמחפשים דרך רצינית, מכבדת ומשפחתית להיכרות, במגוון אורחות חיים.",
  },
  {
    question: "מה קורה אחרי שמשאירים פרטים?",
    answer:
      "הפרטים נשמרים לצורך עדכון ופנייה ראשונית. ניצור קשר כאשר ייפתח שלב ההרצה המתאים.",
  },
  {
    question: "האם הפרטים שלי גלויים לאחרים?",
    answer:
      "לא. טופס ההתעניינות אינו יוצר פרופיל ציבורי, והמידע אינו מוצג למשתמשים אחרים.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f4f6fa] text-[#17233f]">
      <section className="relative min-h-[720px] overflow-hidden bg-[#101a30] text-white">
        <div className="absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-[#a53b55]/25 blur-3xl" />
        <div className="absolute -bottom-56 left-[20%] h-[520px] w-[520px] rounded-full bg-[#d39a52]/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#f0c78f] backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#e2ad68]" />
              הרשמה מוקדמת נפתחה
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-[4.7rem]">
              לא עוד אפליקציה.
              <span className="mt-2 block bg-gradient-to-l from-[#e8b875] to-[#f6dbb7] bg-clip-text text-transparent">
                קשר אמיתי.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#d6ddeb] md:text-xl md:leading-9">
              דרך ישראלית חדשה להיכרות רצינית, שמחזירה למרכז את מה שאלגוריתם
              לא יכול להבין: ערכים, משפחה והסיפור שמאחורי האדם.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#interest"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#a53b55] px-8 py-4 text-base font-extrabold text-white shadow-[0_16px_35px_rgba(165,59,85,0.35)] transition hover:-translate-y-0.5 hover:bg-[#bb4764]"
              >
                הצטרפות לרשימת המתעניינים
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                איך זה עובד?
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#b9c2d3]">
              {["ללא התחייבות", "ללא תשלום בשלב זה", "הפרטים נשמרים בדיסקרטיות"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#e2ad68]" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-5 rotate-2 rounded-[3rem] border border-white/10 bg-white/5" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-2 shadow-[0_35px_90px_rgba(0,0,0,0.35)] backdrop-blur">
              <Image
                src="/images/israel-parents.jpg"
                alt="זוג ישראלי שמח"
                width={613}
                height={353}
                priority
                className="aspect-[1.18/1] w-full rounded-[2rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-white px-5 py-4 text-[#17233f] shadow-2xl sm:-right-7">
              <ShieldCheck className="h-9 w-9 text-[#a53b55]" />
              <div>
                <p className="text-xs font-bold text-[#778198]">הבטחה בסיסית</p>
                <p className="font-extrabold">פרטיות ושיקול דעת</p>
              </div>
            </div>
            <div className="absolute -left-4 -top-7 rounded-2xl border border-white/15 bg-[#a53b55] px-5 py-4 shadow-2xl sm:-left-8">
              <p className="text-2xl font-black">100%</p>
              <p className="text-xs font-bold text-white/75">ממוקד בקשר רציני</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black tracking-[0.16em] text-[#a53b55]">
              למה קשר
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#17233f] md:text-5xl">
              דרך שנבנית סביב אנשים, לא סביב מסכים
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#69738a]">
              אנחנו מאמינים שטכנולוגיה יכולה לעזור, אבל היא לא מחליפה
              הקשבה, רגישות ושיקול דעת.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group rounded-[2rem] border border-[#e3e7ee] bg-gradient-to-b from-white to-[#f5f7fb] p-8 shadow-[0_18px_50px_rgba(21,34,61,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(21,34,61,0.13)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17233f] text-[#e2ad68] shadow-lg transition group-hover:bg-[#a53b55] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 leading-7 text-[#69738a]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tracks" className="border-y border-[#dfe4ed] bg-[#eef1f6] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black tracking-[0.16em] text-[#a53b55]">
                מקום לדרך שלכם
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                מסלולים שונים, כוונה משותפת
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#69738a]">
                החברה הישראלית מורכבת. במקום להכניס את כולם לתבנית אחת, קשר
                מבקשת להבין את אורח החיים, הערכים והקצב שמתאימים לכם.
              </p>
            </div>

            <div className="grid gap-4">
              {tracks.map((track, index) => (
                <article
                  key={track.title}
                  className="group flex gap-5 rounded-3xl border border-[#dde2eb] bg-white p-6 shadow-sm transition hover:-translate-x-1 hover:border-[#a53b55]/40 hover:shadow-xl"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#17233f] font-black text-[#e2ad68]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold">{track.title}</h3>
                    <p className="mt-2 leading-7 text-[#69738a]">
                      {track.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative overflow-hidden bg-[#17233f] py-20 text-white md:py-24">
        <div className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-[#a53b55]/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black tracking-[0.16em] text-[#e2ad68]">
                השלב הנוכחי
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                מתחילים בהיכרות, בקצב הנכון
              </h2>
            </div>
            <p className="max-w-md leading-7 text-white/70">
              אנחנו עדיין לא מבצעים התאמות. כעת נבנית קהילת המתעניינים שתסייע
              לנו להשיק שירות מדויק ואחראי.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-8 shadow-xl backdrop-blur"
              >
                <p className="text-4xl font-black text-[#e2ad68]">{step.number}</p>
                <h3 className="mt-5 text-xl font-extrabold">{step.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17233f] text-[#e2ad68]">
              <MessagesSquare className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-black md:text-4xl">
              שאלות חשובות, תשובות ברורות
            </h2>
            <p className="mt-4 leading-8 text-[#69738a]">
              שקיפות היא חלק מאמון. הנה מה שכדאי לדעת לפני שמשאירים פרטים.
            </p>
          </div>
          <div className="divide-y divide-[#e1e5ec] border-y border-[#e1e5ec]">
            {faqs.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold">
                  {item.question}
                  <span className="text-2xl font-light text-[#a53b55] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-2 pt-3 leading-8 text-[#69738a]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="interest" className="bg-[#eef1f6] px-5 py-20 md:px-8 md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#a53b55] to-[#7d2942] shadow-[0_30px_80px_rgba(74,27,49,0.28)] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative p-8 text-white md:p-12">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
            <div className="relative">
              <p className="text-sm font-black tracking-[0.16em] text-[#edcca0]">
                הצטרפות מוקדמת
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                רוצים לשמוע כשקשר יוצאת לדרך?
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/80">
                השאירו כמה פרטים בסיסיים. נעדכן אתכם בהתפתחויות וניצור קשר
                לקראת שלב ההרצה, ללא התחייבות.
              </p>

              <div className="mt-8 space-y-4 text-sm font-semibold text-white/85">
                <p className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#edcca0]" />
                  מתאים ליחידים, להורים ולבני משפחה
                </p>
                <p className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#edcca0]" />
                  אין יצירת פרופיל ציבורי בשלב זה
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#f4f6fa] p-5 md:p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  );
}
