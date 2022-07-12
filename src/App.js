import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCustomers } from "./asyncActions/customers"
import { addCustomerAction, removeCustomerAction } from "./store/customersReducer"

const App = () => {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const onClickAdd = ()=>{
    dispatch({type:"ADD_CASH", payload:2})
  }
  const onClickGet = ()=>{
    dispatch({type:"GET_CASH", payload:2})
  }

  const onClickGetCustomer = ()=>{
    dispatch(fetchCustomers())
  }

  const onClickAddCustomer = (name)=>{
    const obj = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(obj))
  }

  const onClickRemoveCustomer = (name)=>{
    dispatch(removeCustomerAction(name))
  }


  return (
    <div className="App">
      <div>
        <p>Your cash: {cash} </p>
        <button onClick={onClickAdd}>Add cash</button>
        <button onClick={onClickGet}>Get cash</button>
      </div>

      <div>
        <button onClick={()=>onClickGetCustomer()}>Get customer</button>
        <button onClick={()=>onClickAddCustomer(prompt())}>Add customer</button>
        <button onClick={()=>onClickRemoveCustomer(prompt())}>Remove customer</button>
        <p>customers:</p>
        {customers.map(customer=> <p key={customer.id}>{customer.name}</p> )}
      </div>
    </div>
  );
}

export default App;
