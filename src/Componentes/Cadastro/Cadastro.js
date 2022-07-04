import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function Cadastro () {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		confirm_password: ''
	});
	const navigate = useNavigate();

	function handleForm (e) {
		setForm({...form, [e.target.name]: e.target.value,});
	}

	function doSubmit (event) {
		event.preventDefault();
		axios.post('http://localhost:5000/cadastro', {
			nome: form.name,
			email: form.email,
			senha: form.password,
			confirma_senha: form.confirm_password
		}).then(response => {
			const {data} = response;
			console.log(data)
			navigate ('/');
		}).catch(error => console.log(error));
	}

	return (
		<SignUpContainer>
			<LogoContainer>MyWallet</LogoContainer>
			<Input type='text' placeholder='Nome' value={form.name} name='name' onChange={handleForm} required/>
			<Input type='email' placeholder='E-mail' value={form.email} name='email' onChange={handleForm} required/>
			<Input type='password' placeholder='Senha' value={form.password} name='password' onChange={handleForm} required/>
			<Input type='password' placeholder='Confirme a senha' value={form.confirm_password} name='confirm_password' onChange={handleForm} required/>
			<Button onClick={doSubmit}>CADASTRAR</Button>
			<StyledLink to='/'>Já possui uma conta? Entre!</StyledLink>
		</SignUpContainer>
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

const SignUpContainer = styled.div`
	margin-top: 200px;
	margin-left: 7px;
	height: 100%;
	width: 375px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Roboto', sans-serif;
`;

const StyledLink = styled(Link)`
	margin-top: 15px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFFFFF;
	font-family: 'Roboto', sans-serif;
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