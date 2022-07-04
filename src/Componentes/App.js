import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro/Cadastro";
import Login from "./Login/Login";

export default function App () {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login/>} />
					<Route path="/cadastro" element={<Cadastro />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}