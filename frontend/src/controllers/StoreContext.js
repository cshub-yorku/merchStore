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


    function changeItemAmount(product, amount){
        let amountInCart = cart.get(product.productId);
        if (amountInCart + amount >= 1 || amountInCart === undefined)
            setCart(new Map(cart.set(product.productId, amountInCart ? amountInCart + amount : amount)))
        else
            removeItem(product)

    }

    function removeItem(product){
        cart.delete(product.productId);
        setCart(new Map(cart));
    }

    function getAllItems(){
        return cart;
    }


    function updateProudcts(){
        const token = localStorage.getItem("token");
// API LINK FOR TEST : "https://api.escuelajs.co/api/v1/products"
// localhost database http://localhost:9000/v1/products/

        fetch("https://api.escuelajs.co/api/v1/products", {
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
        return products.find(x => x.productId === id);
    }



    return(
        <StoreContext.Provider value={{
            cart,
            changeItemAmount,
            removeItem,
            getAllItems,
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