import Header from "./header/Header";
import "./Main.css";
import photo from '../../assets/main.jpg'
import Hero from "./Hero/hero";

function Main(){
    return (

   
      <div
      className="Main-pic"
      style={{ backgroundImage: `url(${photo})` }}>
              <div className="overlay"></div>



            <Header/>
            <Hero />
           
        </div>


    );
}
export default Main

