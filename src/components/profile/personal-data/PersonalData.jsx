import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Form } from "react-bootstrap";

const PersonalData = () => {
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [userData, setUserData] = useState({
    name: "Anthony Hopkins",
    birthDate: "31/12/1937",
    phone: "+380 98 889 82 22",
    email: "anthony1937@gmail.com",
  });

  const [addressData, setAddressData] = useState({
    country: "Great Britain",
    city: "Margam",
    address: "20 Ffordd Derwen",
  });

  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h1>Personal data</h1>
      
      <Card className="mb-3 shadow-sm">
        <Card.Body>
          <Card.Title>User data</Card.Title>
          {isEditingUser ? (
            <>
              <Form.Control name="name" value={userData.name} onChange={handleUserChange} className="mb-2" />
              <Form.Control name="phone" value={userData.phone} onChange={handleUserChange} className="mb-2" />
              <Form.Control name="email" value={userData.email} onChange={handleUserChange} className="mb-2" />
              <Form.Control name="birthDate" value={userData.birthDate} onChange={handleUserChange} className="mb-2" />
              <Button variant="secondary" onClick={() => setIsEditingUser(false)} className="me-2">Cancel</Button>
              <Button variant="primary" onClick={() => setIsEditingUser(false)}>Save</Button>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Date of birth:</strong> {userData.birthDate}</p>
              <p><strong>Phone Number:</strong> {userData.phone}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <Button variant="outline-primary" onClick={() => setIsEditingUser(true)} className="">✎</Button>
            </>
          )}
        </Card.Body>
      </Card>

      {/* Address Data */}
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Address data</Card.Title>
          {isEditingAddress ? (
            <>
              <Form.Control name="country" value={addressData.country} onChange={handleAddressChange} className="mb-2" />
              <Form.Control name="city" value={addressData.city} onChange={handleAddressChange} className="mb-2" />
              <Form.Control name="address" value={addressData.address} onChange={handleAddressChange} className="mb-2" />
              <Button variant="secondary" onClick={() => setIsEditingAddress(false)} className="me-2">Cancel</Button>
              <Button variant="primary" onClick={() => setIsEditingAddress(false)}>Save</Button>
            </>
          ) : (
            <>
              <p><strong>Country:</strong> {addressData.country}</p>
              <p><strong>City:</strong> {addressData.city}</p>
              <p><strong>Address:</strong> {addressData.address}</p>
              <Button variant="outline-primary" onClick={() => setIsEditingAddress(true)} className="">✎</Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PersonalData;
