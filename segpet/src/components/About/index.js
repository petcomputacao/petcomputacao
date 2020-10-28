import React from 'react';
import './styles.css'

function About(){
  var img1= 'https://dl.dropboxusercontent.com/s/qivj6r51dpoho6n/slide0.jpg';

  return (
    <div className="about_container">
      <p className="about_text_title">Sobre o PET</p>
    
      
      <div className="about_container_image">
      <img className="about_image_left" src={img1} alt="Sobre o PET"/>
        <p className="about_text_right">
          
          O PET - Programa de Educação Tutorial - foi criado e implantado em 1979, com o nome inicial de Programa Especial de Treinamento, pela CAPES. A partir do ano 2000, o programa passou a ser vinculado à Secretaria de Educação Superior - SESu/MEC.          
          <p className="x">Caracterizado pela atuação na tríade de uma universidade (a pesquisa, o ensino e a extensão), o Programa de Educação Tutorial é destinado a grupos de alunos que demonstrem potencial, interesse e habilidades destacadas em cursos de graduação das Instituições de Ensino Superior. Espera-se do aluno capacidade de leitura, pesquisa, iniciativa, crítica, trabalho em equipe, expressão oral e argumentação.</p>
          <p className="x">Os alunos são selecionados e ingressam no Programa a partir do segundo semestre do curso. Até o final da graduação, são comprometidos com vinte horas semanais de dedicação ao PET, sendo necessário manter o coeficiente de rendimento acadêmico (CRA) igual ou superior a 6 (seis) e admitida, no máximo, uma reprovação curricular.</p>
        </p>
      </div>

      <p className="about_text_center">O PET é integrado por grupos tutoriais de aprendizagem, e busca propiciar aos alunos, sob a orientação de um professor tutor e atuação coletiva, condições para a realização de atividades extracurriculares, que complementem a sua formação acadêmica, procurando atender mais plenamente às necessidades do próprio curso de graduação e/ou ampliar e aprofundar os objetivos e os conteúdos programáticos que integram sua grade curricular. Nesse sentido, o objetivo é proporcionar uma melhoria da qualidade acadêmica dos cursos de graduação apoiados pelo PET.</p>
      <p className="about_text_center">As atividades extracurriculares que compõem o Programa têm como objetivo garantir aos alunos do curso oportunidades de vivenciar experiências não presentes em estruturas curriculares convencionais, visando a sua formação global e favorecendo a formação acadêmica, tanto para a integração no mercado profissional como para o desenvolvimento de estudos em programas de pós-graduação.</p>
      <p className="about_text_center">O Programa de Educação Tutorial constitui-se, portanto, em uma modalidade de investimento acadêmico em cursos de graduação que têm sérios compromissos epistemológicos, pedagógicos, éticos e sociais. Com uma concepção baseada nos moldes de grupos tutoriais de aprendizagem, o PET não visa apenas proporcionar aos seus alunos e demais graduandos do curso uma gama nova e diversificada de conhecimento acadêmico, mas assume a responsabilidade de contribuir para sua melhor qualificação como pessoa humana e como membro da sociedade.</p>
      <p className="about_text_center">Tendo iniciado com apenas três grupos, a título de experiência, hoje conta com mais de 842 grupos distribuídos entre 121 instituições de ensino superior públicas e privadas de todo o país, envolvendo mais de 10.000 estudantes. Na Universidade Federal de Campina Grande (UFCG), são ao todo dez grupos PET: Administração, Antropologia, Computação, Economia, Engenharia Elétrica, Engenharia Química, História, Letras, Matemática e Pedagogia.</p>
      
      <p className="about_text_title">O Grupo PET Computação UFCG</p>

      <div className="about_container_image">
        <p className="about_text_left">
          O Grupo PET Computação da UFCG (outrora Universidade Federal da Paraíba - UFPB, Campus II) foi implantado em abril de 1992 sob a tutoria da Profa. Dra. Maria de Fátima Camêlo, que permaneceu durante quase seis anos. Nesse período, as atividades centrais consistiam em minicursos, pesquisas científicas e seminários.       
          <p>Com a substituição da Profa. Maria de Fátima Camêlo pelo Prof. Dr. Jacques Philippe Sauvé na tutoria do Programa, em 1998, foi dada continuidade às atividades anteriormente destacadas, sendo priorizadas as pesquisas científicas individuais.</p>
        </p>
        <img className="about_image_right" src={img1} alt="O grupo PET Computação UFCG"/>
      </div>
        <p className="about_text_center">A partir de 2000, após três anos à frente do Programa, o Prof. Dr. Jacques passou à Profa. Dra. Francilene Procópio Garcia a responsabilidade da tutoria, sendo possível destacar, nessa época, a criação do easYProcess (YP), motivada pela necessidade de se utilizar melhores práticas para desenvolvimento de software no meio acadêmico, que possibilitassem maior sucesso na implementação de projetos oferecidos em algumas disciplinas.</p>

      <p className="about_text_center">Devido à incompatibilidade de horários da Profa. Dra. Francilene, ocorreu sua substituição pela Profa. Dra. Joseana Macêdo Fechine Régis de Araújo na tutoria do Programa, a partir de agosto de 2004. A rápida identificação desta com o Programa e com o grupo, impulsionou o grande avanço das atividades do grupo, tentando abranger de forma igualitária as diversas áreas de atuação do grupo. Seguindo seu princípio de que vários professores do departamento devem ter a oportunidade de passar por uma experiência como a tutoria do PET, a professora Joseana deixa de ser tutora em novembro de 2012.</p>
      <p className="about_text_center">A partir de novembro de 2012 quem assumiu a tutoria do grupo foi a Profa. Dra. Lívia Maria Rodrigues Sampaio Campos, que anteriormente, tinha sido petiana durante sua graduação em Ciência da Computação (UFCG) na época em que o Programa se chamava Programa Especial de Treinamento. A bagagem da professora ajudou na sua rápida identificação e adaptação com as atividades do grupo. Sua gestão trouxe várias ideis de inovações para as atividades, por exemplo: uso de ferramentas Google para gestão de dados, os conceitos de líder, uso de Blog como veículo de informação, a nova cara do site do grupo e etc. A professora Lívia deixa de ser tutora em setembro de 2015.</p>
      <p className="about_text_center">Atualmente, o grupo segue sob tutoria da Prof. Dr. Marcelo Alves de Barros, professor do curso de Ciência da Computação (UFCG) e criador do Atelier de Computação e Cultura da UFCG.</p>
      <p className="about_text_center">O Grupo PET Computação da UFCG continua trabalhando com a tríade Ensino, Pesquisa e Extensão, de maneira indissociável, para atingir o principal objetivo do programa: melhorar o curso no qual está inserido e a sociedade como um todo.</p>
    </div>
  );
}

export default About;