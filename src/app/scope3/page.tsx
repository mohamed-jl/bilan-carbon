"use client";

import { useState, ChangeEvent } from "react";
import Link from "next/link";
import Scope3Results from "@/components/Scope3Results";
import useData from "@/utils/data";
import Navbar from "@/components/Navbar";

type InputArray = string[];
type SetInputArray = React.Dispatch<React.SetStateAction<InputArray>>;

const getUnit = (index: number): string => {
    if (index === 0) return "km";
    if (index === 1) return "empl";
    if ([2, 3].includes(index)) return "L";
    if ([4, 5].includes(index)) return "repas";
    if ([6, 7, 8, 12].includes(index)) return "Kg";
    if ([9, 10, 13, 21, 22, 23, 24, 25, 26].includes(index)) return "unite";
    if ([11, 14, 16, 17, 18, 19, 20].includes(index)) return "-";
    if (index === 15) return "L";
    return "kg";
};

export default function Scope3() {
    const { setScope3 } = useData();

    const [tunisInputs, setTunisInputs] = useState<InputArray>(Array(28).fill(""));
    const [sfaxInputs, setSfaxInputs] = useState<InputArray>(Array(28).fill(""));
    const [sousseInputs, setSousseInputs] = useState<InputArray>(Array(28).fill(""));

    const [showResults, setShowResults] = useState(false);

    const handleInputChange = (setter: SetInputArray, index: number, value: string) => {
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
        setScope3(data);
    };

    const renderInputs = (city: string, values: InputArray, setter: SetInputArray) => (
        <div className='w-fit h-fit flex flex-col items-center p-5 gap-5'>
            <p className='text-center font-bold'>données de TIC {city}</p>
            {values.map((val, index) => (
                <div key={index} className='flex items-center gap-2 relative'>
                    <input type='number' value={val} onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(setter, index, e.target.value)} className='bg-gray-300 placeholder-gray-500' />
                    <span className='text-gray-500 absolute right-1 top'>{getUnit(index)}</span>
                </div>
            ))}
        </div>
    );

    return (
        <>
        <Navbar />
            {showResults ? (
                <Scope3Results
                    data={{
                        tunis: tunisInputs,
                        sfax: sfaxInputs,
                        sousse: sousseInputs,
                    }}
                />
            ) : (
                <div style={{ backgroundImage: "url('/images/2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} className="remove-bg">
                    <div className='w-full h-fit flex flex-col justify-start items-center gap-8 bg-white/50'>
                        <Link href='/form' className='self-start p-2'>
                            return to scopes
                        </Link>
                        <p className='text-5xl'>Veuillez saisir les données liées au scope 3</p>
                        <div className='w-full h-fit flex justify-center items-center'>
                            <div className='w-fit h-fit flex flex-col items-start p-5 gap-5 font-bold'>
                                <p className='text-white'>....</p>
                                <p>Transport par avion</p>
                                <p>Transport en commun : Bus loué par TIC</p>
                                <p>Voitures personnels : gazoil (trajet domicile travail)</p>
                                <p>Voitures personnels : essence (trajet domicile travail)</p>
                                <p>Repas interne carnes (Événementiel)</p>
                                <p>Repas externe carnes</p>
                                <p>Ordures ménagères</p>
                                <p>Bouteilles en plastique</p>
                                <p>Papier et carton</p>
                                <p>Éprouvettes en métaux</p>
                                <p>Pneus usés</p>
                                <p>Sources scellées usées</p>
                                <p>Déchets électroniques et informatiques</p>
                                <p>Films radiographiques</p>
                                <p>Pochettes films avec écran en plomb</p>
                                <p>Liquides de bains de révélateur et de fixateur</p>
                                <p>Chiffons souillés absorbants</p>
                                <p>Gants usés</p>
                                <p>Filtres contaminés</p>
                                <p>Papier abrasif et draps de polissage</p>
                                <p>Replist</p>
                                <p>Bombe aérosol</p>
                                <p>Tubes fluorescents et lampes à décharge</p>
                                <p>Cartouches d'imprimante et déchets de toner</p>
                                <p>Piles</p>
                                <p>Accumulateurs</p>
                                <p>Batteries voitures plomb</p>
                                <p>Bavettes</p>
                            </div>

                            {renderInputs("Tunis", tunisInputs, setTunisInputs)}
                            {renderInputs("Sfax", sfaxInputs, setSfaxInputs)}
                            {renderInputs("Sousse", sousseInputs, setSousseInputs)}
                        </div>

                        <button onClick={handleCalculate} className='bg-green-900 text-white w-36 h-12 text-2xl rounded-lg no-print'>
                            Calculer
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
