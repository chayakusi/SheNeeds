import React, { useState } from 'react';
import { Form, Input, Radio } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import './Signup.css'

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [isOrganization, setIsOrganization] = useState(false);
  const [form] = Form.useForm();

  const handleOrganizationChange = (e) => {
    setIsOrganization(e.target.value);
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    handleSignup(values.email, values.password)
  };

  const handleSignup = async (email,password) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      console.log(userCredential);
      navigate('/login')
    } catch (error) {
      setError("User already signed up!")
    }
  }

  return (
    <div className='signup-container'>
      <h1>Signup</h1>
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Age" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" value = {email} onChange={setEmail} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password"  value = {password} onChange={setPassword} rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item name="contactNo" label="Contact No" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </Radio.Group>
        
      </Form.Item>

      <Form.Item name="isOrganization" label="Are you an organization?" rules={[{ required: true }]}>
        <Radio.Group onChange={handleOrganizationChange}>
          <Radio value={false}>No</Radio>
          <Radio value={true}>Yes</Radio>
        </Radio.Group>
      </Form.Item>
      {isOrganization && (
        <>
          <Form.Item name="organizationName" label="Organization Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Address" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          
        </>
      )}
      {error && <p className="error">{error}</p>}
      <Form.Item>
      <button className='signup-button' type="submit">Signup</button>
      </Form.Item>
    </Form>
      <div className='login_link'>
       Back to &nbsp;<Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Signup;


