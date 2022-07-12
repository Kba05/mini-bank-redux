import { addManyCustomers } from "../store/customersReducer"

export const fetchCustomers = () => (dispatch)=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch(addManyCustomers(json)))
}