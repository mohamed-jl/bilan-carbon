'use client'

import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import useData from "@/utils/data";

export default function form() {

    const { resetScopes} = useData();

    const handleReset = ()=>{
        resetScopes()
        window.location.reload()
    }

    return (
        <>
        <Navbar />
        <div className="w-full h-screen flex flex-col justify-center items-center" style={{backgroundImage: "url('/images/grass.jpg')", backgroundSize: 'cover'}}>
            <div className="flex flex-col h-[400px] items-center gap-8 ">
                <div className="w-full h-screen flex justify-center items-center ">
                    <Category title="Les emissions directes" num={1} />
                    <Category title="Les emissions indirectes liees a l'energie achetee" num={2} />
                    <Category title="Les emissions indirectes liees aux activites de la societe (Amont et Aval)" num={3} />
                </div>
            </div>
            <button onClick={handleReset} className="px-3 py-2 bg-green-900 text-white rounded-lg m-7">reset data</button>
        </div>
        </>
    );
}
