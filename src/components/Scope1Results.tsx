import total from "@/utils/totalEmission";
import ResultRow from "./ResultRow";
import DonutChart from "./Donut";
import partitions from "@/utils/partitions";
import Link from "next/link";

export default function Scope1Results({ data }: { data: any }) {
    return (
        <div style={{ backgroundImage: "url('/images/3.jpg')", backgroundSize: 'cover' }}>
        <div className="flex flex-col items-center justify-center w-full h-screen bg-white/60 font-bold">
            <p className="text-3xl font-bold text-green-900">Resultat de calcul du Scope 1</p>
            <div className="flex items-center justify-center gap-5 p-5">
                <div className="flex flex-col gap-5 p-5">
                    <p className="">Emission carburant: essence</p>
                    <p className="">Emission carburant: gazoil</p>
                    <p className="">
                        Emission carburant: groupe electrogene gazoil
                    </p>
                    <p className="">Emission carburant minibus</p>
                    <p className="">
                        Fluide frigorigene libere R410-A : Pompe a chaleur
                        reversible
                    </p>
                    <p className="">
                        Fluide frigorigene libere R410-A : climatiseur
                    </p>
                    <p className="">
                        Fluide frigorigene libere R22 : climatiseur
                    </p>
                </div>

                <ResultRow data={data.tunis} scope={1} />
                <ResultRow data={data.sfax} scope={1} />
                <ResultRow data={data.sousse} scope={1} />
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
                            {total(data.tunis, 1)} /kgCO2e
                        </p>
                        <p className="p-5 border w-48 text-center">
                            {total(data.sousse, 1)} /kgCO2e
                        </p>
                        <p className="p-5 border w-48 text-center">
                            {total(data.sfax, 1)} /kgCO2e
                        </p>
                    </div>
                </div>
                <div className="p-5">
                    <DonutChart
                        fractions={partitions(
                            total(data.tunis, 1),
                            total(data.sousse, 1),
                            total(data.sfax, 1)
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
