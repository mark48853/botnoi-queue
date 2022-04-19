import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import ConfirmationBox from './components/ComfirmationBox';
import CurrentQueue from './components/CurrentQueue';
import ManualForm from './components/ManualForm';

const confirmationZone = ReactDOM.createRoot(document.getElementById('confirmation-zone'));
const show = ReactDOM.createRoot(document.getElementById('show'));
const manualRegis = ReactDOM.createRoot(document.getElementById('manual'));


show.render(
    <CurrentQueue />
)


manualRegis.render(
    <ManualForm />
)

confirmationZone.render(
    <ConfirmationBox />
)