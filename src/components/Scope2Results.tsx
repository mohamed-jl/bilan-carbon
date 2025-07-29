import ResultRow from "./ResultRow";
import total from "@/utils/totalEmission";
import partitions from "@/utils/partitions";
import DonutChart from "./Donut";
import Link from "next/link";

export default function Scope2Results({ data }: { data: any }) {
    return (
        <div style={{ backgroundImage: "url('/images/3.jpg')", backgroundSize: 'cover' }}>
        <div className="flex flex-col items-center justify-center w-full h-screen bg-white/50 font-bold">
            <p className="text-3xl font-bold text-green-900">
                Resultat de calcul du Scope 2
            </p>
            <div className="flex  items-center justify-center gap-5 p-5">
                <div className="flex flex-col gap-5 p-5">
                                            <p className="h-12 flex items-center">Categorie </p>

                    <p>Consommation d'electricite entreprise</p>
                    <p>Consommation d'electricite maison TIC</p>
                    <p>Consommation d'eau entreprise</p>
                    <p>Consommation d'eau maison TIC</p>
                </div>

                <ResultRow data={data.tunis} scope={2} city='Tunis'/>
                <ResultRow data={data.sfax} scope={2} city='Sfax'/>
                <ResultRow data={data.sousse} scope={2} city='Sousse'/>
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
                            {(total(data.tunis, 2).toFixed(2))} kgCO2e
                        </p>
                        <p className="p-5 border w-48 text-center">
                            {(total(data.sousse, 2).toFixed(2))} kgCO2e
                        </p>
                        <p className="p-5 border w-48 text-center">
                            {(total(data.sfax, 2))} kgCO2e
                        </p>
                    </div>
                </div>
                <div className="p-5">
                    <DonutChart
                        fractions={partitions(
                            total(data.tunis, 2),
                            total(data.sfax, 2),
                            total(data.sousse, 2),
                        )}
                    />
                </div>
            </div>
            <Link href={"/form"} className="text-center self-center p-3 bg-green-900 text-white rounded-lg">
                continuer le calcule
            </Link>
        </div>
        </div>
    );
}
