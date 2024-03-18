import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import serviceDetails from "./serviceDetails";
// import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./services.css"; // Import your custom CSS file for styling

const Service = () => {
  // Function to chunk the serviceDetails array into groups of 3
  const chunkArray = (arr, chunkSize) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArr.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArr;
  };

  // Chunk the serviceDetails array into groups of 3
  const chunkedDetails = chunkArray(serviceDetails, 3);

  return (
    <div>
      <div className='cardmaindiv'>
        <Carousel interval={1000} pause={false} wrap={true}> {/* Auto sliding every 5 seconds */}
          {chunkedDetails.map((chunk, chunkIndex) => (
            <Carousel.Item key={chunkIndex}>
              <div className='servicescardmaindiv'>
                {chunk.map((item) => (
                  <Card key={item.id} className="maincardservices">
                      <img className='cardimageservices' src={require(`../assets/images/${item.image}.png`)} alt="" />
                      <Card.Body>
                        <Card.Text className='maincardservicesname'>
                          {item.servicename}
                        </Card.Text>
                        <Card.Text className='maincardservicesdetails'>
                          {item.Details}
                        </Card.Text>
                      </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Service;
