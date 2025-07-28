import Navbar from "@/components/Navbar";

export default function APropos() {
    return (
        <>
        <Navbar />
            <div className='w-full h-fit flex justify-center items-center flex-col'>
                <div className=' flex flex-col gap-6 py-4 px-24'>
                    <h1 className='text-3xl font-bold'>À propos de notre initiative climat</h1>
                    <div>
                        <img className='float-right w-84 ' src='/images/image-lamp.png' alt='' />
                        <p className='text-lg text-gray-700'>
                            La société Technique Inspection et Contrôle (TIC), spécialisée dans le contrôle qualité et l’inspection technique, s’engage à intégrer la durabilité au cœur de ses
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
               
                <div className='flex p-6 px-24 gap-6 bg-gray-50 w-full h-fit '>
                    <img className='w-48 ' src='/images/image-msg.png' alt='' />
                    <div>
                        <h1 className='text-3xl font-bold text-center'>Contact</h1>
                        <p className='text-lg text-gray-700 p-6'>
                            Une question ? Un retour ? Une suggestion d’amélioration ? Notre équipe est à votre écoute. <br />
                            E-mail : tic@tic-inspectiongroup.com <br />
                            Téléphone : +216 70 169 780 / +216 70 169 781<br />
                            Adresse : Lot 1-1-18 zone industrielle kheireddine, 2015 Le kram, Tunis-TUNISIE <br />
                            Horaires : Lundi – Vendredi | 8h00 – 17h00
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
