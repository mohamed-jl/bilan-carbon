import {
    scope1Factors,
    scope2Factors,
    scope3Factors,
} from "@/constants/factors";

export default function ResultRow({ data, scope, city }: { data: any; scope: number, city: string }) {
    const results =
        scope === 1
            ? data.map(
                  (val: number, index: number) => val * scope1Factors[index]
              )
            : scope === 2
            ? data.map(
                  (val: number, index: number) => val * scope2Factors[index]
              )
            : data.map(
                  (val: number, index: number) => val * scope3Factors[index]
              );
    return (
        <div className="flex flex-col items-centre gap-5 p-5">
            <p className="text-gray-900 text-center">Quantité d'émission <br /> en KgCO₂e - {city}</p>
            {results.map((val: number, index: number) => (
                <p className="text-gray-700 text-center" key={index}>{val.toFixed(2)}</p>
            ))}
        </div>
    );
}
