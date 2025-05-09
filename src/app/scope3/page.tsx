import Link from "next/link";

export default function Scope3() {
    return (
        <div className="w-full h-fit flex flex-col justify-start items-center gap-8 ">
            <Link href="/form" className="self-start p-2">
                return to scopes
            </Link>
            <p className="text-5xl ">Scope 3</p>
            <div className="w-full h-fit flex justify-center items-center">
                <div className="w-fit h-fit flex flex-col items-start p-5 gap-5">
                    <p className="text-white">....</p>
                    <p>Transport par avion </p>
                    <p>Transport en commun : Bus loue par TIC </p>
                    <p>Voitures personnels : gazoil(trajet domicil travail) </p>
                    <p>
                        Voitures personnels : essence(trajet domicil travail){" "}
                    </p>
                    <p>Repas interne carnes ( Evenementiel)</p>
                    <p>Repas externe carnes</p>
                    <p>Ordures menangeres</p>
                    <p>Bouteille en plastique</p>
                    <p>Papier et carton</p>
                    <p>Eprouvettes en metals</p>
                    <p>Pneu usee</p>
                    <p>Sources scellees usees</p>
                    <p>Dechets electroniques et informatiques</p>
                    <p>Films radiographiques</p>
                    <p>Pochettes films avec ecran en plomb</p>
                    <p>Liquide de bains de revelateur et de fixateur</p>
                    <p>Chiffons souilles absorbants</p>
                    <p>gants uses</p>
                    <p>filtre contamine</p>
                    <p>Papier abrasif et drap de polissage</p>
                    <p>Replist</p>
                    <p>Bombe aerosol</p>
                    <p>Tubes fluorescents et lampes a decharge</p>
                    <p>
                        Cartouche d'imprimante et dechets de toner d'impression
                    </p>
                    <p>Piles</p>
                    <p>Accumulateurs</p>
                    <p>Batteries voitures plomb</p>
                    <p>Bavettes</p>
                </div>
                <div className="w-fit h-fit flex flex-col items-start p-5 gap-5">
                    <p>Tunis</p>
                    {Array(28)
                        .fill(null)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 relative">
                                <input
                                    type="number"
                                    className="bg-gray-300 placeholder-gray-500"
                                />
                                <span className="text-gray-500 absolute right-1 top">
                                    {index == 0
                                        ? "km"
                                        : index == 1
                                        ? "empl"
                                        : index == 2 || index == 3
                                        ? "L"
                                        : index == 4 || index == 5
                                        ? "repas"
                                        : index == 6 || index == 7 || index == 8
                                        ? "Kg"
                                        : index == 9 || index == 10
                                        ? "unite"
                                        : index == 11
                                        ? "-"
                                        : index == 12
                                        ? "Kg"
                                        : index == 13
                                        ? "unite"
                                        : index == 14
                                        ? "-"
                                        : index == 15
                                        ? "L"
                                        : [16, 17, 18, 19, 20].includes(index)
                                        ? "-"
                                        : [21, 22, 23, 24, 25, 26].includes(
                                              index
                                          )
                                        ? "unite"
                                        : "kg"}
                                </span>
                            </div>
                        ))}
                </div>
                <div className="w-fit h-fit flex flex-col items-start p-5 gap-5">
                    <p>Sfax</p>
                    {Array(28)
                        .fill(null)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 relative">
                                <input
                                    type="number"
                                    className="bg-gray-300 placeholder-gray-500"
                                />
                                <span className="text-gray-500 absolute right-1 top">
                                    / {index == 0
                                        ? "km"
                                        : index == 1
                                        ? "empl"
                                        : index == 2 || index == 3
                                        ? "L"
                                        : index == 4 || index == 5
                                        ? "repas"
                                        : index == 6 || index == 7 || index == 8
                                        ? "Kg"
                                        : index == 9 || index == 10
                                        ? "unite"
                                        : index == 11
                                        ? "-"
                                        : index == 12
                                        ? "Kg"
                                        : index == 13
                                        ? "unite"
                                        : index == 14
                                        ? "-"
                                        : index == 15
                                        ? "L"
                                        : [16, 17, 18, 19, 20].includes(index)
                                        ? "-"
                                        : [21, 22, 23, 24, 25, 26].includes(
                                              index
                                          )
                                        ? "unite"
                                        : "kg"}
                                </span>
                            </div>
                        ))}
                </div>
                <div className="w-fit h-fit flex flex-col items-centre p-5 gap-5">
                    <p>sousse</p>
                    {Array(28)
                        .fill(null)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 relative">
                                <input
                                    type="number"
                                    className="bg-gray-300 placeholder-gray-500"
                                />
                                <span className="text-gray-500 absolute right-1 top">
                                    / {index == 0
                                        ? "km"
                                        : index == 1
                                        ? "empl"
                                        : index == 2 || index == 3
                                        ? "L"
                                        : index == 4 || index == 5
                                        ? "repas"
                                        : index == 6 || index == 7 || index == 8
                                        ? "Kg"
                                        : index == 9 || index == 10
                                        ? "unite"
                                        : index == 11
                                        ? "-"
                                        : index == 12
                                        ? "Kg"
                                        : index == 13
                                        ? "unite"
                                        : index == 14
                                        ? "-"
                                        : index == 15
                                        ? "L"
                                        : [16, 17, 18, 19, 20].includes(index)
                                        ? "-"
                                        : [21, 22, 23, 24, 25, 26].includes(
                                              index
                                          )
                                        ? "unite"
                                        : "kg"}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
            <button className="bg-green-900 text-white w-36 h-12 text-2xl rounded-lg">
                Calculer
            </button>
        </div>
    );
}
