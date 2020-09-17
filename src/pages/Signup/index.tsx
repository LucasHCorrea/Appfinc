import React from 'react';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';

import { Container, Content, Background, ContentHide } from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Sign up</h1>

        <Input name="Username" icon={FaUserAlt} placeholder="Username" />
        <Input name="Email" icon={FaEnvelope} placeholder="E-mail" />
        <Input
          name="Password"
          icon={FaLock}
          type="password"
          placeholder="Password"
        />

        <Button type="submit">Sign up</Button>
      </form>

      <ContentHide>
        <button type="submit"> </button>
      </ContentHide>
    </Content>
    <Background />
  </Container>
);

export default Signup;
