import { createContext, useContext, useState } from "react";
import React from "react";

const StoreContext = createContext();
const StoreUpdateContext = createContext();

export function useStoreContext() {
    return useContext(StoreContext);
}


export function StoreContextProvider(props){

    const [cart, setCart] = useState(new Map());
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



    return(
        <StoreContext.Provider value={{
            cart,
            addItem,
            removeItem,
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}