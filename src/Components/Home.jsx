import React from 'react'
import './home.css'
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


export default function Home() {

    const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setItem(response.data))
      .catch(error => console.error('Failed to fetch the data:', error));
  }, []);
  return (
    

    <div>
    <Navbar className="bg-info">
      <>
        <Navbar.Brand className='fw-bolder' href="#home"><h2 className='ms-2'>Store</h2></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to={'/login'} style={{textDecoration:"none", color:"blue",marginRight:'15px'}}><button className='login btn btn-primary'>login</button></Link>

          </Navbar.Text>
        </Navbar.Collapse>
      </>
    </Navbar>


     <div>
      <Row className='ms-5 me-3 ' style={{marginTop:'100px'}}>
        { item?.length>0?
          item?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>

          <Link to={`/detail/${item.id}`} style={{textDecoration:"none", color:"blue"}}>
            <Card className='text-light text-center my-auto' style={{ width: '18rem', height:'150px', backgroundColor:'black'}}>
          <Card.Body>
            <Card.Title><span className='text-info'>{item.id}.</span>  {item.title}</Card.Title>
          </Card.Body>
        </Card>
          </Link>
          </Col>

          ))
           :
        <p>nothing to display</p>
        }
      </Row>
    </div>


    </div> 

    
  )
}
