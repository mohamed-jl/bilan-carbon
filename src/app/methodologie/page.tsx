import Navbar from "@/components/Navbar";

export default function Methodologie() {
    return (
        <div  style={{backgroundImage: "url('/images/7.jpg')", backgroundSize: 'cover'}}>
            <Navbar />
            <main className='w-full mx-auto p-6 text-gray-800 bg-white/60'>
                <h1 className='text-5xl font-semibold text-center mb-2'>Notre méthodologie de calcul du bilan carbone</h1>
                <p className='text-2xl text-center text-gray-600 mb-6'>
                    Pour garantir la fiabilité de notre bilan carbone, nous utilisons une méthode rigoureuse et reconnue, conforme aux normes et principes internationaux.
                </p>

                <div className='justify-center items-center gap-4 text-lg flex flex-col text-gray-700 mb-10'>
                    <div className='flex items-center gap-2'>
                        <i className='fa-solid fa-check-circle text-green-600'></i>
                        La méthode Bilan Carbone®  et les principes du GHG Protocol & ADEME
                    </div>
                    <div className='flex items-center gap-2'>
                        <i className='fa-solid fa-check-circle text-green-600'></i>
                        ISO 14064-1 & Amendement 1 des normes ISO
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-10'>
                    <div className='p-4 border rounded-md shadow'>
                        <i className='fa-solid fa-bullseye text-5xl mb-2 text-gray-600'></i>
                        <h3 className='font-semibold mb-1 text-2xl'>Définition du périmètre à comptabiliser</h3>
                        <p className=' text-gray-600 text-lg'>L’organisation réalise une cartographie des flux d’énergie, de matières premières, de déchets et de produits entrant et sortant à prendre en compte pour la comptabilisation des émissions. Le périmètre organisationnel correspond à l’ensemble des sites, installations de l’organisation à prendre en compte. Le périmètre opérationnel correspond à l’ensemble des émissions générées par l’activité de l’organisation et qui seront comptabilisées (émissions directes ou indirectes). Le périmètre temporel d’un Bilan Carbone® est le pas de temps observé, classiquement d’un an, afin de refléter au mieux l’activité de l’organisation dans sa globalité. Un Bilan Carbone® peut aussi couvrir une période particulière : l’analyse portera alors sur la durée d’un évènement ou d’un projet, afin d’apporter une aide à la décision. </p>
                    </div>

                    <div className='p-4 border rounded-md shadow'>
                        <i className='fa-solid fa-database text-5xl mb-2 text-gray-600'></i>
                        <h3 className='font-semibold mb-1 text-2xl'>Collecte des données</h3>
                        <p className=' text-gray-600 text-lg'>Le pilote du Bilan Carbone® recense l’ensemble des données, internes ou externes à l’organisation, nécessaires au calcul des émissions sur les périmètres déterminés. Aller plus loin : définir un processus de collecte périodique afin de faciliter le renouvellement des calculs et ainsi le suivi des actions de réduction ; Aller plus loin : quantifier la cartographie des flux grâce aux données d’activité collectées ; Les données sont converties en tonnes équivalent de CO2.  </p>
                    </div>

                    <div className='p-4 border rounded-md shadow'>
                        <i className='fa-solid fa-calculator text-5xl mb-2 text-gray-600'></i>
                        <h3 className='font-semibold mb-1 text-2xl'>Application des facteurs d’émission et calcul du bilan carbone</h3>
                        <p className=' text-gray-600 text-lg'>Facteurs basés sur des sources officielles : Base Carbone®, GHG Protocol, DEFRA, EPA. Les émissions sont calculées et réparties entre les différents postes. Une première analyse permet de mettre en évidence les postes d’émission sur lesquels il est urgent d’agir. Si l’organisation renouvelle sa démarche, l’analyse inclut une comparaison avec l’exercice précédent. Aller plus loin : détermination des risques et opportunités vis-à-vis des enjeux suivants, selon les besoins et volontés de l’organisation : dépendance énergétique ; anticipation d’une taxe carbone ; enjeux d’image, etc ; Une première phase de restitution auprès des comités techniques puis auprès du comité de direction permet de revenir sur la démarche Bilan Carbone®, de présenter les premiers chiffres et les postes d’émissions à enjeux pour l’organisation.</p>
                    </div>

                    <div className='p-4 border rounded-md shadow'>
                        <i className='fa-solid fa-chart-bar text-5xl mb-2 text-gray-600'></i>
                        <h3 className='font-semibold mb-1 text-2xl'>Synthèse du Bilan Carbone® </h3>
                        <p className=' text-gray-600 text-lg'> Le résultat d’un Bilan Carbone® est la quantification des émissions de GES de l’organisation, réparties par catégorie d’émission dans les périmètres considérés, ainsi qu’au moins un plan d’actions proposé en cohérence, et les indicateurs de suivi associés. Le plan d’actions issu du Bilan Carbone® comprend au minimum une action d’amélioration de la démarche. Actions de sensibilisation : Ce sont des actions à réaliser au fur et à mesure du projet, et en particulier lors de l’étape 1 et 3. Ces actions pourront être intégrées dans le plan d’actions à l’issue du Bilan Carbone® et ainsi faciliter la mise en œuvre des actions de réduction. En plusieurs temps : 
<br />1) Sensibilisation en continue des parties prenantes internes (vulgarisation des enjeux de la transition énergie-climat pour favoriser le passage à l’action) ; 
<br />2) Étape 1 : sensibilisation du pilote et des équipes techniques vis-à-vis de la démarche Bilan Carbone® ; 
<br />3) Étape 3 : sensibilisation des référents dans les divers services puis de la direction.</p>
                    </div>
                </div>

                
            </main>
        </div>
    );
}
