import {
    scope1Factors,
    scope2Factors,
    scope3Factors,
} from "@/constants/factors";

export default function ResultRow({ data, scope }: { data: any; scope: number }) {
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
            {results.map((val: number, index: number) => (
                <p className="text-gray-700" key={index}>{val}</p>
            ))}
        </div>
    );
}
