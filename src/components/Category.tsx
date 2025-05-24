"use client";

import useData from "@/utils/data";
import Link from "next/link";

export default function ({ title, num }: { title: string; num: number }) {
  const { scopes } = useData();

  if (!scopes) {
    return <div className="p-5 text-3xl text-green-900">data not available</div>;
  }

  const isDone =
    num === 1
      ? scopes?.scope1.isDone
      : num === 2
      ? scopes?.scope2.isDone
      : scopes?.scope3.isDone;

  const isDoneClass = isDone ? "bg-green-900" : "bg-white";

  if (isDone) return null;

  return (
    <div
      className={`p-10 m-6 flex items-center justify-between gap-8 flex-col shadow w-[300px] h-[300px] ${isDoneClass} rounded-2xl`}
    >
      <p>{title}</p>
      <Link href={`/scope${num}`}>
        <button
          className="bg-green-900 w-36 h-18 text-white rounded-lg text-2xl"
          disabled={isDone}
        >
          scope {num}
        </button>
      </Link>
    </div>
  );
}
