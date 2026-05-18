import { Search } from 'lucide-react'
import logo from '../../../assets/logo.webp'
import meli from '../../../assets/meli.webp'

export function Navbar() {
    return (
        <nav className="bg-[#ffe600] w-full h-[100px] px-[352.5px]">
            <div className='flex flex-col p-2 overflow-hidden'>
                <div className="w-full h-auto flex items-center items-center flex gap-12">
                    <img className='h-[34px]' src={logo} alt="" />
                    <div className='w-[588px] h-[40px] px-4 overflow-hidden flex gap-3 justify-center items-center rounded-[3px] bg-white shadow-md'>
                        <input className='flex-1' placeholder='Buscar produtos, marcas e muito mais...' type="text" />
                        <div className='h-1/2 border-l border-neutral-200'/>
                        <Search size={18} className='text-neutral-500'/>
                    </div>
                    <img className='h-[38px] ml-10' src={meli} alt="" />
                </div>
                <div className="w-full h-auto"></div>
            </div>
        </nav>
    )
}