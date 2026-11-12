import "./pro.css";
import photo1 from "../../assets/pro/house1.jpg";
import photo2 from "../../assets/pro/house2.jpg";
import photo3 from "../../assets/pro/house3.jpg";
import photo4 from "../../assets/pro/house4.jpg";
import photo5 from "../../assets/pro/main.jpg";



function Pro() {
  return (
   <div className="first-area">
   <div className="head-text">
        <div className="text-area">
            <h2>Properties by Area</h2>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus quaerat, quo in culpa maxime illo possimus deleniti mollitia id nobis qui! Molestias, a fuga?</p>
        </div>
    </div>
    <div className="picture-area">
        <div className="First-line">
            <div className="photo-grid">
            <div className="area-photo">
                <img src={photo1} alt="" />

            </div>
            <div className="area-photo">
                <img src={photo2} alt="" />
            </div>
            <div className="area-photo">
                <img src={photo3} alt="" />
            </div>
          </div>
        </div>
      
            <div className="Second-line">
                  <div className="photo-grid">
                    <div className="big-photo">
                        <img src={photo5} alt="" />
                    </div>
                   <div className="area-photo">
                    <img src={photo4} alt="" />
                   </div>
                 </div>
            </div>
    </div>

   </div>
  
   
  );
}

export default Pro