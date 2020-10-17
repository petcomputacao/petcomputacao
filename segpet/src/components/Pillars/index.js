import React from 'react';
import './styles.css'

import {CardLeft, CardRight} from './Card';
import { FaLaptopCode,FaUniversity,FaGlobeAmericas } from "react-icons/fa";

function Pillars(){
  return (
    <div className="pillars_container">
      <div className="pillars_container_content">
        <CardLeft className="card" subtitle={"Ensino"} colorP={"#252B42"} colorS={"white"} icon={FaUniversity} text={"Os integrantes do PET Computação atuam fortemente no âmbito de ensino na universidade, participando voluntariamente como colaboradores de monitoria e fornecendo minicursos para toda a graduação."}/>
        <CardRight className="card" subtitle={"Pesquisa"} colorP={"white"} colorS={"#252B42"} icon={FaLaptopCode} text={"Todos os integrantes do PET Computação são incentivados a participar de algum projeto de pesquisa junto a um professor do Departamento de Ciência da Computação da nossa universidade."}/>
        <CardLeft className="card" subtitle={"Extensão"} colorP={"#252B42"} colorS={"white"} icon={FaGlobeAmericas} text={"O grupo PET Computação fornece apoio na área de informática para toda a comunidade de Campina Grande, principalmente atuando nas escolas públicas de Ensino Médio da nossa cidade."}/>
      </div>
    </div>
  );
}

export default Pillars;
