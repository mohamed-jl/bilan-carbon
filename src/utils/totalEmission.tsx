import { scope1Factors, scope2Factors, scope3Factors } from "../constants/factors";

export default function total(data: any, scope: number) {
    const results =
        scope === 1
            ? data.map((val: number, index: number) => val * scope1Factors[index])
            : scope === 2
            ? data.map((val: number, index: number) => val * scope2Factors[index])
            : data.map((val: number, index: number) => val * scope3Factors[index]);
    let x = results.reduce((acc: number, val: number) => acc + val, 0);
    return parseFloat(x.toFixed(2));
}
