"use client";

import { serverSideFunction } from "@/utils/server-utls"



const ClientRoute = () => {
    const result = serverSideFunction()
  return (
    <h1>ClientRoute{result}</h1>
  )
}

export default ClientRoute