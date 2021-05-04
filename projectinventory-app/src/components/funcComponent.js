import {Form, Button } from "react-bootstrap";

export default function AddProduct(){
    //add product handler method
    const add = (event)=>{
        event.preventDefault(); // to check the console
        //console.log(event.target); // to check the line of form in the console
        console.log(event.target.product_name.value);
    }
    return (
        <div>
            <Form onSubmit={add}> // coming from const add
  <Form.Group controlId="formBasicProduct">
    <Form.Label>Product Name:</Form.Label>
    <Form.Control type="text" placeholder="Enter Product" name="product_name"/>
  </Form.Group>

  <Form.Group controlId="formBasicPrice">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" placeholder="Price in Euro" name="price"/>
  </Form.Group>
  
  <Form.Group controlId="formBasicQuantity">
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" placeholder="How many: qty" name="qty"/>
  </Form.Group>


  <Button variant="primary" type="submit">
    Add to Inventory
  </Button>
</Form>
        </div>
    )
}