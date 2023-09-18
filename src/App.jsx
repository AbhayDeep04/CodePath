import React from 'react';
import './App.css';
import Card from "./components/Cards"; // Update the import path

const App = () => {
  return (
    <div>
      <img src="https://heroic-pixie-6d7f91.netlify.app/awning.png" alt="brooo" />
      <h1 className='main-title'>Food Truck Favorites</h1>
      <div className='array'>
      <Card className = "item"
        imageUrl="https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"
        heading="Birria-Landia"
        subHeading="Mexican"
        buttonText="View Menu"
        buttonLink="https://thebirrialandia.com/menu/"
      />
      <Card className = "item"
        imageUrl="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42"
        heading="Mysttik Masala"
        subHeading="Indian"
        buttonText="View Menu"
        buttonLink="https://indianfoodny.com/"
      />
      <Card className = "item"
        imageUrl="https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024"
        heading="The Halal Guys"
        subHeading="Middle Eastern"
        buttonText="View Menu"
        buttonLink="https://thehalalguys.com/menu/"
      />
      <Card className = "item"
        imageUrl="https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg"
        heading="NY Dosas"
        subHeading="Vegetarian"
        buttonText="View Menu"
        buttonLink="https://nydosas.com/menu/"
      />
      <Card className = "item"
        imageUrl="https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg"
        heading="Jerk Pan"
        subHeading="Jamaican"
        buttonText="View Menu"
        buttonLink="https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/"
      />
      <Card className = "item"
        imageUrl="https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg"
        heading="Tong"
        subHeading="Bangladeshi"
        buttonText="View Menu"
        buttonLink="https://www.facebook.com/Bangladeshistreetfoods/"
      />
      <Card className = "item"
        imageUrl="https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg"
        heading="King Souvlaki of Astoria"
        subHeading="Greek"
        buttonText="View Menu"
        buttonLink="https://kingsouvlakinyc.com/"
      />
      <Card className = "item"
        imageUrl="https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg"
        heading="Ling's Sweet Mini Cakes"
        subHeading="Chinese"
        buttonText="View Menu"
        buttonLink="https://canalstreet.market/"
      />
      <Card className = "item"
        imageUrl="https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg"
        heading="Uncle Gussy's"
        subHeading="Greek"
        buttonText="View Menu"
        buttonLink="https://unclegussys.com/menus/"
      />
      <Card className = "item"
        imageUrl="https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg"
        heading="Patacon Pisao"
        subHeading="Venezuelan"
        buttonText="View Menu"
        buttonLink="https://www.pataconpisaonyc.com/menus/"
      />
      </div>

    </div>
  );
};

export default App;
