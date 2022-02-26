import React from "react";
import "./Button.css";  

export default (props) =>   //Template String: ``
    //1- Se for passada a props operation for passada para o botão adicione a classe operation 
    //2 - Se a classe double for passada adicione ao botão a classe double senão n coloque nd
    //3 - msm coisa com a props.triple
    <button 
    onClick={(e) => props.click && props.click(props.label)} //O contêudo do elemento será passado para a função click
    className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>     
        {props.label}
    </button> 
        

