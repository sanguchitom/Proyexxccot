'use client'
import {Button, Input,} from '@nextui-org/react'
import { useState } from 'react'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export function Regsitercard() {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
    <form action="" method='POST' className='text-white justify-between space-y-2'>
        <h2 className='ml-16 '>Registrate</h2>
        <Input
        required
        type='email'
        label="Email"
        id='email'
        placeholder='Escribe tu email'
        className='max-w-xs '
        variant='bordered'
        />
        <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <FontAwesomeIcon icon={faEye}/>
          ) : (
            <FontAwesomeIcon icon={faEyeSlash}/>
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
        <Input
        required
        placeholder='Repite la contraseña'
        type='password'
        id='password2'
        variant='bordered'
        className='max-w-xs'
        />
        <Button className='text-black bg-amber-500 ml-16'>Enviar</Button>
        </form>
    </>
  )
}
