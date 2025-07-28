import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function FAQPage() {
    return (
        <div style={{ backgroundImage: "url('/images/4.jpg')", backgroundSize: 'cover' }}>
            <Navbar />
            <div className='bg-white/60 py-6 px-24 flex flex-col gap-8 h-screen'>
                <h1 className='text-5xl'>FAQ</h1>
                <div className='flex'>
                    <div className='flex flex-col gap-18'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-3xl text-green-500 font-bold'> Qu’est-ce qu’un bilan carbone ?</h2>
                            <p className='text-lg text-gray-700'>
                                C’est un outil permettant de mesurer les émissions de gaz à effet de serre générées directement ou indirectement par une entreprise, selon trois niveaux :
                                <ul>
                                    <li>Scope 1 :émissions directes (carburant, combustion)</li>
                                    <li>Scope 2 : émissions indirectes liées à l’énergie (électricité, chaleur) </li>
                                    <li>Scope 3 : émissions en amont/aval (déplacements, déchets, achats…) </li>
                                </ul>
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-3xl text-green-500 font-bold'> Pourquoi TIC calcule-t-elle son empreinte carbone ?</h2>
                            <p className='text-lg text-gray-700'>
                                Pour anticiper les impacts du changement climatique, réduire ses émissions, et répondre aux nouvelles exigences réglementaires (ISO 14001, 500 font-bold01, 14064…).
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-18'>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-3xl text-green-500 font-bold'> Quels types de données sont collectées ?</h2>
                            <p className='text-lg text-gray-700'>
                                Les données concernent :
                                <ul>
                                    <li>La consommation d’énergie (électricité, carburants…)</li>
                                    <li>Les déplacements professionnels</li>
                                    <li>Les déchets produits </li>
                                    <li>Les intrants et fournitures </li>
                                </ul>
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-3xl text-green-500 font-bold'> Ce site est-il accessible au public ?</h2>
                            <p className='text-lg text-gray-700'>Non. Cet outil est destiné à un usage interne à la société TIC dans le cadre de sa démarche QHSE et de conformité ISO.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-3xl text-green-500 font-bold'> Quelle méthode est utilisée ?</h2>
                            <p className='text-lg text-gray-700'>
                                Le calcul repose sur la méthode de l’ADEME et le GHG Protocol, avec des facteurs d’émission officiels. Il est conforme aux référentiels ISO 14064 et à la méthode Bilan
                                Carbone®.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
