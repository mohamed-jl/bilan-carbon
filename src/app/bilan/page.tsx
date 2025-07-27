"use client";

import DonutChart from "@/components/Donut";
import TableFinaleRes from "@/components/TableFinaleRes";
import useData from "@/utils/data";
import partitions from "@/utils/partitions";

export default function () {
    const { scopes } = useData();
    const { scope1, scope2, scope3 } = scopes || {
        scope1: { data: { tunis: [], sfax: [], sousse: [] }, isDone: false },
        scope2: { data: { tunis: [], sfax: [], sousse: [] }, isDone: false },
        scope3: { data: { tunis: [], sfax: [], sousse: [] }, isDone: false },
    };

    const total = (arr: any) => (Array.isArray(arr) ? arr.reduce((acc: number, val: number) => acc + Number(val || 0), 0) : 0);

    return (
        <div style={{backgroundImage: "url('/images/1.jpg')", backgroundSize: 'cover'}}>
        <div className="flex flex-col items-center bg-white/50 h-screen font-bold" >
            <p className="text-green-900 text-center text-5xl font-bold m-6">
                Bilan Carbone TIC
            </p>
            <div className="flex gap-1 items-center">
                <TableFinaleRes />
                <div>
                    <p className="text-center text-green-800 text-2xl p-3">
                        scope 1
                    </p>
                    <DonutChart
                        fractions={partitions(
                            total(scope1.data.tunis),
                            total(scope1.data.sfax),
                            total(scope1.data.sousse)
                        )}
                    />
                </div>
                <div>
                    <p className="text-center text-green-800 text-2xl p-3">
                        scope 2
                    </p>
                    <DonutChart
                        fractions={partitions(
                            total(scope2.data.tunis),
                            total(scope2.data.sfax),
                            total(scope2.data.sousse)
                        )}
                    />
                </div>
                <div>
                    <p className="text-center text-green-800 text-2xl p-3">
                        scope 3
                    </p>
                    <DonutChart
                        fractions={partitions(
                            total(scope3.data.tunis),
                            total(scope3.data.sfax),
                            total(scope3.data.sousse)
                        )}
                    />
                </div>
            </div>
            <div className="flex">
                <DonutChart
                    fractions={partitions(
                        total(scope1.data.tunis) + total(scope2.data.tunis) + total(scope3.data.tunis),
                        total(scope1.data.sfax) + total(scope2.data.sfax) + total(scope3.data.sfax),
                        total(scope1.data.sousse) + total(scope2.data.sousse) + total(scope3.data.sousse)
                    )}
                />
            </div>
        </div>
        </div>
    );
}
