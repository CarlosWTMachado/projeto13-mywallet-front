import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from "styled-components";

export default function NovaEntrada () {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    return (
        <Entrance>
            <PageTitle>Nova entrada</PageTitle>
            <Input type={'text'} placeholder={'Valor'} value={value} onChange={(e) => setValue(e.target.value)}/>
            <Input type={'text'} placeholder={'Descrição'} value={description} onChange={(e) => setDescription(e.target.value)}/>
            <Button onClick={navigate('/home')}>Salvar entrada</Button>
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