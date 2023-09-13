import { useEffect , useState} from "react"
import { useParams } from "react-router-dom"
import blogs from "../data/blogs"
export default function Details() {
  const {id} = useParams()
  const [title, setTitle] = useState(""); 
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(()=>{
    const result = blogs.find((item)=>item.id === parseInt(id))
    setTitle(result.title)
    setImage(result.image_url)
    setContent(result.content)
    setAuthor(result.author)
},[])
  return (
    <>
      <h2>รายละเอียดบทความ : {id}</h2>
      <h2>รายละเอียดบทความ : {title}</h2>
      <img src={image} alt={title} />
      <h2>รายละเอียดบทความ : {content}</h2>
      <h2>รายละเอียดบทความ : {author}</h2>
    </>
  )
}
