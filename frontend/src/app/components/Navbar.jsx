'use client'

import React from 'react'
import {NavbarMenu,NavbarBrand,NavbarItem,Navbar,NavbarContent, Button, Link, } from '@nextui-org/react'

export function Penegalactico() {
  return (<Navbar className='bg-transparent p-3'>
        <NavbarBrand>
            <Link href='/' className='text-orange-600 font-bold'>Rilash</Link>
        </NavbarBrand>
        <NavbarContent className='justify-items-center'>
            <NavbarItem>
            <Link href='#' className='text-red-500 font-sans'>Nosotros</Link>
            </NavbarItem>
            <NavbarItem isActive>
            <Link href='#' className='text-red-500 font-bold'>Ura</Link>
            </NavbarItem>
            <NavbarItem>
            <Link href='#' className='text-red-500 font-sans'>Hola si</Link>
            </NavbarItem>
            </NavbarContent>
            <NavbarContent>
                <NavbarItem>
                    <Button as={Link} href='/pages/auth/register' className='text-orange-700 hover:animate-pulse bg-amber-500'>Sing up</Button>
                </NavbarItem>
            </NavbarContent>
    </Navbar>
  )
}
