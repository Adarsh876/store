import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function Details() {

    const { id } = useParams();
    const [item, setItem] = useState(null);
  
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => setItem(response.data))
        .catch(error => console.error('Failed to fetch the item:', error));
    }, [id]);

  return (

    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', marginTop:'-150px' }}>
      {item ? (
        <Card className='text-light text-center' style={{ width: '24rem', height: '300px', backgroundColor: 'black', marginTop: '300px' }}>
          <Card.Body>
            <Card.Title><span className='text-info'><h2>{item.id}</h2></span> <h2>{item.title}</h2></Card.Title>
            <br />
            <p>{item.body}</p>
          </Card.Body>
        </Card>
      ) : (
        <p>Nothing to display</p>
      )}
    </div>


    
  )
}
    /*  */