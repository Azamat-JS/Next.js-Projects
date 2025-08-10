"use client"

import {useState} from 'react';
import ClientComponentTwo from './client-component-two';

const ClientComponentOne = ({children} : {children: React.ReactNode}) => {
    const [name, setName] = useState('Batman')
  return (
    <>
    <div>ClientComponentOne</div>
    {children}
    <ClientComponentTwo/>
    </>
  )
}

export default ClientComponentOne