import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
    return (
        <Card className='py-3 p-3'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>
            <Card.Body>
            <a href={`/product/${product._id}`}>
                <Card.Title as='div'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </a>
            <Card.Text as='div'>
                <div className='my-3'>
                    Rating: {(product.rating/product.numReviews).toFixed(1)*10} <i className="fas fa-star"></i><br />
                    Manufacturer: {product.brand}

                </div>
            </Card.Text>
            <Card.Text as='h3'>{product.price}€</Card.Text>
            
        </Card.Body>    
        </Card>
    )
}

export default Product
