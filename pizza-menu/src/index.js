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
const pizzas = pizzaData;

const numPizzas = pizzas.length

    return(
        <div className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? (
                <>
                    <p>
                        Pizza is what we make. Delight is what we do
                    </p>
                    <ul className="pizzas">
                        {pizzaData.map((pizza)=>(
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
                ) : <p>We're still working on our menu. please come back later:0</p>}
            
            {/* <Pizza name='Pizza Prosciutto' 
            ingredients='Tomato, mozarella, ham, aragula, and burrata cheese' 
            photoName='pizzas/Prosciutto.jpg' 
            price={10} 
            /> */}
        </div>
        
    )
}

//2) pass to 
function Pizza({pizzaObj}){

    console.log({pizzaObj});

    // if(pizzaObj.soldOut) return null;
//In pure JavaScript, you don't need {} because you're always in JavaScript code.
//But in JSX, you must explicitly tell it to evaluate JavaScript expressions using {}.
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
            <div>
            <h1>{pizzaObj.name}</h1>
            <p>{pizzaObj.ingredients} </p>
            <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
        
    )
}

function Footer(){
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    
    // if(hour <= openHour && hour >= closeHour)alert("We are closed!");
    // else alert("We are open")
    // if (!isOpen)
    //         return (
    //         <p>
    //             we"re happy to welcome you between {openHour}:00 and {closeHour}:00.
    //         </p>
    //     );

    return (
    <footer className="footer">
        {isOpen ? 
            <Order closeTime={closeHour} openTime={openHour} />
            : (
            <p>
                
                we"re happy to welcome you between {openHour}:00 and {closeHour}:00.
            </p>
        )}
    </footer>
)}

function Order({closeTime, openTime}){
    return (
        <div className="order" >
        <p>
            We're open from {openTime}:00 to {closeTime}:00. Come visit us or order online.
        </p>
        <button className="btn">Order Now</button>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode> 
        <App />
    </React.StrictMode>
);