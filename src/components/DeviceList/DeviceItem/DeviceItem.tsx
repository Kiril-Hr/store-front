import { Card, Col, Image } from "react-bootstrap";
import classes from "./DeviceItem.module.css";
import { IDevicesType } from "../../../utils/types";
import star from "../../../assets/star.svg";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../../../utils/consts";

type Props = {
  device: IDevicesType;
};

const DeviceItem = ({ device }: Props) => {
  const navigate = useNavigate();

  return (
    <Col md={3} className="mt-3">
      <Card
        className={classes.card}
        border={"light"}
        onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}
      >
        <Image className={classes.img} src={device.img} />
        <div className="mt-1 d-flex justify-content-between align-items-center p-2 flex-column">
          <div className="d-flex">
            <div className="text-secondary">Brand name</div>
            <div className="d-flex justify-content-between align-items-center">
              {device.rating}
              <Image src={star} className={classes.star} />
            </div>
          </div>
          <div>{device.name}</div>
        </div>
      </Card>
    </Col>
  );
};
export default DeviceItem;
