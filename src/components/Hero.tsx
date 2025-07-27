"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
    const images = ["/images/earth-crack.jpg", "/images/bear-ice.jpg", "/images/earth-fire.jpg"];

    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='relative w-full min-h-[45rem] overflow-hidden'>
            {/* Background image layers */}
            {images.map((img, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${i === bgIndex ? "opacity-100 z-0" : "opacity-0"}`}
                    style={{ backgroundImage: `url(${img})` }}
                />
            ))}

            {/* Content layer */}
            <div className='relative z-10 flex gap-5 pt-24 justify-center w-full p-2 min-h-[40rem]  bg-opacity-50'>
                <div className='flex flex-col text-white items-center p-6 gap-3 max-w-full'>
                    <h1 className='text-4xl font-bold  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
   '>Le climat nous appelle: Agissons aujourd'hui pour préserver notre planète </h1>
                    <p className='text-2xl mt-2'>
                        Le changement climatique n’est plus une menace lointaine : il est déjà là, sous forme d’événements extrêmes, de perturbations écologiques, et d’impacts sur notre santé et nos
                        ressources. Ce phénomène est principalement dû aux activités humaines qui rejettent des gaz à effet de serre (GES) dans l’atmosphère, notamment le dioxyde de carbone (CO₂). <br />
                        Pour protéger notre avenir, chaque entreprise a un rôle à jouer. Mais on ne peut pas réduire ce qu’on ne mesure pas. C’est pourquoi le calcul de votre impact carbone est une
                        étape essentielle : il permet de prendre conscience de vos émissions, d’identifier les leviers d’action, et de mettre en place des solutions concrètes pour les réduire.
                         <ul className="list-disc pl-12 mt-4">
                            <li>Lutter contre le changement climatique commence par une prise de conscience, Passer à l’action, c’est commencer par mesurer.</li>
                            <li>Découvrez notre outil de calcul du bilan carbone dédié à la société TIC, un premier pas vers la maîtrise de nos émissions et la transition durable</li>
                        </ul>
                    </p>
                    <Link href='/calcule' className='self-center'>
                        <button className='text-white self-center bg-blue-500 px-6 py-3 rounded mt-12 w-84 text-xl'>Lancer le calcul</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
