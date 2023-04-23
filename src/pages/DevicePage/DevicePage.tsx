import { useEffect, useState } from "react";
import {
  Container,
  Col,
  Image,
  Row,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";
import bigStar from "../../assets/star.svg";
import classes from "./DevicePage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDevice } from "../../query/deviceAPI";
import { IDevicesType } from "../../utils/types";
import { URL } from "../../utils/URL";
import { SHOP_ROUTE } from "../../utils/consts";

type Device = {
  device: IDevicesType | null;
  isLoading: boolean;
};

const DevicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [deviceData, setDevice] = useState<Device>({
    device: null,
    isLoading: true,
  });

  useEffect(() => {
    fetchDevice(id!)
      .then((data) =>
        setDevice({
          device: data,
          isLoading: false,
        })
      )
      .catch((err) => {
        alert(err);
        navigate(SHOP_ROUTE);
      });
  }, []);

  if (deviceData.isLoading) {
    return (
      <Spinner
        animation="border"
        style={{
          position: "absolute",
          left: "50%",
          bottom: "50%",
          transform: "translate(-50%; -50%)",
        }}
      />
    );
  }

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            src={`${URL}/${deviceData.device!.img}`}
            className={classes.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className={classes.title}>{deviceData.device!.name}</h2>
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
              {deviceData.device!.rating}
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
            <h3>From: {deviceData.device!.price} $</h3>
            <Button variant="outline-dark">Add to basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Characteristics</h1>
        {deviceData.device!.info.map((info, i) => (
          <Row
            key={info.number}
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
