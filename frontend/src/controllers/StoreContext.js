import { createContext, useContext, useState } from "react";
import React from "react";
import ProductNotification from "../components/ProductNotification";

const StoreContext = createContext();
const StoreUpdateContext = createContext();

export function useStoreContext() {
    return useContext(StoreContext);
}


export function StoreContextProvider(props){

    updateProudcts();

    const [cart, setCart] = useState(new Map());
    const [products, setProducts] = useState([]);
    const [notificationPopup, setnotificationPopup] = useState([]);

    const updateCart = (k,v) => {
        setCart(cart.set(k,v))
    }

    function addItem(product){
        let amount = cart.get(product.id);
        updateCart(product.id, amount ? amount + 1 : 1);
        console.log(cart);
    }

    function removeItem(product){

    }

    function updateProudcts(){
        console.log('loaded!');
    }

    function getAllProducts() {

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