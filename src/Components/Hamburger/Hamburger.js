import React, { useState } from 'react';
import './Hamburger.css';
import Item from '../Itens/Item';

const Hamburger = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const itens = [
    { title: "Sobre",
      link: "/teste"
    },
    { title: "Contato" },
    { title: "Regras" },
    { title: "Teste" },
    { title: "Teste 2" },
  ]

  return (
    <div className="sandwich-menu">
      <button className="sandwich-menu-button" onClick={toggleMenu} onMouseEnter={toggleMenu} >
        ☰
      </button> 
      {isOpen && (
        <ul className="sandwich-menu-list">
          {
            itens.map((item, index) => (
              <a href={item.link}>
                <Item key={index}>{item.title}</Item>
              </a>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default Hamburger;

/* passar um array de strings simples, cada item um string */