import { Bell, MapPin, Search, ShoppingCart } from 'lucide-react'
import logo from '../../../assets/logo.webp'
import meli from '../../../assets/meli.webp'

export function Navbar() {
    return (
        <nav className="bg-[#ffe600] w-full h-[100px] px-[352.5px] overflow-hidden metrophobic-regular">
            <div className='flex flex-col p-2'>
                <div className="w-full h-auto flex items-center items-center flex">
                    <div className='w-46'>
                        <img className='h-[34px]' src={logo} alt="" />
                    </div>
                    <div className='w-[588px] h-[40px] px-4 overflow-hidden flex gap-3 justify-center items-center rounded-[3px] bg-white shadow-md'>
                        <input className='flex-1' placeholder='Buscar produtos, marcas e muito mais...' type="text" />
                        <div className='h-1/2 border-l border-neutral-200' />
                        <Search size={18} className='text-neutral-500' />
                    </div>
                    <img className='h-[38px] ml-20' src={meli} alt="" />
                </div>
                <div className="w-full h-auto"></div>
            </div>
            <div className='w-full px-2 flex text-[13px]'>
                <div className='flex w-46 h-8'>
                    <MapPin className='opacity-50' />
                    <div className='flex flex-col justify-center h-full px-1 mt-1'>
                        <p className='text-[11px] opacity-50 leading-none m-0'>Enviar Para</p>
                        <p className='leading-none m-0'>Camaçari 42800002</p>
                    </div>
                </div>
                <div className='w-[588px] h-8 flex justify-between items-end'>
                    <a href="#">Categorias</a>
                    <a href="#">Ofertas</a>
                    <a href="#">Cupons</a>
                    <a href="#">Supermercado</a>
                    <a href="#">Moda</a>
                    <a href="#">Mercado Play</a>
                    <a href="#">Vender</a>
                    <a href="#">Contato</a>
                </div>
                <div className='h-9 flex items-end justify-center ml-15 gap-6'>
                    <div className='flex items-center gap-1'>
                        <div className='w-6 h-6 rounded-full bg-white border border-neutral-200 flex justify-center items-center text-[10px]'>AM</div>
                        <p>Anderson</p>
                    </div>
                    <div className='h-6 flex items-center gap-5'>
                        <a href="">Compras</a>
                        <a href="">Favoritos</a>
                    </div>
                    <div className='h-6 flex items-center gap-5'>
                        <Bell size={18}/>
                        <ShoppingCart size={18}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}