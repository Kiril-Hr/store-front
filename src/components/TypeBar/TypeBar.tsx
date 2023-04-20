import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { IDeviceStoreType, ITypesType } from "../../utils/types";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import classes from "./TypeBar.module.css";

const TypeBar = observer(() => {
  const { device } = useContext(Context) as {
    device: IDeviceStoreType;
  };

  return (
    <ListGroup>
      {device._types.map((type) => (
        <ListGroupItem
          className={classes.item}
          active={type.id === (device._selectedType as ITypesType).id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
});
export default TypeBar;
