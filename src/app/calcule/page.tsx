import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
    return (
        <>
        <Navbar />
        <div className="w-full h-screen flex justify-center items-center  " style={{backgroundImage: "url('/images/grass1.jpg')", backgroundSize: 'cover'}}>
            <div className="bg-white/75 p-5 m-6 flex items-center justify-center gap-8 flex-col rounded-2xl shadow w-[500px] h-[500px]">
                <p className="text-5xl text-green-900 font-bold text-center">
                    Bilan Carbone
                </p>
                <p className="text-3xl text-green-900 text-center">
                    Calculer et analyser vos <br/> émissions d'équivalent CO₂
                </p>
                <Link href="/form">
                    <button className="bg-green-900 text-white px-4 py-2 rounded text-3xl">
                        Calculer
                    </button>
                </Link>
            </div>
        </div>
        </>
    );
}
