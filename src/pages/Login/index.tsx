import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

import { Container, Content } from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => (
  <>
    <Container>
      <Content>
        <form>
          <h1>Nome App</h1>

          <Input name="Username" icon={FaUserAlt} placeholder="Username" />

          <Input
            name="Password"
            icon={FaLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Sign in</Button>
        </form>
      </Content>
    </Container>
  </>
);

export default Login;
