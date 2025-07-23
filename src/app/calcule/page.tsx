import Link from 'next/link';

export default function Home() {
    return (
        <div className="w-full h-fit flex justify-center items-center ">
            <div className="bg-white p-5 m-6 flex items-center justify-center gap-8 flex-col rounded-2xl shadow w-[600px] h-[600px]">
                <p className="text-5xl text-green-900 font-bold text-center">
                    Bilan Carbone
                </p>
                <p className="text-3xl text-green-900 text-center">
                    calculer et analyser vos <br/> emission de Carbone
                </p>
                <Link href="/form">
                    <button className="bg-green-900 text-white px-4 py-2 rounded text-3xl">
                        Calculer
                    </button>
                </Link>
            </div>
        </div>
    );
}
