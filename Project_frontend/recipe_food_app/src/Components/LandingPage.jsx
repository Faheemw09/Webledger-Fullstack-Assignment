import React from 'react';
import './LandingPage.css';
import img2 from "../assests/img2.jpg"
import img3 from "../assests/img3.jpg"
import img4 from "../assests/img4.jpg"
const LandingPage = () => {
  return (
    <>
    <div className="midsection">
      <div className="background-image">
      <div className="text-overlay">
  <h1>Discover the Art of Cooking</h1>
  <p>
    Delve into the world of culinary delights with our handcrafted recipes that have delighted taste buds for generations. From traditional classics to innovative creations, we have a recipe for every occasion.
  </p>
</div>

      </div>
    </div>
     


    <div class="bottom_section">
  <div class="order_now">
    Discover Delicious Recipes
  </div>
  <div class="cards">
    <div class="display_card">
      <div class="img">
        <img src={img4} />
      </div>
      <div class="text1">
        <h4>Burger</h4>
        <p>Explore our mouthwatering burger recipes and savor the flavors.</p>
      </div>
    </div>
    <div class="display_card">
      <div class="img2">
        <img src={img2} />
      </div>
      <div class="text">
        <h4>PIZZA</h4>
        <p>Dive into our pizza recipes and create a slice of perfection at home.</p>
      </div>
    </div>
    <div class="display_card">
      <div class="img3">
        <img src={img3} />
      </div>
      <div class="text">
        <h4>PASTA</h4>
        <p>Indulge in our pasta recipes and enjoy a taste of Italy right in your kitchen.</p>
      </div>
    </div>
  </div>
  <div class="order_button_div">
    <button class="order_button">View All Recipes</button>
  </div>
</div>

    </>
  );
};

export default LandingPage;
