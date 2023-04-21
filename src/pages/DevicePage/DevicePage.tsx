import { Container, Col, Image, Row, Card, Button } from "react-bootstrap";
import bigStar from "../../assets/star.svg";
import classes from "./DevicePage.module.css";

const DevicePage = () => {
  const device = {
    id: 5,
    name: "Iphone 12pro",
    price: 2500,
    rating: 5,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-max-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202944000",
  };
  const description = [
    { id: 1, title: "RAM", description: "5 GB" },
    { id: 2, title: "Camera", description: "12 Mp" },
    { id: 3, title: "Processor", description: "Intel" },
    { id: 4, title: "Q-ty of cores", description: "2" },
    { id: 5, title: "Accumulator", description: "4000" },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image src={device.img} className={classes.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className={classes.title}>{device.name}</h2>
            <div
              className=" d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: "2.5rem",
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: "1.6rem",
              border: "5px solid lightgrey",
            }}
          >
            <h3>From: {device.price} $</h3>
            <Button variant="outline-dark">Add to basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Characteristics</h1>
        {description.map((info, i) => (
          <Row
            key={info.id}
            style={{
              background: i % 2 === 0 ? "lightgrey" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};
export default DevicePage;
