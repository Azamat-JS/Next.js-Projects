import ClientComponentOne from "@/components/client-component-one"
import ServerComponentOne from "@/components/server-component-one"



const InterLeavingPage = () => {
  return (
    <>
      <h1>InterLeavingPage</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  )
}

export default InterLeavingPage