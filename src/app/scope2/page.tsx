"use client";

import { useState, ChangeEvent } from "react";
import Link from "next/link";
import Scope2Results from "@/components/Scope2Results";
import useData from "@/utils/data";

type InputArray = string[];
type SetInputArray = React.Dispatch<React.SetStateAction<InputArray>>;

export default function Scope2() {

    const {setScope2} = useData()

    const [tunisInputs, setTunisInputs] = useState<InputArray>(
        Array(4).fill("")
    );
    const [sfaxInputs, setSfaxInputs] = useState<InputArray>(Array(4).fill(""));
    const [sousseInputs, setSousseInputs] = useState<InputArray>(
        Array(4).fill("")
    );

    const [showResults, setShowResults] = useState(false);

    const handleInputChange = (
        setter: SetInputArray,
        index: number,
        value: string
    ) => {
        setter((prev) => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    };

    const handleCalculate = () => {
       setShowResults(true);
       const data = {
            tunis: tunisInputs,
            sfax: sfaxInputs,
            sousse: sousseInputs,
        };
        setScope2(data); 
    };

    const renderInputs = (
        city: string,
        values: InputArray,
        setter: SetInputArray
    ) => (
        <div className="w-fit h-fit flex flex-col items-start p-5 gap-5">
            <p>{city}</p>
            {values.map((val, index) => (
                <div key={index} className="flex items-center gap-2 relative">
                    <input
                        type="number"
                        value={val}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(setter, index, e.target.value)
                        }
                        className="bg-gray-300 placeholder-gray-500"
                    />
                    <span className="text-gray-500 absolute right-1 top">
                         {index > 1 ? "m3" : "KWh"}
                    </span>
                </div>
            ))}
        </div>
    );

    return (
        <>
            {
                showResults ? (<>
                    <Scope2Results
                        data={{
                            tunis: tunisInputs,
                            sfax: sfaxInputs,
                            sousse: sousseInputs,
                        }} />
                </>):(
                <div className="w-full h-screen flex flex-col justify-start items-center gap-8">
                    <Link href="/form" className="self-start p-2">
                        return to scopes
                    </Link>
                    <p className="text-5xl">Scope 2</p>
                    <div className="w-full h-fit flex justify-center items-center">
                        <div className="w-fit h-fit flex flex-col items-start p-5 gap-5">
                            <p className="text-white">....</p>
                            <p>Consommation d'electricite entreprise</p>
                            <p>Consommation d'electricite maison TIC</p>
                            <p>Consommation d'eau entreprise</p>
                            <p>Consommation d'eau maison TIC</p>
                        </div>

                        {renderInputs("Tunis", tunisInputs, setTunisInputs)}
                        {renderInputs("Sfax", sfaxInputs, setSfaxInputs)}
                        {renderInputs("Sousse", sousseInputs, setSousseInputs)}
                    </div>

                    <button
                        onClick={handleCalculate}
                        className="bg-green-900 text-white w-36 h-12 text-2xl rounded-lg">
                        Calculer
                    </button>
                </div>)
            }
        </>
    );
}
