import * as React from "react";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
  accentClassName?: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  text,
  accentClassName = "from-rose-500 to-orange-400",
}: FeatureCardProps) {
  return (
    <div className="group rounded-[2rem] bg-white/85 p-6 shadow-lg shadow-stone-200/60 ring-1 ring-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accentClassName} text-white shadow-lg transition duration-300 group-hover:scale-105`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-stone-900">{title}</h3>
      <p className="mt-3 leading-8 text-stone-600">{text}</p>
    </div>
  );
}