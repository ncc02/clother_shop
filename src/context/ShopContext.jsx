import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext(); //day la co ntext de thang con goi 

const ShopContextProvider = (props) => { //tao mot component bao quat tat ca
    
    const currency = '$';
    const delivery_fee = 10;
    const value = {
        products , currency, delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;