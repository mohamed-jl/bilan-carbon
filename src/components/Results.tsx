export default function Results({scope}: {scope: number}) {
    return (
        <div className="flex flex-col items-center justify-center gap-5 p-5">
            {scope === 1 ? (
                <div></div>
            ): scope === 2 ? (
                <div></div>)
            : scope === 3 ?(
                <div></div>)
            : (
                <div>error when paasing scope value</div>
            )
            }
        </div>
    );
}