import Link from 'next/link'
export default function NavigationMenu() {
    
    return(
        <div className="flex justify-center items-center  h-full w-40 pb-6 ">
            <div className=" p-2 justify-center items-center bg-slate-800 rounded-lg h-[90%] w-full">
                <h1 className="flex-wrap font-extrabold text-2xl">The Weather App</h1>
                <div className="h-full flex justify-center items-center pb-20">
                    <ul className="flex flex-col items-center justify-center">
                        <li className="p-2">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        
                        <li  className="p-2">
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}