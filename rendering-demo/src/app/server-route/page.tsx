import { serverSideFunction } from "@/utils/server-utls"


const ServerRoute = () => {
    const result = serverSideFunction()
  return (
    <h1>ServerRoute {result}</h1>
  )
}

export default ServerRoute