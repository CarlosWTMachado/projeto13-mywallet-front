import { useNavigate, Link }  from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import styled from "styled-components";

export default function Login () {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	function handleForm (e) {
		setForm({...form, [e.target.name]: e.target.value,});
	}

	function doSubmit (event) {
		event.preventDefault();

		axios.post('https://back-projeto13.herokuapp.com/login', {
			email: form.email,
			senha: form.password
		}).then(response => {
			const {data} = response;
			console.log(data)
			localStorage.setItem('MyWalletToken', data);
			navigate ('/home');
			/*
			,{state: {
				image: data.image,
			}});
			*/
		}).catch(error => console.log(error));
	}

	return (
		<LoginContainer>
			<LogoContainer>MyWallet</LogoContainer>
			<Input type='text' placeholder='E-mail' value={form.email} name='email' onChange={handleForm} required/>
			<Input type='password' placeholder='Senha' value={form.password} name='password' onChange={handleForm} required/>
			<Button onClick={doSubmit}>Entrar</Button>
			<StyledLink to='/cadastro'>Primeira vez? Cadastre-se!</StyledLink>
		</LoginContainer>
	);
}

const LogoContainer = styled.div`
	left: 113px;
	top: 95px;
	font-family: 'Saira Stencil One';
	font-style: normal;
	font-weight: 400;
	font-size: 32px;
	color: #FFFFFF;
`;

const LoginContainer = styled.div`
	height: 100vh;
	width: 340px;
	padding: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Roboto', sans-serif;
`;

const StyledLink = styled(Link)`
	height: 15px;
	width: 340px;
	padding: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Roboto', sans-serif;
	color: #FFFFFF;
`;

const Input = styled.input`
	height: 70px;
	width: 353px;
	border: 1px solid transparent;
	background-color: #FFFFFF;
	color: #888;
	font-family: 'Roboto', sans-serif;
	margin-bottom: 20px;
	border-radius: 8px;
`;

const Button = styled.div`
	width: 360px;
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFFFF;
	background: #A328D6;
	border-radius: 8px;
`;