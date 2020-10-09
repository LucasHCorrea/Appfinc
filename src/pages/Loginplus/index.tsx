import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { FaUserAlt, FaLock, FaEnvelope, FaUserPlus } from 'react-icons/fa';

import styled from 'styled-components';
import api from '../../services/api';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import GlobalStyle from '../../styles/global';
/* import { isDOMComponent } from 'react-dom/test-utils'; */
import getValidationErrors from '../../Utils/getValidationErrors';

import {
  Container,
  Content,
  Background,
  ContentHide,
  ContainerLogin,
} from './style';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  emailLogin: string;
  passwordlogin: string;
}

interface SingUpFormData {
  name: string;
  email: string;
  password: string;
}

const Loginplus: React.FC = () => {
  const formRefLogin = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const formRefSignup = useRef<FormHandles>(null);
  const [isOpen, setOpen] = useState(true);
  const history = useHistory();

  const { addToast } = useToast();

  const handleRegister = useCallback(
    async (data: SingUpFormData) => {
      try {
        formRefSignup.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/user', data);

        setOpen(true);

        addToast({
          type: 'sucess',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon na plataforma.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errorsSignup = getValidationErrors(err);

          formRefSignup.current?.setErrors(errorsSignup);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast],
  );

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRefLogin.current?.setErrors({});

        const schema = Yup.object().shape({
          emailLogin: Yup.string().required('E-mail obrigatório'),
          passwordlogin: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.emailLogin,
          password: data.passwordlogin,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRefLogin.current?.setErrors(errors);

          return;
        }
        // toast
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <>
      <Container>
        <Content isOpen={isOpen}>
          <Form ref={formRefSignup} onSubmit={handleRegister}>
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
            <FaUserPlus onClick={() => setOpen(!isOpen)} />
            <input onClick={() => setOpen(!isOpen)} type="button" />
          </ContentHide>
        </Content>
        <Background />
        <ContainerLogin>
          <Form ref={formRefLogin} onSubmit={handleSubmit}>
            <h1>Nome App</h1>
            <Input name="emailLogin" icon={FaEnvelope} placeholder="E-mail" />

            <Input
              name="passwordlogin"
              icon={FaLock}
              type="password"
              placeholder="Password"
            />

            <Button type="submit">Sign in</Button>
          </Form>
        </ContainerLogin>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default Loginplus;
