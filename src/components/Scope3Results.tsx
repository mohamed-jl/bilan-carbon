import ResultRow from "./ResultRow";
import total from "@/utils/totalEmission";
import partitions from "@/utils/partitions";
import DonutChart from "./Donut";
import Link from "next/link";

export default function Scope3Results({ data }: { data: any }) {
    return (
        <div style={{ backgroundImage: "url('/images/3.jpg')", backgroundSize: 'cover' }}>
        <div className="flex flex-col items-center justify-center w-full h-fit bg-white/50 font-bold">
            <p className="text-3xl font-bold text-green-900">
                Resultat de calcul du Scope 3
            </p>
            <div className="flex  items-center justify-center gap-5 p-5">
                <div className="flex flex-col gap-5 p-5">
                    <p>Transport par avion</p>
                    <p>Transport en commun : Bus loué par TIC</p>
                    <p>
                        Voitures personnels : gazoil (trajet domicile travail)
                    </p>
                    <p>
                        Voitures personnels : essence (trajet domicile travail)
                    </p>
                    <p>Repas interne carnes (Événementiel)</p>
                    <p>Repas externe carnes</p>
                    <p>Ordures ménagères</p>
                    <p>Bouteilles en plastique</p>
                    <p>Papier et carton</p>
                    <p>Éprouvettes en métaux</p>
                    <p>Pneus usés</p>
                    <p>Sources scellées usées</p>
                    <p>Déchets électroniques et informatiques</p>
                    <p>Films radiographiques</p>
                    <p>Pochettes films avec écran en plomb</p>
                    <p>Liquides de bains de révélateur et de fixateur</p>
                    <p>Chiffons souillés absorbants</p>
                    <p>Gants usés</p>
                    <p>Filtres contaminés</p>
                    <p>Papier abrasif et draps de polissage</p>
                    <p>Replist</p>
                    <p>Bombe aérosol</p>
                    <p>Tubes fluorescents et lampes à décharge</p>
                    <p>Cartouches d'imprimante et déchets de toner</p>
                    <p>Piles</p>
                    <p>Accumulateurs</p>
                    <p>Batteries voitures plomb</p>
                    <p>Bavettes</p>
                </div>

                <ResultRow data={data.tunis} scope={3} />
                <ResultRow data={data.sfax} scope={3} />
                <ResultRow data={data.sousse} scope={3} />
            </div>
            <div className="flex">
                <div className="flex flex-col items-center justify-center p-5">
                    <div className="flex">
                        <p className="p-5 border w-48 text-center">Emission TIC Tunis</p>
                        <p className="p-5 border w-48 text-center">Emission TIC sousse</p>
                        <p className="p-5 border w-48 text-center">Emission TIC sfax</p>
                    </div>
                    <div className="flex">
                        <p className="p-5 border w-48 text-center">
                            {total(data.tunis, 3)} /kgCO2e
                        </p>
                        <p className="p-5 border w-48 text-center">
                            {total(data.sousse, 3)} /kgCO2e
                        </p>
                        <p className="p-5 border w-48 text-center">
                            {total(data.sfax, 3)} /kgCO2e
                        </p>
                    </div>
                </div>
                <div className="p-5">
                    <DonutChart
                        fractions={partitions(
                            total(data.tunis, 3),
                            total(data.sousse, 3),
                            total(data.sfax, 3)
                        )}
                    />
                </div>
            </div>
            <Link href={"/bilan"} className="text-center self-center p-3 bg-green-900 text-white rounded-lg">
                passer au resume
            </Link>
        </div>
        </div>
    );
}
