'use client'
import React, { useState } from 'react'
import {Button, Input} from '@nextui-org/react'

export function Peneregistrador() {
    const [email, setemail] = useState("")
    const [contra, setcontra] = useState("")
    



  return (
    <div class="flex justify-center mt-60" >
        <form action="/" method="POST">
          <h1>Registrate</h1>
            <Input
            required
            type="email" 
            id="email" 
            name='email'
            placeholder=''
            label="Email"
            onChange={(e)=>{setemail(e.target.value)}}
            />
            <label htmlFor="password1">Escribe tu contraseña</label>
            <Input 
            Required
            type="password" 
            id="password1" 
            name='password1'
            label="contraseña"
            />
            <label 
            required
            htmlFor="password2">Repite la contraseña</label>
            <Input 
            required
            label="Confirma contraseña"
            type="password" 
            id='password2' 
            name="password2" />
            <Button className='ms-16 mt-4'>Enviar</Button>
        </form>

    </div>
  )
}
