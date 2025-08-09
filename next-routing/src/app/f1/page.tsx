import Link from "next/link"

const F1 = () => {
  return (
    <>
    <h1>F1 page</h1>
    <Link href={"/f1/f2"}>F2 page</Link>
    <Link href={"/f3"}>F3 page</Link>
    </>
  )
}

export default F1