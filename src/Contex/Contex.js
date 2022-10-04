import React, { createContext, useContext, useReducer } from 'react'
import {Products} from "../MokeData"
import { CartReducer } from './Reducer';

const Cart=createContext()

function Contex({children}) {
    const [state,dispatch]=useReducer(CartReducer,{
        Products,
        cart:[]
    })
  return (
    <Cart.Provider value={{state,dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Contex


export const CartState=()=>{
    return useContext(Cart)
}