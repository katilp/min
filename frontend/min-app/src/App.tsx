import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mineral from './pages/Mineral';
import Header from './components/Header';


//TODO: change /minerals to /mineral/:id

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/minerals" element={<Mineral/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
