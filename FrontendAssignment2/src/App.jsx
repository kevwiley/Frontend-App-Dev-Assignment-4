import './App.css'
import ProductCard from './components/ProductCard'; 
import Header from "./components/Header";
import Hero from './components/Hero';
import Footer from './components/Footer';
import CartItem from './components/CartItem';
import { useState } from 'react';


//each card will be listed out vertically, with image, name, price, and description.
function App() {

  const products = [

    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99.99, 
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: 249.99, 
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    { 
      id: 3, 
      name: "Bluetooth Speaker", 
      price: 79.99, 
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    { 
      id: 4, 
      name: "Laptop Stand", 
      price: 49.99, 
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    { 
      id: 5, 
      name: "Webcam", 
      price: 129.99, 
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      name: "Mechanical Keyboard", 
      price: 159.99, 
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  //store items currently in cart array
  const [cart, setCartcount] = useState([]);
  //adds item to cart
  function addToCart(product) {
    setCartcount([...cart, product]);
    console.log("Added to cart:", product);
  }

  //removes item from cart
  function removeFromCart(productId) {
    setCartcount(cart.filter((product) => product.id !== productId));
  }


  //calculate total price of each item in cart
  const cartTotal = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <div className="app">
      <Header storeName="TechShop" cartCount={cart.length}/>
      <Hero title="High Quality Tech Products" subtitle="Search for Tech Products Perfect for your Setup." calltoaction="Browse All" />

      <h1>Great Deals</h1> 
      
      {/* makes a prodcut card for each product in array*/}
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          product={product}
          onAddToCart={addToCart}
          /> 
      ))}


      {/* creates cart section that will tell user cart is empty if 0 items are in the cart, also calculates price and round 2 places */}
      <section className="cart">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          cart.map((product) => (
          <CartItem key={product.id} product={product} onRemove={removeFromCart}/>
          ))
        )}

        <h3>Total: ${cartTotal.toFixed(2)}</h3>

      </section>
      <Footer shopName="TechShop" email="test@test.test" phone="123-456-7890" address="1234 Test Lane" />

    </div>
  );
}

export default App;