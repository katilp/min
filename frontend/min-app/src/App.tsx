import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Mineral from './pages/Mineral';
import About from './pages/About';



const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path='minerals/:id' element={<Mineral/>} />
				<Route path='about' element={<About/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
