import Mock from 'mockjs';

// 设置 Mock.js 的拦截规则
// Mock.setup({
//   timeout: '350-600'
// });

Mock.mock(/\/api\/login/, 'post', function (options) {
  const { username, password } = JSON.parse(options.body);
  if (username === 'admin' && password === '123456') {
    return {
      status: 200,
      message: 'Login successful!',
    };
  } else {
    return {
      status: 0,
      message: 'Invalid credentials!',
    };
  }
});

Mock.mock(/\/api\/register/, 'post', function (options) {
  const { username, password, confirmPassword, email } = JSON.parse(options.body);
  if (password === confirmPassword && username && email) {
    return {
      status: 200,
      message: 'Registration successful!',
    };
  } else {
    return {
      status: 0,
      message: 'Registration failed!',
    };
  }
});