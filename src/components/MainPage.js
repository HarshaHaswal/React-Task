import React, { useState } from 'react';
import './App.css';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Table,
} from 'reactstrap';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerName || !email || !phone || !address) {
      alert('Please fill in all fields.');
      return;
    }

    setFormData([
      ...formData,
      {
        customerName,
        email,
        phone,
        address,
      },
    ]);

    setCustomerName('');
    setEmail('');
    setPhone('');
    setAddress('');
    toggleModal();
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink onClick={toggleModal}>Open Form</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Customer Information</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="customerName">Customer Name</Label>
              <Input
                type="text"
                id="customerName"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormGroup>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>

      <div className="container mt-4">
        <h2>Customer Data</h2>
        <Table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.customerName}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;