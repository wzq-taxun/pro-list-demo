import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    // 发送请求模拟注册
    // fetch('/api/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //     email,
    //     confirmPassword
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // 注册成功后跳转登录页面
    //     console.log(data)
    //   })
    //   .catch(error => console.error('Error:', error));

    axios.post('/api/login', {
      username,
      password,
      email,
      confirmPassword
    })
      .then((res) => {
        const { status } = res.data;
        if (!!status) {
          message.success('注册成功');
          // 跳转登录
          history.push('/home');
        } else {
          message.warning('信息不一致');
        }
      })
  };

  return (
    <Form onFinish={handleRegister}>
      <Form.Item rules={[
        {
          required: true,
          message: '请输入用户名！',
        },
        {
          pattern: /^[a-zA-Z0-9_-]{4,16}$/,
          message: '用户名必须是4到16位字母、数字、下划线或减号。',
        },
      ]}>
        <Input
          prefix={<UserOutlined />}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item rules={[
        {
          required: true,
          message: '请输入电子邮件地址！',
        },
        {
          type: 'email',
          message: '电子邮件地址格式不正确！',
        },
      ]}>
        <Input
          prefix={<UserOutlined />}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item rules={[
        {
          required: true,
          message: '请输入密码！',
        },
        {
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          message: '密码必须至少包含一个大写字母、一个小写字母、一个数字，并且长度不少于8位。',
        },
      ]}>
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item rules={[
        {
          required: true,
          message: '请输入密码！',
        },
        {
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          message: '密码必须至少包含一个大写字母、一个小写字母、一个数字，并且长度不少于8位。',
        },
      ]}>
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;