import "./foot.css";
import photo from "../../assets/main.jpg"; 
import logo from "../../assets/logo.png"; 

function Foot() {
  return (
    <div className="footer">
   
      <div
        className="picture"
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="overlay"></div>

        <div className="picture-content">
          <h2>Find Best Place For Living</h2>

          <p>
            Spend vacations in best hotels and resorts find the great place of
            your choice using different searching options.
          </p>

          <button>Contact Us</button>
        </div>
      </div>

     
      <div className="footer-bottom">

        <div className="footer-column first-column">

          <img src={logo} alt="logo" className="footer-logo" />

          <h3>Contact Us</h3>

          <p>Call : +123 400 123</p>

          <p>
            Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
            auctor felis.
          </p>

          <p>Email : example@mail.com</p>

          

        </div>

        <div className="footer-column">

          <h3>Features</h3>

          <ul>
            <li>Home</li>
            <li>Become a Host</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="footer-column">

          <h3>Company</h3>

          <ul>
            <li>About Us</li>
            <li>Press</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>

        </div>

        <div className="footer-column">

          <h3>Team and Policies</h3>

          <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
            <li>Security</li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default Foot;