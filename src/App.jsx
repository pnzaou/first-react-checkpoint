import React from "react"
import ReactDOM from "react-dom"
import './App.css'
import Card from 'react-bootstrap/Card'
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Image from "./components/Image";

let firstName = 'Emmaneul'

const App = () => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Image/>
        <Card.Body>
          <Card.Title><Name/></Card.Title>
          <Card.Text><Description/></Card.Text>
        </Card.Body>
        <Card.Footer>
          <Price/>
        </Card.Footer>
      </Card>
      <div className="mt-4">
        {firstName ? (
              <div className="textimg">
                <p className="text-white text-bold">Hello, {firstName}!</p>
                <img src="https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-monster-character-clip-art-png-image_11528822.png" alt="Greeting" width={60} height={60}/>
              </div>
            ) : (
              <p className="text-white text-bold">Hello, there!</p>
        )}
      </div>
    </>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
