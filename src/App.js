import logo from './logo.svg';
import './App.css';
import section from './images/section-big-img.png';
import card1_img from './images/card1-img.png';
import card2_img from './images/card2-img.png';
import card3_img from './images/card3-img.png';
import card4_img from './images/crad4-img.png';

function App() {
  return (
    <div className="App">
      <div className="container mb-section">
        <h1 className="section-heading">Featured Product</h1>
       <div className="row">
     <div className="col-lg-5 col-12">
         <div className="d-flex justify-cont-center">
         <div className="img-possition big-img">
         <img src={section} alt="#" className="w-100"/>
           <p className="img-text">Explore More
Product</p>
         </div>
         </div>
     </div>
     <div className="col-lg-7 col-12">
    <div className="row mt-row">
    <div className="col-12 col-sm-6">
     <div className="card1">
     <img src={card1_img} alt="#" className="w-100 card-img img2" />
     <p className="card-para">Concetti Di-Lusso ALESANDRDO Luxury
      Turkish Spa Towels and ganic Bamboo
        Robes 12 PC set</p>
    <div className="d-flex justify-btween align-item-center card-small-section">
       <p className="dolr-text">$169.99</p>
       <p className="dolr-text2">$199.99</p>
       <button className="card-bttn">ADD CART</button>
    </div>
      </div>
      </div>
      <div className="col-12 col-sm-6">
     <div className="card1 mt-sm">
     <img src={card2_img} alt="#" className="w-100 img2 card-img" />
     <p className="card-para">Concetti Di-Lusso ALESANDRDO Luxury
      Turkish Spa Towels and ganic Bamboo
        Robes 12 PC set</p>
    <div className="d-flex justify-btween align-item-center card-small-section">
       <p className="dolr-text">$169.99</p>
       <p className="dolr-text2">$199.99</p>
       <button className="card-bttn">ADD CART</button>
    </div>
      </div>
      </div>
      <div className="col-12 col-sm-6">
     <div className="card1 mt-card">
     <img src={card3_img} alt="#" className="w-100 card-img img2" />
     <p className="card-para">Concetti Di-Lusso ALESANDRDO Luxury
      Turkish Spa Towels and ganic Bamboo
        Robes 12 PC set</p>
    <div className="d-flex justify-btween align-item-center card-small-section">
       <p className="dolr-text">$169.99</p>
       <p className="dolr-text2">$199.99</p>
       <button className="card-bttn">ADD CART</button>
    </div>
      </div>
      </div>
      <div className="col-12 col-sm-6">
     <div className="card1  mt-card">
     <img src={card4_img} alt="#" className="w-100 card-img img2" />
     <p className="card-para">Concetti Di-Lusso ALESANDRDO Luxury
      Turkish Spa Towels and ganic Bamboo
        Robes 12 PC set</p>
    <div className="d-flex justify-btween align-item-center card-small-section">
       <p className="dolr-text">$169.99</p>
       <p className="dolr-text2">$199.99</p>
       <button className="card-bttn">ADD CART</button>
    </div>
      </div>
      </div>

    </div>
     </div>
       </div>
   <div className="d-flex justify-cont-center">
   <button className="section-bttn">ADD CART</button>
   </div>
      </div>
    </div>
  );
}

export default App;