import React from 'react';
import './styles.css'

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { FaEllipsisV } from 'react-icons/fa';

function FAQ(){
  const [expanded, setExpanded] = React.useState(false);
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const myStyleSheet = {'backgroundColor':'var(--primary)', 'color':'white', 'textAlign': 'justify'};

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
        <SingleAccordion panel={'panel1'} panelId={1} question={'O que é o PET?'} answer={'O Programa de Educação Tutorial foi criado para apoiar atividades que integram ensino pesquisa e extensão. O PET proporciona aos alunos, sob orientação de um tutor, a realização de atividades extracurriculares que complementem a formação acadêmica dos estudantes e, ao mesmo tempo, atendam necessidades do próprio curso de graduação.'}></SingleAccordion>
        <SingleAccordion panel={'panel2'} panelId={2} question={'O que é o PET Informática?'} answer={'PET-Informática é o PET do curso de Ciência da Computação da Universidade Federal de Pernambuco, composto por alunos bolsistas e não bolsistas, sob a orientação de um professor tutor, atualmente a professora Simone Santos.'}></SingleAccordion>
        <SingleAccordion panel={'panel3'} panelId={3} question={'Como entro no PET?'} answer={'Periodicamente, com a saída de antigos petianos, são abertas novas vagas para o grupo. A abertura do processo seletivo é divulgada na nossa página do Facebook através do lançamento do edital de Convocação. O processo seletivo se resume em três etapas: uma primeira, onde o candidato envia currículos e outros documentos sobre a vida acadêmica e a terceira, onde é realizada uma dinâmica em grupo e uma entrevista individual. O processo é aberto para alunos de Ciência da Computação da UFPE que estejam entre o 1º e o 7º período.'}></SingleAccordion>
        <SingleAccordion panel={'panel4'} panelId={4} question={'Quem pode participar do PET?'} answer={'Diretamente, apenas alunos de Ciência da Computação que não tenham nenhuma reprovação pendente no histórico escolar, mas alunos de outros cursos e funcionários são mais do que convidados a participarem como voluntários de atividades como Doação de Sangue e também OPEI conosco, além de assistirem as palestras e aos workshops.'}></SingleAccordion>
        <SingleAccordion panel={'panel5'} panelId={5} question={'Por que alunos de Engenharia da Computação não podem participar do PET?'} answer={'Quando um grupo PET é criado, ele fica associado a um curso de graduação da universidade e fica restrito àquele curso. Quando o PET-Informática foi criado, ele foi associado ao antigo curso de Informática, que foi substituído pelo curso de Ciência da Computação e por este motivo, só pode receber alunos desse curso.'}></SingleAccordion>
      </div>
    </div>
  );
}

export default FAQ;