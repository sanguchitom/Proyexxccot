import React from 'react'
import {Button,Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, User,Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { headers } from 'next/headers';


export function Penegalaticto() {
  return (
    <Navbar className="shadow bg-transparent ">
        <NavbarBrand >
          <Link className='text-amber-600 font-extrabold' href='/'>Rilash</Link>
        </NavbarBrand>
        <NavbarContent className='justify-center'>
          <Link className='font-semibold text-emerald-400'>Nashe</Link>
          <Link className='font-bold text-green-700' href='/pages/products'>Productos</Link>
          <Link className='font-semibold' >Nosotros</Link>
        </NavbarContent>
        <NavbarContent className='justify-end'>
          <Button className='bg-red-600  hover:animate-pulse'>
            <Link className="text-black font-semibold " href='/pages/Login'>Login</Link>
          </Button>
          <User
          name="Hola"
          avatarProps={{
            src: "https://avatars.githubusercontent.com/u/30373425?v=4"
          }}
          />
        </NavbarContent>
    </Navbar>
  )
}
