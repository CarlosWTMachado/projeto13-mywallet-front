import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro/Cadastro";
import Login from "./Login/Login";
import Home from "./Home/Home.js";
import NovaEntrada from "./Home/NovaEntrada.js";
import NovaSaida from "./Home/NovaSaida.js";

export default function App () {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login/>} />
					<Route path="/cadastro" element={<Cadastro />} />
					<Route path="/home" element={<Home />} />
					<Route path="/entrada" element={<NovaEntrada />} />
					<Route path="/saida" element={<NovaSaida />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}