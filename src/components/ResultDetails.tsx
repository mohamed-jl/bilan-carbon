'use client';
import React from "react";

export default function ({sum}:{sum: number}) {


    const [selected, setSelected] = React.useState(0);

    const texts = [
        'Si le total est inférieur à 500 tCO₂e, le bilan carbone est considérée comme faible. Cela reflète une activité maîtrisée avec un impact limité sur le climat, grâce à des pratiques sobres et responsables.',
        'Si le résultat est compris entre 500 et 3000 tCO₂e, le bilan est notable. Ce niveau indique une influence significative sur l’environnement, appelant à des actions ciblées pour réduire les émissions, notamment sur les postes les plus émetteurs.',
        'Si le bilan dépasse 3000 tCO₂e, le bilan est jugée très importante. Dans ce cas, il est nécessaire de mettre en place une stratégie ambitieuse de réduction des émissions, en repensant les sources d’énergie, les processus et la chaîne de valeur.'
    ]

    return (
        <div className="flex w-120 h-100 m-2 ">
            <div className="flex flex-col w-60 h-80">
                <p className="h-1/3 text-center bg-green-500 text-white cursor-pointer flex items-center justify-center" onClick={()=>setSelected(0)}>Qc {'<'} 500</p>
                <p className="h-1/3 text-center bg-lime-200 cursor-pointer flex items-center justify-center" onClick={()=>setSelected(1)}>500 {'≤'} Qc {'<'} 3000</p>
                <p className="h-1/3 text-center bg-red-500 text-white cursor-pointer flex items-center justify-center" onClick={()=>setSelected(2)}>Qc {'≥'} 3000</p>
            </div>
            <div className={` bg-${selected === 0 ? 'green-500 text-white' : selected === 1 ? 'lime-200 items-center' : 'red-500 text-white items-end'} w-full h-80 flex p-6 text-lg text-gray-800`}>
                {texts[selected]}
            </div>
        </div>
    );

}