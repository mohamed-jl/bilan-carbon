import Link from "next/link";

export default function Methodologie() {
    return (
        <>
            <Link href={'/'} className="p-3 text-blue-600">← return home</Link>
            <main className='w-full mx-auto p-6 text-gray-800'>
                <h1 className='text-5xl font-semibold text-center mb-2'>Notre méthodologie de calcul du bilan carbone</h1>
                <p className='text-2xl text-center text-gray-600 mb-6'>
                    Pour garantir la fiabilité de notre bilan carbone, nous utilisons une méthode rigoureuse et reconnue, conforme aux normes internationales.
                </p>

                <div className='justify-center items-center gap-4 text-lg flex flex-col text-gray-700 mb-10'>
                    <div className='flex items-center gap-2'>
                        <i className='fa-solid fa-check-circle text-green-600'></i>
                        Les principes du GHG Protocol
                    </div>
                    <div className='flex items-center gap-2'>
                        <i className='fa-solid fa-check-circle text-green-600'></i>
                        ISO 14064-1 & ISO 14001
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-10'>
                    <div className='p-4 border rounded-md shadow'>
                        <i className='fa-solid fa-bullseye text-5xl mb-2 text-gray-600'></i>
                        <h3 className='font-semibold mb-1 text-2xl'>Définition du périmètre</h3>
                        <p className=' text-gray-600 text-lg'>Référentiel gaz à effet de serre (GES), périmètre organisationnel, périmètre opérationnel, scopes.</p>
                    </div>

                    <div className='p-4 border rounded-md shadow'>
                        <i className='fa-solid fa-database text-5xl mb-2 text-gray-600'></i>
                        <h3 className='font-semibold mb-1 text-2xl'>Collecte des données</h3>
                        <p className=' text-gray-600 text-lg'>Activité, énergie, déchets, mobilité, fret… Données d’activité annuelles, consolidation.</p>
                    </div>

                    <div className='p-4 border rounded-md shadow'>
                        <i className='fa-solid fa-calculator text-5xl mb-2 text-gray-600'></i>
                        <h3 className='font-semibold mb-1 text-2xl'>Application des facteurs d’émission</h3>
                        <p className=' text-gray-600 text-lg'>Facteurs basés sur des sources officielles : Base Carbone®, GHG Protocol, DEFRA, EPA.</p>
                    </div>

                    <div className='p-4 border rounded-md shadow'>
                        <i className='fa-solid fa-chart-bar text-5xl mb-2 text-gray-600'></i>
                        <h3 className='font-semibold mb-1 text-2xl'>Analyse et visualisation</h3>
                        <p className=' text-gray-600 text-lg'>Calcul par scope et par poste, visualisation interactive, rapport personnalisé.</p>
                    </div>
                </div>

                <h2 className='text-lg font-semibold mb-4'>Normes et outils utilisés</h2>
                <table className='w-full text-left border-t border-gray-300'>
                    <thead>
                        <tr className='bg-gray-100 text-sm'>
                            <th className='p-2 font-medium'>Référence</th>
                            <th className='p-2 font-medium'>Description</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm text-gray-700'>
                        <tr className='border-t'>
                            <td className='p-2'>GHG Protocol</td>
                            <td className='p-2'>International framework pour calculer les émissions GES</td>
                        </tr>
                        <tr className='border-t'>
                            <td className='p-2'>ISO 14064-1</td>
                            <td className='p-2'>Spécifie les exigences pour les rapports</td>
                        </tr>
                        <tr className='border-t'>
                            <td className='p-2'>Base Carbone®</td>
                            <td className='p-2'>Facteurs officiels d’ADEME</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </>
    );
}
