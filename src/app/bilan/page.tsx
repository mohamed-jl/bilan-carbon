"use client";

import { useRef } from "react";

import DonutChart from "@/components/Donut";
import Navbar from "@/components/Navbar";
import ResultDetails from "@/components/ResultDetails";
import TableFinaleRes from "@/components/TableFinaleRes";
import useData from "@/utils/data";
import partitions from "@/utils/partitions";

export default function ExportablePage() {
    const { scopes } = useData();
    const contentRef = useRef<HTMLDivElement>(null);

    const { scope1, scope2, scope3 } = scopes || {
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
            }}>
            <Navbar />

            {/* PDF CONTENT START */}
            <div ref={contentRef} className='flex flex-col items-center bg-white/65 h-fit'>
                <p className='text-center text-5xl font-bold m-6'>Bilan Carbone de la société Technique Inspection et Contrôle</p>
                <p className='p-6 text-gray-800 text-lg'>Le bilan carbone global de la société echnique Inspection et Contrôle permet de visualiser la répartition des émissions...</p>

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
                    <p className='text-center text-4xl p-3 mt-8 font-bold'>Résultat du bilan carbone de la société TIC</p>
                    <div className='flex flex-row items-center gap-5 mt-4'>
                        <div className='flex flex-col items-center gap-5'>
                            <p className='p-6 text-gray-800 w-150 text-center text-3xl'>
                                L'émission totale est de{" "}
                                {total(scope1.data.tunis) +
                                    total(scope2.data.tunis) +
                                    total(scope3.data.tunis) +
                                    total(scope1.data.sfax) +
                                    total(scope2.data.sfax) +
                                    total(scope3.data.sfax) +
                                    total(scope1.data.sousse) +
                                    total(scope2.data.sousse) +
                                    total(scope3.data.sousse)}{" "}
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
            </div>
            {/* PDF CONTENT END */}

            {/* Export Button */}
            <div className='flex justify-center p-8'>
                <button onClick={() => {
                    
                    window.print();
                    
                }} className='px-6 py-3 bg-green-700 text-white font-semibold rounded hover:bg-green-800 transition'>
                    Exporter
                </button>
            </div>
        </div>
    );
}
