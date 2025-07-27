import Link from "next/link";

export default function Navbar() {
    return (
        <nav className='bg-white w-full'>
            <div className="flex ">
                <img className='w-auto h-18 mx-auto ml-16' src='/images/logo-tic.png' alt='Logo TIC' />
                <div className='max-w-7xl mx-auto px-4 py-2 flex gap-8 items-center flex-1 ml-16'>
                    <Link href='/' className='text-2xl  text-blue-900'>
                        Accueil
                    </Link>
                    <Link href='/apropos' className='text-2xl text-blue-900 hover:text-blue-700'>
                        A propos
                    </Link>

                    <Link href='/calcule' className='text-2xl text-blue-900 hover:text-blue-700'>
                        Calculer
                    </Link>
                    <Link href='/methodologie' className='text-2xl text-blue-900 hover:text-blue-700'>
                        Methodologie
                    </Link>
                    <Link href='/apropos' className='text-2xl text-blue-900 hover:text-blue-700'>
                        FAQ
                    </Link>
                </div>
            </div>
        </nav>
    );
}
