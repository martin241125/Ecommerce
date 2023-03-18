import React from 'react'
import Button from './Button'
import menu from '../assets/barra-de-menus.png'
import close from '../assets/cerrar.png'
import icono from '../assets/ropita.png'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const Nav = () => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false)

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
            <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                <span className='text-3x1 text-black mr-1 pt-2'>
                    <img width={30} src={icono} alt="icono" className='ml-1'/>
                </span>
                Tu Tienda Online
            </div>
            <div onClick={() => setOpen(!open)} className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden'>
              <img src={open ? close : menu} alt="" />
              
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
              <li className='md:ml-8 font-bold text-xl md:my-0 my-7 text-gray-800 hover:text-red-400 duration-500' style={{cursor:'pointer'}} onClick={()=> navigate('/')}>Home</li>
              <li className='md:ml-8 font-bold text-xl md:my-0 my-7  text-gray-800 hover:text-red-400 duration-500' style={{cursor:'pointer'}} onClick={()=> navigate('/players')}>Liquidacion</li>
              <li className='md:ml-8 font-bold text-xl md:my-0 my-7  text-gray-800 hover:text-red-400 duration-500' style={{cursor:'pointer'}} onClick={()=> navigate('/torneos')}>Sobre nosotros</li>
              <li className='md:ml-8 font-bold text-xl md:my-0 my-7  text-gray-800 hover:text-red-400 duration-500' style={{cursor:'pointer'}} onClick={()=> navigate('/pedido')}>Empeza tu pedido</li>
              <li className='md:ml-8 font-bold text-xl md:my-0 my-7  text-gray-800 hover:text-red-400 duration-500' style={{cursor:'pointer'}} onClick={()=> navigate('/contact')}>Contact</li>
              <Button>
                Pedido Random
              </Button>
            </ul>

        </div>

    </div>
  )
}

export default Nav
