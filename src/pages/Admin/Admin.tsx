import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../../components/Modals/CreateBrand";
import CreateDevice from "../../components/Modals/CreateDevice";
import CreateType from "../../components/Modals/CreateType";

const Admin = () => {
  const [visibleEl, setVisibleEl] = useState({
    brand: false,
    type: false,
    device: false,
  });

  const visible = (el: string) => {
    setVisibleEl((prev) => ({
      ...prev,
      [el]: true,
    }));
  };

  const hide = (el: string) => {
    setVisibleEl((prev) => ({
      ...prev,
      [el]: false,
    }));
  };

  return (
    <Container className="d-flex flex-column">
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => visible("type")}
      >
        Add type
      </Button>
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => visible("brand")}
      >
        Add brand
      </Button>
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => visible("device")}
      >
        Add device
      </Button>
      <CreateBrand show={visibleEl.brand} onHide={() => hide("brand")} />
      <CreateDevice show={visibleEl.device} onHide={() => hide("device")} />
      <CreateType show={visibleEl.type} onHide={() => hide("type")} />
    </Container>
  );
};
export default Admin;
