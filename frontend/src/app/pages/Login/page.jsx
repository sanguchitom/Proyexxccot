import React from 'react'
import {Link, Input, Button} from '@nextui-org/react'

export default function Login() {
  return (
    <div className='flex justify-center mt-60 '>
    <form method='POST'>
      <h1 className='ml-16'>Inicia sesion</h1>
        <label htmlFor="email">Escribe tu corre</label>
        <Input 
        required
        label="email"
        type="email" 
        id='emai' 
        name='email' />
        <label htmlFor="password">Escribe la contraseña</label>
        <Input 
        id='password'
        name='password'
        type="password"
        label="contraseña"
        />
        <Button className='ms-16 mt-4'>Enviar</Button>
        <p className='mt-8'>No tenes cuenta  <Link href='/pages/Register' underline="focus">Creala aquí.</Link></p>
    </form>
    </div>
  )
}
