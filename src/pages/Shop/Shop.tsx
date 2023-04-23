import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import TypeBar from "../../components/TypeBar/TypeBar";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { IBrandsType, IDeviceStoreType, ITypesType } from "../../utils/types";
import { fetchBrands, fetchDevices, fetchTypes } from "../../query/deviceAPI";
import Pages from "../../components/Pagination/Pages";

const Shop = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  const { device } = useContext(Context) as {
    device: IDeviceStoreType;
  };

  const limit = 2;

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(null, null, 1, limit).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDevices(
      (device.selectedType as ITypesType).id,
      (device.selectedBrand as IBrandsType).id,
      device.page,
      limit
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
      device.setLimit(limit);
    });
  }, [device.page, device.selectedType, device.setSelectedBrand]);

  if (isLoading) {
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
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});
export default Shop;
