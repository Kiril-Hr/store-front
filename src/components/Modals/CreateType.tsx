import { useState } from "react";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
import { createType } from "../../query/deviceAPI";

type Props = {
  show: boolean;
  onHide: () => void;
};

const CreateType = ({ show, onHide }: Props) => {
  const [type, setType] = useState("");

  const addType = () => {
    createType({
      name: type,
    }).then(() => setType(""));
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
        <Modal.Title id="contained-modal-title-vcenter">Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormControl
            placeholder="Write type name"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addType}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateType;
