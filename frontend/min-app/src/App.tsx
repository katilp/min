import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Mineral from './pages/Mineral';


//TODO: change /minerals to /mineral/:id

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path='minerals/:id' element={<Mineral/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
