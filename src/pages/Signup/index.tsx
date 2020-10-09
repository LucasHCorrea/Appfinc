import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FaUserAlt, FaLock, FaEnvelope, FaUserPlus } from 'react-icons/fa';

import styled from 'styled-components';
/* import { isDOMComponent } from 'react-dom/test-utils'; */
import getValidationErrors from '../../Utils/getValidationErrors';

import { Container, Content, Background, ContentHide } from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isOpen, setOpen] = useState(false);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required().min(6, 'No mínimo 6 dígitos'),
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
      <Content isOpen={isOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Sign up</h1>

          <Input name="name" icon={FaUserAlt} placeholder="Username" />
          <Input name="email" icon={FaEnvelope} placeholder="E-mail" />
          <Input
            name="password"
            icon={FaLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Sign up</Button>
        </Form>

        <ContentHide isOpen={isOpen}>
          <FaUserPlus />
          <input onClick={() => setOpen(!isOpen)} type="button" />
        </ContentHide>
      </Content>
      <Background />
    </Container>
  );
};

export default Signup;
