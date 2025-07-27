import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
    return (
        <div className='w-full h-fit flex justify-center items-center flex-col'>
            <Navbar />
            {/* <div className='bg-[url(/images/earth-crack.jpg)] bg-cover bg-center flex gap-5  items-center justify-center w-full h-128 p-2'>
                <div className='flex flex-col justify-center text-white p-6 gap-3   '>
                    <h1 className='text-6xl'>Agire pour le climat commence par mesurer son impact carbon</h1>
                    <p className='text-2xl mt-2'>
                        Découvrez comment réduire votre outil de calcule du bilan carbon dedie a la societe TIC , un premier pas vers la metrise de nos emission et la transition dueble
                    </p>
                    <Link href='/calcule'>
                        <button className='text-white bg-green-500 px-4 py-2 rounded mt-4'>Lancer le calcule</button>
                    </Link>
                </div>
                <img src='/images/hero-image.jpg' alt='Hero Image' className='w-1/2 h-auto' />
            </div> */}
            <Hero />
            <div className='w-full h-100 flex justify-center items-center p-6 gap-4 '>
                <img src='/images/co2-leaf.jpeg' alt='' className='w-1/3 h-auto ' />
                <div className='flex flex-col gap-6'>
                    <h1 className='text-4xl self-center text-green-700 font-bold'> Pourquoi le bilan carbone est-il important ?</h1>
                    <p className='text-lg'>
                        Le changement climatique représente un défi majeur pour les entreprises du 21e siècle. Pour y faire face, il est essentiel d’identifier, de mesurer et de réduire les émissions
                        de gaz à effet de serre. Le bilan carbone permet à la société Technique Inspection et Controle de :
                        <ul className='list-disc pl-10'>
                            <li>Comprendre son empreinte environnementale,</li>
                            <li>Identifier les sources d’émissions des GAS les plus critiques,</li>
                            <li>Définir une stratégie de réduction adaptée,</li>
                            <li>Répondre aux exigences des normes ISO et réglementations environnementales (ISO 14001, ISO 50001...)</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-8 p-0 w-full h-80 bg-blue-100 justify-center items-center'>
                {/* <h1 className='text-4xl'>Le changement climatique en chiffres</h1> */}
                <div className='flex justify-center gap-24 p-2 '>
                    <div className='flex-col flex items-center w-48 gap-2'>
                        <h2 className='text-7xl'>1,1°C</h2>
                        <p className='text-lg text-center'>Augmentation de la température moyenne mondiale depuis l'ère préindustrielle</p>
                    </div>
                    <div className='flex-col flex items-center w-48 gap-2'>
                        <h2 className='text-7xl'>🏭</h2>
                        <p className='text-lg text-center'>75% des émissions mondiales viennent de l’énergie et de l’industrie</p>
                    </div>
                    <div className='flex-col flex items-center w-48 gap-2'>
                        <h2 className='text-7xl'>🏢</h2>
                        <p className='text-lg text-center'>1 entreprise sur 2 ne connaît pas ses émissions réelles</p>
                    </div>
                    <div className='flex-col flex items-center w-48 gap-2'>
                        <h2 className='text-5xl'>⌛</h2>
                        <h2 className='text-4xl'>2030</h2>
                        <p className='text-lg text-center'> Date limite pour réduire de moitié les émissions mondiales (objectif GIEC)</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-108 flex flex-row justify-between p-6 gap-8 bg-white'>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-4xl text-center font-bold text-green-700'> Notre engagement pour un avenir bas carbone</h2>
                    <p className='text-lg'>
                        Chez Technique Inspection et Contrôle, nous sommes convaincus que la performance passe par la responsabilité environnementale. C’est pourquoi nous avons intégré le calcul
                        du bilan carbone à notre système de management intégré (QHSE). Cela nous permet de :
                        <ul className='list-disc pl-18 mt-2'>
                            <li>Intégrer les risques climatiques dans notre démarche qualité.</li>
                            <li>Renforcer notre conformité à l’Amendement 1 des normes ISO. </li>
                            <li>Se preparer aux obligations reglementaires.</li>
                            <li>Contribuer a la lutte contre le changememt climatique.</li>
                            <li>Valoriser l'image de l'entreprise.</li>
                            <li>Sensibiliser nos collaborateurs à leur impact environnemental.</li>
                        </ul>
                    </p>
                </div>
                <img src='/images/butterflt.jpeg' alt='' className='w-1/3 h-100 ' />
            </div>
            <div className='flex flex-col items-center justify-center w-full h-fit gap-6 bg-white p-6'>
                <h1 className='text-4xl font-bold'>Un outil simple, pédagogique et fiable</h1>
                <div className='flex flex-col md:flex-row gap-12 mt-6'>
                    <div className='bg-blue-50 rounded-lg p-5 flex flex-col gap-4 items-center w-92'>
                        <i className='fa-solid fa-file-arrow-down text-7xl text-blue-300'></i>
                        <h1 className='text-4xl'>Saisie des données</h1>
                        <p>
                            <ul className='list-disc pl-5'>
                                <li>Activités énergétiques (électricité, carburant...) </li>
                                <li> Déplacements (véhicules, avion...) </li>
                                <li>Déchets, intrants, etc. </li>
                            </ul>
                        </p>
                    </div>
                    <div className='bg-blue-50 rounded-lg p-5 flex flex-col gap-4 items-center w-92'>
                        <i className='fa-solid fa-magnifying-glass text-7xl text-blue-300'></i>
                        <h1 className='text-4xl'>Calcul automatique</h1>
                        <p>
                            <ul className='list-disc pl-5'>
                                <li>Facteurs d’émission certifiés (ADEME, GHG Protocol) </li>
                                <li>Méthodologie conforme aux normes ISO 14064 et Bilan Carbone®</li>
                            </ul>
                        </p>
                    </div>
                    <div className='bg-blue-50 rounded-lg p-5 flex flex-col gap-4 items-center w-92'>
                        <i className='fa-solid fa-chart-simple text-7xl text-blue-300'></i>
                        <h1 className='text-4xl'>Résultats & rapport </h1>
                        <p>
                            <ul className='list-disc pl-5'>
                                <li>Visualisation par scope (1, 2, 3)</li>
                                <li>Recommandations de réduction</li>
                                <li>Rapport exportable</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <Link href='/methodologie' className='rounded-xl bg-blue-300 p-4 text-2xl'> Découvrir la méthodologie complète</Link>
            </div>
            <div className='w-full p-12 bg-blue-50'>
                <div className=' bg-white p-6 rounded-xl text-center'>
                    <p className='italic text-2xl'>“Intégrér le changement climatique dans notre stratégie, c’est anticiper les risques de demain et valoriser l’entreprise aujourd’hui.”</p>
                    <p className='mt-4 font-semibold text-xl text-gray-600'>– Oumayma NAIMI stagiaire QHSE,TIC </p>
                </div>
            </div>
        </div>
    );
}
