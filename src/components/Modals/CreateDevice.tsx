import { useContext, useState, useEffect, ChangeEvent } from "react";
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
import { IBrandsType, IDeviceStoreType, ITypesType } from "../../utils/types";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { createDevice, fetchBrands, fetchTypes } from "../../query/deviceAPI";
import { observer } from "mobx-react-lite";

type Props = {
  show: boolean;
  onHide: () => void;
};

type InfoProps = {
  title: string;
  description: string;
  number: number;
};

const CreateDevice = observer(({ show, onHide }: Props) => {
  const { device } = useContext(Context) as {
    device: IDeviceStoreType;
  };

  const [info, setInfo] = useState<InfoProps[]>([]);

  const [newDevice, setNewDevice] = useState({
    name: "",
    price: 0,
    file: null,
  });

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const putDeviceProp = (prop: string | number, some: any) => {
    setNewDevice((prev) => ({
      ...prev,
      [prop]: some,
    }));
  };

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number: number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    putDeviceProp("file", e.target.files![0]);
  };

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", newDevice.name);
    formData.append("price", `${newDevice.price}`);
    formData.append("img", newDevice.file!);
    formData.append("typeId", `${(device.selectedType as ITypesType).id}`);
    formData.append("brandId", `${(device.selectedBrand as IBrandsType).id}`);
    formData.append("info", JSON.stringify(info));
    createDevice(formData);
    setNewDevice({
      name: "",
      price: 0,
      file: null,
    });
    setInfo([]);
    device.setSelectedType({});
    device.setSelectedBrand({});
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
        <Modal.Title id="contained-modal-title-vcenter">
          Post device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <DropdownToggle>
              {(device.selectedType as ITypesType).name || "Choose type"}
            </DropdownToggle>
            <DropdownMenu>
              {device.types.map((type) => (
                <DropdownItem
                  key={type.id}
                  onClick={() => device.setSelectedType(type)}
                >
                  {type.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <DropdownToggle>
              {(device.selectedBrand as IBrandsType).name || "Choose brand"}
            </DropdownToggle>
            <DropdownMenu>
              {device.brands.map((brand) => (
                <DropdownItem
                  key={brand.id}
                  onClick={() => device.setSelectedBrand(brand)}
                >
                  {brand.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <FormControl
            className="mt-3"
            placeholder="Write device name"
            value={newDevice.name}
            onChange={(e) => putDeviceProp("name", e.target.value)}
          />
          <FormControl
            className="mt-3"
            placeholder="Write device price"
            type="number"
            value={newDevice.price}
            onChange={(e) => putDeviceProp("price", Number(e.target.value))}
          />
          <FormControl className="mt-3" type="file" onChange={selectFile} />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add new property
          </Button>
          {info.map((i) => (
            <Row key={i.number} className="mt-4">
              <Col md={4}>
                <FormControl
                  placeholder="Write name of property"
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                />
              </Col>
              <Col md={4}>
                <FormControl
                  placeholder="Write description of property"
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                />
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
        <Button variant="outline-success" onClick={addDevice}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
export default CreateDevice;
