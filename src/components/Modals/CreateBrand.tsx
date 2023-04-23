import { useState } from "react";
import { createBrand } from "../../query/deviceAPI";
import { Button, Form, FormControl, Modal } from "react-bootstrap";

type Props = {
  show: boolean;
  onHide: () => void;
};

const CreateBrand = ({ show, onHide }: Props) => {
  const [brand, setBrand] = useState("");

  const addBrand = () => {
    createBrand({
      name: brand,
    }).then(() => setBrand(""));
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormControl
            placeholder="Write type name"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateBrand;
