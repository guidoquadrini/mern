import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)

            setProduct(data)
        }

        fetchProduct()
    }, [match])

    return <>
    <Link className='btn btn-light my-3' to='/'>
        Volver
    </Link>
    <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                    />
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col>Price:</Col>
                        <Col>
                            <strong>{product.price}€</strong>
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col>Status:</Col>
                        <Col>
                            {product.countInStock > 0 ? 'Disponible': 'Agotado'}
                        </Col>
                    </Row>                    
                </ListGroupItem>
                <ListGroupItem>
                    <Button className="btn-block" disabled={product.countInStock === 0} type="button">Agregar a la cesta</Button>
                </ListGroupItem>
            </ListGroup>
        </Col>
    </Row>
    {product.name}</>
}

export default ProductScreen
