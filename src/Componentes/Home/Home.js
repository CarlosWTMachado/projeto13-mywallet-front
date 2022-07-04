import { useNavigate, Link }  from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import styled from "styled-components";

export default function Home () {
	const navigate = useNavigate();
	const [existingTransactions, setExistingTransactions] = useState(false);

	return (
		<>
			<HomeBody>
				<HomeTitle>Olá, Fulano</HomeTitle>
				<TransactionsField>
					{!existingTransactions ? (<TranNull>Não há registros de<br/> entrada ou saída</TranNull>) : (<div></div>)}
				</TransactionsField>
				<NavigationButtons>
					<TransactionButton onClick={() => navigate('/entrada')}>Nova entrada</TransactionButton>
					<TransactionButton onClick={() => navigate('/saida')}>Nova saída</TransactionButton>
				</NavigationButtons>
			</HomeBody>
		</>
	);
}

const HomeBody = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const HomeTitle = styled.div`
    margin-top: 5px;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 25px;
    color: #FFFFFF;
`;

const TransactionsField = styled.div`
    margin-top: 10px;
    width: 326px;
    height: 446px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 5px;
`;

const TranNull = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    color: #868686;
`;

const TransactionButton = styled.div`
    width: 155px;
    height: 114px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background: #A328D6;
    border-radius: 8px;
`;

const NavigationButtons = styled.div`
    position: fixed;
    margin-top: 500px;
    display: flex;
    align-items: center;
    gap: 40px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
`;