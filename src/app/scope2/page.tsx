import Link from "next/link";

export default function Scope2() {
    return (
        <div className="w-full h-screen flex flex-col justify-start items-center gap-8 ">
            <Link href='/form' className="self-start p-2">return to scopes</Link>
            <p className="text-5xl ">Scope 2</p>
            <div className="w-full h-fit flex justify-center items-center">
                <div className="w-fit h-fit flex flex-col items-start p-5 gap-5">
                    <p className="text-white">....</p>
                    <p>Consommation d'electricite entreprise </p>
                    <p>Consommation d'electricite maison TIC </p>
                    <p>Consommation d'eau entreprise </p>
                    <p>Consommation d'eau maison TIC </p>
                    
                </div>
                <div className="w-fit h-fit flex flex-col items-start p-5 gap-5">
                    <p>Tunis</p>
                    {Array(4)
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
                                    / {index > 1 ? "m3" : "KWh"}
                                </span>
                            </div>
                        ))}
                </div>
                <div className="w-fit h-fit flex flex-col items-start p-5 gap-5">
                    <p>Sfax</p>
                    {Array(4)
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
                                    / {index > 1 ? "m3" : "KWh"}
                                </span>
                            </div>
                        ))}
                </div>
                <div className="w-fit h-fit flex flex-col items-centre p-5 gap-5">
                    <p>sousse</p>
                    {Array(4)
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
                                    / {index > 1 ? "m3" : "KWh"}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
            <button className="bg-green-900 text-white w-36 h-12 text-2xl rounded-lg">Calculer</button>
        </div>
    );
}
