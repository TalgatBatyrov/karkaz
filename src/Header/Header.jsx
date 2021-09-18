import React from 'react';
import s from './Header.module.css';

function Header() {
    return (
        <div className={s.Header}>
            <img className={s.icon} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQtMikBYuEhrR8_9DmuZzdJxetEcqh6vDqg&usqp=CAU" />
            <h4>Каркасный дом — это быстровозводимая конструкция, в которой все несущие элементы связаны между собой. Каркасное домостроение является основным типом малоэтажного строительства в Скандинавии, Финляндии, Германии, США, Канаде и Японии.</h4>
        </div>
    )
}

export default Header