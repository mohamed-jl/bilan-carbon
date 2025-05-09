import Link from "next/link";

export default function ({ title, num }: { title: string; num: number }) {
    return (
        <div className="bg-white p-10 m-6 flex items-center justify-between gap-8 flex-col shadow w-[300px] h-[300px]">
            <p>{title}</p>
            <Link href={`/scope${num}`}>
                <button className="bg-green-900 w-36 h-18 text-white rounded-lg text-2xl">
                    scope {num}
                </button>
            </Link>
        </div>
    );
}
