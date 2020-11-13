import React from 'react';
import './styles.css'

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function FAQ(){
  const [expanded, setExpanded] = React.useState(false);
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const myStyleSheet ={'backgroundColor':'var(--primary)', 'color':'white', 'textAlign': 'justify',"-moz-transition": "all 0.3s", "-webkit-transition": "all 0.3s", "transition": "all 0.5s"};

  function SingleAccordion(props){
    var panel = props.panel;
    
    return(
      <Accordion style={myStyleSheet} expanded={expanded === panel} onChange={handleChange(panel)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon style={myStyleSheet}/>} id={props.panelId}>
          <FaEllipsisV className='accordion_item_logo'/>{props.question}</AccordionSummary>
        <AccordionDetails style={myStyleSheet}>{props.answer}</AccordionDetails>
      </Accordion>
    );
  }

  return(
    <div className='faq_container'>
      <div className={'faq_container_content'}>
        <p className='faq_item_title'>FAQ</p>
        <SingleAccordion panel={'panel1'} panelId={1} question={'O que é o PET?'} answer={<p>É um programa do Governo Federal brasileiro de estímulo a atividades de pesquisa, ensino e extensão universitárias, no nível de graduação. O programa é subordinado à Secretaria de Ensino Superior (SESu) do Ministério da Educação (MEC).</p>}></SingleAccordion>
        <SingleAccordion panel={'panel2'} panelId={2} question={'Quem pode entrar no PET?'} answer={<ul><li>Alunos regularmente matriculados no curso de graduação em Ciência da Computação.</li><li>Ter concluído o primeiro período do curso e ter pelo menos dois períodos completos restantes a serem cursados para a conclusão do curso.</li><li>Possuir Coeficiente de Rendimento Acadêmico (CRA) maior ou igual a 6,0 (seis).</li><li>Possuir 20h para se dedicar ao programa.</li></ul>}></SingleAccordion>
        <SingleAccordion panel={'panel3'} panelId={3} question={'Com ser um integrante do PET?'} answer={'Deve ser aprovado no processo seletivo, que é aberto quando o programa está com vagas para serem preenchidas.'}></SingleAccordion>
        <SingleAccordion panel={'panel4'} panelId={4} question={'Os petianos recebem bolsa?'} answer={'Atualmente o PET conta com 12 vagas para bolsistas e 6 vagas para não bolsistas. O valor da bolsa é R$400,00. Não há distinção nas atribuições e responsabilidades dos bolsistas e não bolsistas.'}></SingleAccordion>
        <SingleAccordion panel={'panel5'} panelId={5} question={'O que os petianos fazem?'} answer={<p>Cada petiano é coordenador de uma atividade dentro das diversas que estão apresentas <Link to="/atividades">aqui</Link> e membro das demais. Além disso, auxiliamos em algumas atividades no contexto universitário, como organizações de eventos e também auxiliamos escolas que querem apresentar aos alunos conceitos da computação.</p>}></SingleAccordion>
        <SingleAccordion panel={'panel6'} panelId={6} question={'É possível que um petiano não possua os requisitos para continuar no PET?'} answer={'Sim. Caso o integrante acumule duas reprovações depois de ter ingressado não pode continuar no PET.'}></SingleAccordion>

      </div>
    </div>
  );
}

export default FAQ;