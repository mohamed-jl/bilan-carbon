"use client";

import { useState, ChangeEvent } from "react";
import Link from "next/link";
import Scope1Results from "@/components/Scope1Results";

type InputArray = string[];
type SetInputArray = React.Dispatch<React.SetStateAction<InputArray>>;

export default function Scope1() {
    const [tunisInputs, setTunisInputs] = useState<InputArray>(
        Array(7).fill("")
    );
    const [sfaxInputs, setSfaxInputs] = useState<InputArray>(Array(7).fill(""));
    const [sousseInputs, setSousseInputs] = useState<InputArray>(
        Array(7).fill("")
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
                        / {index > 3 ? "Kg" : "L"}
                    </span>
                </div>
            ))}
        </div>
    );

    return (
        <>
            {showResults ? (
                <Scope1Results
                    data={{
                        tunis: tunisInputs,
                        sfax: sfaxInputs,
                        sousse: sousseInputs,
                    }}
                />
            ) : (
                <div>
                    <div className="w-full h-screen flex flex-col justify-start items-center gap-8">
                        <Link href="/form" className="self-start p-2">
                            return to scopes
                        </Link>
                        <p className="text-5xl">Scope 1</p>
                        <div className="w-full h-fit flex justify-center items-center">
                            <div className="w-fit h-fit flex flex-col items-start p-5 gap-5">
                                <p className="text-white">....</p>
                                <p>Consommation carburant: essence</p>
                                <p>Consommation carburant: gazoil</p>
                                <p>
                                    Consommation carburant: groupe electrogene
                                    gazoil
                                </p>
                                <p>Consommation carburant minibus</p>
                                <p>
                                    Fluide frigorigene libere R410-A : Pompe a
                                    chaleur reversible
                                </p>
                                <p>
                                    Fluide frigorigene libere R410-A :
                                    climatiseur
                                </p>
                                <p>
                                    Fluide frigorigene libere R22 : climatiseur
                                </p>
                            </div>

                            {renderInputs("Tunis", tunisInputs, setTunisInputs)}
                            {renderInputs("Sfax", sfaxInputs, setSfaxInputs)}
                            {renderInputs(
                                "Sousse",
                                sousseInputs,
                                setSousseInputs
                            )}
                        </div>

                        <button
                            onClick={handleCalculate}
                            className="bg-green-900 text-white w-36 h-12 text-2xl rounded-lg">
                            Calculer
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
