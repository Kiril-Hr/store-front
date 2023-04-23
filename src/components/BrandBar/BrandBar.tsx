import { useContext } from "react";
import { IBrandsType, IDeviceStoreType } from "../../utils/types";
import { Context } from "../..";
import { Card, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import classes from "./BrandBar.module.css";

const BrandBar = observer(() => {
  const { device } = useContext(Context) as {
    device: IDeviceStoreType;
  };

  return (
    <Row className="d-flex gap-2">
      {device.brands.map((brand) => (
        <Card
          border={
            brand.id === (device.selectedBrand as IBrandsType).id
              ? "danger"
              : "light"
          }
          key={brand.id}
          className={classes.card + " p-3 flex-shrink-0"}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
