import { Metadata } from "next"
import { resolve } from "path"

export const metadata = {
  title: {
       absolute: "Blog"
    }
}

const MyBlog = async() => {
  return (
    <div>MyBlog</div>
  )
}

export default MyBlog