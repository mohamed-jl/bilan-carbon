import Link from "next/link";

export default function Navbar() {
    return (
        <nav className='bg-white w-full'>
            <div className='max-w-7xl mx-auto px-4 py-2 flex gap-8 items-center'>
                <Link href='/' className='text-2xl font-bold text-green-900'>
                    Accueil
                </Link>
                <Link href='/apropos' className='  text-green-900 hover:text-green-700'>
                    A propos
                </Link>

                <Link href='/calcule' className='text-green-900 hover:text-green-700'>
                    Calculer
                </Link>
                <Link href='/methodologie' className='text-green-900 hover:text-green-700'>
                    Methodologie
                </Link>
                <Link href='/apropos' className='text-green-900 hover:text-green-700'>
                    FAQ
                </Link>
                
            </div>
        </nav>
    );
}
