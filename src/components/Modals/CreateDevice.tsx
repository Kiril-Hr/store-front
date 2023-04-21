import { useContext, useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  Form,
  FormControl,
  Modal,
  Row,
} from "react-bootstrap";
import { Context } from "../..";
import { IDeviceStoreType } from "../../utils/types";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

type Props = {
  show: boolean;
  onHide: () => void;
};

type InfoProps = {
  title: string;
  description: string;
  number: number;
};

const CreateDevice = ({ show, onHide }: Props) => {
  const [info, setInfo] = useState<InfoProps[]>([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const { device } = useContext(Context) as {
    device: IDeviceStoreType;
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
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <DropdownToggle>Choose type</DropdownToggle>
            <DropdownMenu>
              {device._types.map((type) => (
                <DropdownItem key={type.id}>{type.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <DropdownToggle>Choose brand</DropdownToggle>
            <DropdownMenu>
              {device._brands.map((brand) => (
                <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <FormControl className="mt-3" placeholder="Write device name" />
          <FormControl
            className="mt-3"
            placeholder="Write device price"
            type="number"
          />
          <FormControl className="mt-3" type="file" />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add new property
          </Button>
          {info.map((i) => (
            <Row key={i.number} className="mt-4">
              <Col md={4}>
                <FormControl placeholder="Write name of property" />
              </Col>
              <Col md={4}>
                <FormControl placeholder="Write description of property" />
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(i.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CreateDevice;
