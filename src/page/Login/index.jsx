import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [messageApi, contextHolder] = message.useMessage();


  const handleLogin = () => {
    // 发送请求模拟登录
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));

    axios.post('/api/login', { username, password })
      .then((res) => {
        const { status } = res.data;
        if (!!status) {
          message.success('登录成功')
        } else {
          message.warning('账号 admin / 密码 123456');
        }
      })
  };

  return (
    <Form onFinish={handleLogin}>
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
      <Form.Item>
        {/* <Button type="primary" htmlType="submit">
          登录
        </Button> */}
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        或  没有账号？<Link to="/register">注册</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;