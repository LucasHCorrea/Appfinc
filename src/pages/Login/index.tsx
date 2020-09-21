import React, { useRef, useCallback } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../Utils/getValidationErrors';

import { Container, Content } from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        password: Yup.string().required('Senha obrigatória').min(6),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      console.log(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <>
      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Nome App</h1>

            <Input name="name" icon={FaUserAlt} placeholder="Username" />

            <Input
              name="password"
              icon={FaLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit">Sign in</Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default Login;
