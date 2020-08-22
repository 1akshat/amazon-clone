import React from "react";
import Banner from "./Banner/Banner";
import ProductCard from "./ProductCard/ProductCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home-row">
        <ProductCard
          id={125645}
          title="Apple AirPods with Charging Case"
          price="13,900.00"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._SL1500_.jpg"
        />

        <ProductCard
          id={125645}
          title="GoPro HERO7 Black — Waterproof Action Camera with Touch Screen 4K Ultra HD Video 12MP Photos 720p Live Streaming Stabilization"
          price="29,990.00"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51CDZ2fymtL._SL1000_.jpg"
        />
      </div>

      <div className="home-row">
        <ProductCard
          id={125645}
          title="Apple Watch Series 5 (GPS, 44mm) - Space Gray Aluminium Case with Black Sport Band"
          price="43,900.00"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71wu%2BHMAKBL._SL1500_.jpg"
        />

        <ProductCard
          id={125645}
          title="Apple iPhone 11 (64GB) - Purple"
          price="68,300.00"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51oXVi%2BZhhL._SL1024_.jpg"
        />

        <ProductCard
          id={125645}
          title="Xbox One X Cyberpunk 2077 Limited Edition Bundle (1TB)"
          price="47,989.00"
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71RW-dl0szL._SL1500_.jpg"
        />
      </div>

      <div className="home-row">
        <ProductCard
          id={125645}
          title="Furny Elisse One Seater Living Room Single Seater Recliner (Blue) Manual Recliner with German Recliner Mechanism"
          price="20,999.00"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/615Tv-BQiBL._SL1000_.jpg"
        />

        <ProductCard
          id={125645}
          title="Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Silver"
          price="2,24,900.00"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71y%2BlIHVdAL._SL1500_.jpg"
        />

        <ProductCard
          id={125645}
          title="PowerMax Fitness TDA-230M 2HP (4HP Peak) Motorized Treadmill with Free Installation Assistance, Home Use & Automatic Incline"
          price="43,990.00"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71MOiA1SZUL._SL1500_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
