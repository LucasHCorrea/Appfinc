import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

import { Container, Content } from './style';

const Login: React.FC = () => (
  <>
    <Container>
      <Content>
        <form>
          <h1>Nome App</h1>
          <FaUserAlt />
          <FaLock />
          <input placeholder="Username" />

          <input type="password" placeholder="Password" />
          <button type="submit">Sign in</button>
        </form>
      </Content>
    </Container>
  </>
);

export default Login;
