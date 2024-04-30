import React from "react";
import ReactDom from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; //due to this all bootstrap 5 components working 
import TicTacToe from "./Tic/TicTacToe";


ReactDom.render(
  <>
  <TicTacToe/>
  </>,
  document.getElementById('root')
)