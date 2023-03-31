import React, { useState } from "react";
import { Form, Input, Radio } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { auth, database } from "../firebase";

import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isOrganization, setIsOrganization] = useState(false);
  const [form] = Form.useForm();

  const handleOrganizationChange = (e) => {
    setIsOrganization(e.target.value);
  };

  const getLatLong = async (address) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=API_KEY`;
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const location = data.results[0].geometry.location;
        return { lat: location.lat, long: location.lng };
      });
  };

  const handleSignup = async (values) => {
    const {
      email,
      password,
      name,
      age,
      contactNo,
      gender,
      isOrganization,
      organizationName,
      address,
      zipcode,
      inventory,
    } = values;
  
    try {
      if (isOrganization) {
        const data = await getLatLong(address);
        const userCredential = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        const uid = userCredential.user.uid;
        await database.ref(`users/${uid}`).set({
          name: name,
          age: age,
          contactNo: contactNo,
          gender: gender,
          isOrganization: isOrganization,
        });
        await database.ref(`organizations/${uid}`).set({
          organizationName: organizationName,
          address: address,
          zipcode: zipcode,
          inventory: inventory,
          latitude: data.lat,
          longitude: data.long,
        });
        navigate('/login')
      } else {
        const userCredential = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        const uid = userCredential.user.uid;
        await database.ref(`users/${uid}`).set({
          name: name,
          age: age,
          contactNo: contactNo,
          gender: gender,
          isOrganization: isOrganization,
        });
        navigate('/login')
      }
    } catch (error) {
      setError("There was an error signing up. Please try again later.");
    }
  };
  

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    handleSignup(values);
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          value={email}
          onChange={setEmail}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          value={password}
          onChange={setPassword}
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="contactNo"
          label="Contact No"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="isOrganization"
          label="Are you an organization(DropBox)?"
          rules={[{ required: true }]}
        >
          <Radio.Group onChange={handleOrganizationChange}>
            <Radio value={false}>No</Radio>
            <Radio value={true}>Yes</Radio>
          </Radio.Group>
        </Form.Item>
        {isOrganization && (
          <>
            <Form.Item
              name="organizationName"
              label="Organization Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="zipcode"
              label="Zip Code"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="inventory"
              label="Inventory size"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </>
        )}
        {error && <p className="error">{error}</p>}
        <Form.Item>
          <button className="signup-button" type="submit">
            Signup
          </button>
        </Form.Item>
      </Form>
      <div className="login_link">
        Back to &nbsp;<Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Signup;
