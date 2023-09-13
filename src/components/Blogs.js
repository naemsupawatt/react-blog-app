import blogs from "../data/blogs"
import "./Blogs.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Blogs(){
    const [search, setSearch] = useState("");
    const [filterBlog, setFilterBlog] = useState([])
    useEffect(()=>{
        //กรองข้อมูลบทความ เช็คว่า item.title ตรงกันกับค่าที่อยู่ใน search
        const result = blogs.filter((item) => item.title.toLocaleLowerCase().includes(search))
        console.log(result);
        setFilterBlog(result)
    },[search]);
    return(
        <div className="blogs-container">
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="ค้นหาบทความ" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <article className="blogs-container">
                {filterBlog.map((item)=>(
                    <Link to={`/blog/${item.id}`} key={item.id}>
                        <div className="card">
                        <h2>{item.title}</h2>
                        {/* <img src={item.image_url} alt="" /> */}
                        <p>{item.content.substring(0,350)}</p>
                        <hr/>
                   </div> 
                    </Link>
                ))}
            </article>
        </div>
    );
}