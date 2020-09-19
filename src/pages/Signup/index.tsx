import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';

import styled from 'styled-components';
import getValidationErrors from '../../Utils/getValidationErrors';
import { Container, Content, Background, ContentHide } from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('No mínimo 6 dígitos').min(6),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>

        <ContentHide>
          <button type="submit"> </button>
        </ContentHide>
      </Content>
      <Background />
    </Container>
  );
};

export default Signup;
