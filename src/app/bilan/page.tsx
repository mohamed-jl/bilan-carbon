"use client";

import { useRef } from "react";

import DonutChart from "@/components/Donut";
import Navbar from "@/components/Navbar";
import ResultDetails from "@/components/ResultDetails";
import TableFinaleRes from "@/components/TableFinaleRes";
import useData from "@/utils/data";
import partitions from "@/utils/partitions";

export default function ExportablePage() {
    const { scopes, results } = useData();
    const contentRef = useRef<HTMLDivElement>(null);

    const { scope1, scope2, scope3 } = results || {
        scope1: { data: { tunis: [], sfax: [], sousse: [] }, isDone: false },
        scope2: { data: { tunis: [], sfax: [], sousse: [] }, isDone: false },
        scope3: { data: { tunis: [], sfax: [], sousse: [] }, isDone: false },
    };

    const total = (arr: any) => (Array.isArray(arr) ? arr.reduce((acc: number, val: number) => acc + Number(val || 0), 0) : 0);

    return (
        <div
            style={{
                backgroundImage: "url('/images/6.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} className="remove-bg">
            <Navbar />

            {/* PDF CONTENT START */}
            <div ref={contentRef} className='flex flex-col items-center bg-white/65 h-fit'>
                <p className='text-center text-5xl font-bold m-6'>Bilan Carbone de la société Technique Inspection et Contrôle</p>
                <p className='p-6 text-gray-800 text-lg'>
                    Le bilan carbone global de l’entreprise TIC Tunisie permet de visualiser la répartition des émissions de gaz à effet de serre entre les trois catégories définies par la
                    méthodologie internationale. Le Scope 1 représente les émissions directes, issues des sources que l’entreprise contrôle directement, telles que la combustion de carburants ou les
                    gaz industriels. Le Scope 2 regroupe les émissions indirectes liées à l’énergie achetée, notamment la consommation d’électricité, de chaleur, de froid ou d’eau fournis par des
                    tiers. Enfin, le Scope 3 couvre les autres émissions indirectes générées tout au long de la chaîne de valeur, en amont comme en aval : achats, transport, déplacements
                    professionnels, gestion des déchets, etc.
                </p>

                <div className='flex gap-20 items-center font-bold'>
                    <div>
                        <p className='text-center text-2xl p-3'>Résultat du scope 1</p>
                        <DonutChart fractions={partitions(total(scope1.data.tunis), total(scope1.data.sfax), total(scope1.data.sousse))} />
                    </div>
                    <div>
                        <p className='text-center text-2xl p-3'>Résultat du scope 2</p>
                        <DonutChart fractions={partitions(total(scope2.data.tunis), total(scope2.data.sfax), total(scope2.data.sousse))} />
                    </div>
                    <div>
                        <p className='text-center text-2xl p-3'>Résultat du scope 3</p>
                        <DonutChart fractions={partitions(total(scope3.data.tunis), total(scope3.data.sfax), total(scope3.data.sousse))} />
                    </div>
                </div>

                <TableFinaleRes />

                <div>
                    <div className='flex flex-row items-center gap-5 mt-4'>
                        <div className='flex flex-col items-center gap-5'>
                            <p className='p-6 text-gray-800 w-150 text-center text-3xl'>
                                L'émission totale est de{" "}
                                {(total(scope1.data.tunis) +
                                    total(scope2.data.tunis) +
                                    total(scope3.data.tunis) +
                                    total(scope1.data.sfax) +
                                    total(scope2.data.sfax) +
                                    total(scope3.data.sfax) +
                                    total(scope1.data.sousse) +
                                    total(scope2.data.sousse) +
                                    total(scope3.data.sousse))/1000}{" "}
                                tCO₂e
                            </p>
                            <DonutChart
                                fractions={partitions(
                                    total(scope1.data.tunis) + total(scope2.data.tunis) + total(scope3.data.tunis),
                                    total(scope1.data.sfax) + total(scope2.data.sfax) + total(scope3.data.sfax),
                                    total(scope1.data.sousse) + total(scope2.data.sousse) + total(scope3.data.sousse)
                                )}
                            />
                        </div>
                        <ResultDetails
                            sum={
                                total(scope1.data.tunis) +
                                total(scope2.data.tunis) +
                                total(scope3.data.tunis) +
                                total(scope1.data.sfax) +
                                total(scope2.data.sfax) +
                                total(scope3.data.sfax) +
                                total(scope1.data.sousse) +
                                total(scope2.data.sousse) +
                                total(scope3.data.sousse)
                            }
                        />
                    </div>
                </div>
                <div className='flex justify-center p-8 no-print'>
                    <button
                        onClick={() => {
                            window.print();
                        }}
                        className='px-6 py-3 bg-green-700 text-white font-semibold rounded hover:bg-green-800 transition'>
                        Exporter
                    </button>
                </div>
            </div>
            {/* PDF CONTENT END */}

            {/* Export Button */}
        </div>
    );
}
