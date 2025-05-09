import Link from "next/link";

export default function Scope1() {
    return (
        <div className="w-full h-screen flex flex-col justify-start items-center gap-8 ">
            <Link href='/form' className="self-start p-2">return to scopes</Link>
            <p className="text-5xl ">Scope 1</p>
            <div className="w-full h-fit flex justify-center items-center">
                <div className="w-fit h-fit flex flex-col items-start p-5 gap-5">
                    <p className="text-white">....</p>
                    <p>Consommation carburant: essence </p>
                    <p>Consommation carburant: gazoil </p>
                    <p>Consommation carburant: groupe electrogene gazoil </p>
                    <p>Consommation carburant minibus </p>
                    <p>
                        Fluide frigorigene libere R410-A : Pompe a chaleur
                        reversible{" "}
                    </p>
                    <p>Fluide frigorigene libere R410-A : climatiseur</p>
                    <p>Fluide frigorigene libere R22 : climatiseur </p>
                </div>
                <div className="w-fit h-fit flex flex-col items-start p-5 gap-5">
                    <p>Tunis</p>
                    {Array(7)
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
                                    / {index > 3 ? "Kg" : "L"}
                                </span>
                            </div>
                        ))}
                </div>
                <div className="w-fit h-fit flex flex-col items-start p-5 gap-5">
                    <p>Sfax</p>
                    {Array(7)
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
                                    / {index > 3 ? "Kg" : "L"}
                                </span>
                            </div>
                        ))}
                </div>
                <div className="w-fit h-fit flex flex-col items-centre p-5 gap-5">
                    <p>sousse</p>
                    {Array(7)
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
                                    / {index > 3 ? "Kg" : "L"}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
            <button className="bg-green-900 text-white w-36 h-12 text-2xl rounded-lg">Calculer</button>
        </div>
    );
}
