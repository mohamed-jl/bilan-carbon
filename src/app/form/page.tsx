import Category from "@/components/Category";

export default function form() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center ">
            <div className="flex flex-col h-[400px] items-center gap-8 ">
                <p className="text-5xl">calcule de l'empreite carbone</p>
                <div className="w-full h-screen flex justify-center items-center ">
                    <Category title="Emissions directes" num={1} />
                    <Category title="Emissions indirectes liees a l'energie achetee" num={2} />
                    <Category title="Emissions indirectes en dehors du controle directe de la societe mais liees a ces activites (avant et apres)" num={3} />
                </div>
            </div>
        </div>
    );
}
