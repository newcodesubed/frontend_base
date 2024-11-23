import React from "react";
import ReactDom from "react-dom/client";
import "./index.css"

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App(){
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header(){
    const style={};
    return(
        <header className="header">
            <h1 style={style} 
                >
                fast React Pizza co.
            </h1>
        </header>
    ) 
}
//1)props pass from the component
function Menu(){
    return(
        <div className="menu">
            <h2>Our Menu</h2>
            <Pizza name='Pizza Prosciutto' 
            ingredients='Tomato, mozarella, ham, aragula, and burrata cheese' 
            photoName='pizzas/Prosciutto.jpg' 
            price={10} 
            />
        </div>
    )
}

//2) pass to 
function Pizza(props){
    return (
        <div className="pizza">
            <img src={props.photoName} alt={props.name}/>
            <div>
            <h>{props.name}</h>
            <p>{props.ingredients} </p>
            <span>{props.price}</span>
            </div>
        </div>
        
    )
}

function Footer(){
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    
    // if(hour <= openHour && hour >= closeHour)alert("We are closed!");
    // else alert("We are open")

    return (
    <footer className="footer">
        {new Date().toLocaleTimeString()}.We,re currently open
        </footer>
)}


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode> 
        <App />
    </React.StrictMode>
);