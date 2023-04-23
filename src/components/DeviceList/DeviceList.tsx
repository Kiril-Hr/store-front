import { useContext } from "react";
import { observer } from "mobx-react-lite";
import classes from "./DeviceList.module.css";
import { Context } from "../..";
import { IDeviceStoreType } from "../../utils/types";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem/DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context) as {
    device: IDeviceStoreType;
  };

  return (
    <Row className="d-flex flex-wrap">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});

export default DeviceList;
