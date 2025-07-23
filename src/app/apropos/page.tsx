import Link from "next/link";

export default function APropos() {
    return (
        <>
            <div className='w-full h-fit flex justify-center items-center flex-col'>
                <Link href={'/'} className="p-3 text-blue-600 self-start">← return home</Link>
                <div className=' flex flex-col gap-6 py-4 px-24'>
                    <h1 className='text-5xl'>À propos</h1>
                    <h1 className='text-3xl text-green-500'>À propos de notre initiative climat</h1>
                    <div>
                        <img className='float-right w-84 ' src='/images/image-lamp.png' alt='' />
                        <p className='text-lg text-gray-700'>
                            La société Technique d’Inspection et de Contrôle (TIC), spécialisée dans le contrôle qualité et l’inspection technique, s’engage à intégrer la durabilité au cœur de ses
                            pratiques. Notre outil de calcul du bilan carbone a été développé dans le cadre de notre système de management intégré (SMI), afin de :
                            <ul className='list-disc pl-5'>
                                <li>Quantifier nos émissions de gaz à effet de serre (GES),</li>
                                <li>Identifier les postes les plus émissifs,</li>
                                <li>Proposer des pistes concrètes de réduction,</li>
                                <li>Répondre aux exigences de l’Amendement 1 des normes ISO relatives au changement climatique.</li>
                            </ul>
                            Nous croyons que mesurer, c’est agir. Ce projet s’inscrit dans une démarche globale d’amélioration continue, de responsabilité environnementale et de transparence.
                        </p>
                    </div>
                </div>
                <div className='bg-white py-6 px-24 flex flex-col gap-8'>
                    <h1 className='text-5xl'>FAQ</h1>
                    <div className='flex'>
                        <div className='flex flex-col gap-18'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-3xl text-green-500'> Qu’est-ce qu’un bilan carbone ?</h2>
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
                                <h2 className='text-3xl text-green-500'> Pourquoi TIC calcule-t-elle son empreinte carbone ?</h2>
                                <p className='text-lg text-gray-700'>
                                    Pour anticiper les impacts du changement climatique, réduire ses émissions, et répondre aux nouvelles exigences réglementaires (ISO 14001, 50001, 14064…).
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-18'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-3xl text-green-500'> Quels types de données sont collectées ?</h2>
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
                                <h2 className='text-3xl text-green-500'> Ce site est-il accessible au public ?</h2>
                                <p className='text-lg text-gray-700'>Non. Cet outil est destiné à un usage interne à la société TIC dans le cadre de sa démarche QHSE et de conformité ISO.</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-3xl text-green-500'> Quelle méthode est utilisée ?</h2>
                                <p className='text-lg text-gray-700'>
                                    Le calcul repose sur la méthode de l’ADEME et le GHG Protocol, avec des facteurs d’émission officiels. Il est conforme aux référentiels ISO 14064 et à la méthode
                                    Bilan Carbone®.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex p-6 px-24 gap-6 bg-gray-50 w-full h-fit '>
                    <img className='w-1/4 ' src='/images/image-msg.png' alt='' />
                    <div>
                        <h1 className='text-3xl font-bold text-center'>Contact</h1>
                        <p className='text-lg text-gray-700 p-6'>
                            Une question ? Un retour ? Une suggestion d’amélioration ? Notre équipe est à votre écoute. <br />
                            E-mail : <br />
                            Téléphone : +216 XXX XXX XXX <br />
                            Adresse : ………………Tunis, Tunisie Horaires :<br />
                            Lundi – Vendredi | 8h00 – 17h00
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
