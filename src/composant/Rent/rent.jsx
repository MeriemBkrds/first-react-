import "./rent.css";
import picture from "../../assets/rent/main.jpg";

function Rent(){
    return (

   <section className="latest-properties">

  <div className="latest-title">
    <h1>Latest Properties of Rent</h1>
    <p>
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Proin sodales ultrices nulla blandit volutpat.
    </p>
  </div>

  <div className="property-container">

    {/* Card 1 */}
    <div className="property-card">

      <img src={picture} alt="" />

      <div className="property-info">

        <h2>92 ALLIUM PLACE, ORLANDO FL 32827</h2>

        <h3>$ 590,693</h3>

        <div className="details">
          <span> 4</span>
          <span> 4</span>
          <span> 2,096.00 ft</span>
        </div>

        <hr />

        <div className="agent">

          <div className="agent-left">
            <img src={picture} alt="" />
            <span>Jenny Wilson</span>
          </div>

          <div className="agent-right">
            <button>↗</button>
            <button>♡</button>
            <button>+</button>
          </div>

        </div>

      </div>

    </div>

    <div className="property-card">

      <img src={picture} alt="" />

      <div className="property-info">

        <h2>92 ALLIUM PLACE, ORLANDO FL 32827</h2>

        <h3>$ 590,693</h3>

        <div className="details">
          <span> 4</span>
          <span> 4</span>
          <span> 2,096.00 ft</span>
        </div>

        <hr />

        <div className="agent">

          <div className="agent-left">
            <img src={picture} alt="" />
            <span>Jenny Wilson</span>
          </div>

          <div className="agent-right">
            <button>↗</button>
            <button>♡</button>
            <button>+</button>
          </div>

        </div>

      </div>

    </div>
    <div className="property-card">

      <img src={picture} alt="" />

      <div className="property-info">

        <h2>92 ALLIUM PLACE, ORLANDO FL 32827</h2>

        <h3>$ 590,693</h3>

        <div className="details">
          <span> 4</span>
          <span> 4</span>
          <span> 2,096.00 ft</span>
        </div>

        <hr />

        <div className="agent">

          <div className="agent-left">
            <img src={picture} alt="" />
            <span>Jenny Wilson</span>
          </div>

          <div className="agent-right">
            <button>↗</button>
            <button>♡</button>
            <button>+</button>
          </div>

        </div>

      </div>

    </div>
    <div className="property-card">

      <img src={picture} alt="" />

      <div className="property-info">

        <h2>92 ALLIUM PLACE, ORLANDO FL 32827</h2>

        <h3>$ 590,693</h3>

        <div className="details">
          <span> 4</span>
          <span> 4</span>
          <span> 2,096.00 ft</span>
        </div>

        <hr />

        <div className="agent">

          <div className="agent-left">
            <img src={picture} alt="" />
            <span>Jenny Wilson</span>
          </div>

          <div className="agent-right">
            <button>↗</button>
            <button>♡</button>
            <button>+</button>
          </div>

        </div>

      </div>

    </div>
    <div className="property-card">

      <img src={picture} alt="" />

      <div className="property-info">

        <h2>92 ALLIUM PLACE, ORLANDO FL 32827</h2>

        <h3>$ 590,693</h3>

        <div className="details">
          <span> 4</span>
          <span> 4</span>
          <span> 2,096.00 ft</span>
        </div>

        <hr />

        <div className="agent">

          <div className="agent-left">
            <img src={picture} alt="" />
            <span>Jenny Wilson</span>
          </div>

          <div className="agent-right">
            <button>↗</button>
            <button>♡</button>
            <button>+</button>
          </div>

        </div>

      </div>

    </div>
    <div className="property-card">

      <img src={picture} alt="" />

      <div className="property-info">

        <h2>92 ALLIUM PLACE, ORLANDO FL 32827</h2>

        <h3>$ 590,693</h3>

        <div className="details">
          <span> 4</span>
          <span> 4</span>
          <span> 2,096.00 ft</span>
        </div>

        <hr />

        <div className="agent">

          <div className="agent-left">
            <img src={picture} alt="" />
            <span>Jenny Wilson</span>
          </div>

          <div className="agent-right">
            <button>↗</button>
            <button>♡</button>
            <button>+</button>
          </div>

        </div>

      </div>

    </div>

  </div>

  <button className="load-btn">
    Load more listing
  </button>

</section>
      


    );
}
export default Rent
