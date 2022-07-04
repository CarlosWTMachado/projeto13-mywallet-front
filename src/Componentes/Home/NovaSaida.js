import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

export default function NovaSaida () {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		valor: '',
		descricao: '',
	});

	function handleForm (e) {
		setForm({...form, [e.target.name]: e.target.value,});
	}

	function doSubmit (event) {
		event.preventDefault();
		axios.post('https://back-projeto13.herokuapp.com/saida', {
			valor: form.valor,
			descricao: form.descricao
		},{
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('MyWalletToken')}` 
			}
		}).then(response => {
			const {data} = response;
			console.log(data)
			navigate ('/home');
			/*
			,{state: {
				image: data.image,
			}});
			*/
		}).catch(error => console.log(error));
	}

    return (

        <Entrance>
            <PageTitle>Nova saída</PageTitle>
            <Input type={'text'} placeholder={'Valor'} name='valor' value={form.valor} onChange={handleForm}/>
            <Input type={'text'} placeholder={'Descrição'} name='descricao' value={form.descricao} onChange={handleForm}/>
            <Button onClick={doSubmit}>Salvar saída</Button>
        </Entrance>

    );

}

const Entrance = styled.div`

    margin-left: 15px;

`;

const PageTitle = styled.div`

    margin-top: 50px;
    margin-bottom: 30px;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 25px;
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