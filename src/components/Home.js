import "./Home.css"
import home from "../blogapp-asset/images/home.svg"
export default function Home(){
    return(
        <div className="container">
            <h3 className="title">หน้าแรกของเว็บไซต์</h3>
            <img src={home} alt="home" />
        </div>
    );
}