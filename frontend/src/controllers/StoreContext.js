import { createContext, useContext, useState } from "react";
import React from "react";
import ProductNotification from "../components/ProductNotification";

const StoreContext = createContext();
const StoreUpdateContext = createContext();

export function useStoreContext() {
    return useContext(StoreContext);
}


export function StoreContextProvider(props){

    const [cart, setCart] = useState(new Map());
    const [products, setProducts] = useState(null);
    const [notificationPopup, setnotificationPopup] = useState([]);

    function addItem(product){
        let amount = cart.get(product.productId);
        // setCart(cart.set(product.id, amount ? amount + 1 : 1))
        cart.set(product.productId, amount ? amount + 1 : 1)
        console.log(cart);
    }

    function removeItem(product){
        cart.delete(product.productId);
    }

    function updateProudcts(){
        const token = localStorage.getItem("token");
// API LINK FOR TEST : "https://api.escuelajs.co/api/v1/products"  

        fetch("http://localhost:9000/v1/products/", {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              })
                .then((res) => res.json())
                .then((json) => {
                  setProducts(json);
                });
    }

    function getAllProducts() {
        return products;
    }

    function getProduct(id){
        return products.find(x => x.id === id);
    }



    return(
        <StoreContext.Provider value={{
            cart,
            addItem,
            removeItem,
            notificationPopup,
            setnotificationPopup,
            updateProudcts,
            getAllProducts,
            getProduct
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}