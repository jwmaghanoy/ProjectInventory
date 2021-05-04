import {Form, Button, Table } from "react-bootstrap";
import { useState} from 'react';
export default function AddProduct(){
    //add product handler method
    let initialValue = [];
    const [products, setProduct ] = useState(initialValue);
    //products = []
    const add = (event)=>{
        event.preventDefault(); // to check the console
        //console.log(event.target); // to check the line of form in the console
        //console.log(event.target.product_name.value);

        const formData = event.target;
        const newProduct = {
            product_name: formData.product_name.value,
            price: formData.price.value,
            qty: formData.qty.value

        }
        //console.log(newProduct); 
        // add a new product inside products array
        setProduct([...products, newProduct]); 
        console.log(products);
    }
    return (
        <div>
            <Form onSubmit={add}> 
  <Form.Group controlId="formBasicProduct">
    <Form.Label>Product Name:</Form.Label>
    <Form.Control type="text" placeholder="Enter Product" name="product_name"/>
  </Form.Group>

  <Form.Group controlId="formBasicPrice">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" placeholder="Price in Peso" name="price"/>
  </Form.Group>
  
  <Form.Group controlId="formBasicQuantity">
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" placeholder="How many: qty" name="qty"/>
  </Form.Group>


  <Button variant="primary" type="submit">
    Add to Inventory
  </Button>
</Form>

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Index</th>
      <th>Product Name</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    {
        products.map((item,index)=>
        {
            return(
                <tr>
                <td>{index}</td>
                <td>{item.product_name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                </tr>
            )

        })
    }
    
  </tbody>
</Table>
        </div>
    )
}