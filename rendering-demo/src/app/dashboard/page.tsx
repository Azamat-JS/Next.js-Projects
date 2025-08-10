'use client';

import {useState} from 'react'

const DashboardPage = () => {
    const [name, setName] = useState("");
    console.log("DASHBOARD  client component")

  return (
    <div>
        <h1>Dashboard</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Salom, {name}</p>
    </div>
  )
}

export default DashboardPage