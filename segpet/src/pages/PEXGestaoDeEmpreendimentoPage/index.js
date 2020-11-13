import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PEXTemplate from '../../components/PEXTemplate';

function PEXGestaoDeEmpreendimentoPage(){
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return(
    <>
      <Header/>
      <PEXTemplate>
        <p className="pex_title">PEX GESTÃO DE EMPREENDIMENTO</p>
        <p className="pex_text">O PEX Gestão de empreendimento foi proposto pelo atual tutor do grupo com o intuito de aglomerar atividades de gerência de um empreendimento. O grupo PET é constituído por várias atividades que o torna característico da portaria que lhe é regido, mas também é composto por atividades de gerência de processos organizacionais. Tais atividades objetivam a construção não unicamente de processos organizacionais eficientes mas como de verdadeiras metodologias de gestão de empreendimentos. A gestão contribui de forma positiva na formação complementar dos petianos e no auxílio dos processos envolvidoss com o ambiente petiano trazendo soluções organizacionais muitas vezes presentes e cobrados pelo mercado de trabalho de excelência.</p>
        <p className="pex_subtitle">Objetivo</p>

        <ul className="pex_list">
          <li>Estimular a construção de conhecimento por parte dos integrantes do grupo PET</li>
          <li>Estimular a construção de metodologias de gestão de atividades</li>
          <li>Estimular a capacidade de planejamento e execução de planejamento</li>
        </ul>
        
        <p className="pex_title">Atividade Pesquisa</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">A atividade de pesquisa visa capacitar os participantes em iniciação a aplicação do método científico. Os participantes irão aprender o que significam e como desenvolver as etapas comumente encontradas no processo de geração de conhecimento utilizando os métodos científicos devidamente apropriados.</p>

        <p className="pex_title">Gerência de Acesso às contas</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">O grupo PET possui várias contas de acesso. Pode-se citar por exemplo: Gmail, Dropbox, Instagram, Facebook, Github e etc. Cada conta é composta por usuários e senhas. Estas informações precisam ser reunidas e mantidas em locais seguros e de fácil acesso a todos os integrantes para que eles possam realizar as suas funções.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Reuir e manter as informações das contas de acesso do grupo.</p>

        <p className="pex_title">MSDNAA</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">O MSDN Academic Alliance (MSDNAA) é o modo mais fácil e simples de conectar laboratórios, salas de aula e computadores de estudantes aos últimos lançamentos da Microsoft. Para mais informações sobre o MSDNAA UFCG     <a className="pex_link" href="https://sites.google.com/site/ufcgmsdnaa/" target="_blank" rel="noopener noreferrer">clique aqui</a>.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Criar e manter contas de usuários Microsoft DreamSpark vinculados à UFCG tornando as ferramentas, plataformas e softwares da Microsoft mais acessíveis para instituições acadêmicas e criar uma comunidade onde estas tecnologias possam ser utilizadas e compartilhadas da melhor forma possível.</p>

        <p className="pex_title">Assessoria de Comunicação</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Equipe responsável por gerir os principais meios de comunicação do grupo PET. Pode-se dizer que esta equipe atua como uma ponte de comunicação entre demais interessados e o próprio grupo. São exemplos de meios de comunicação do grupo: e-mail, redes sociais, blog e etc. Todos do grupo PET contribuem nos meios de comunicação mas o planejamento de atividades relacionadas a comunicação com o interessados serão de responsabilidade da equipe de assessoria.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Além de melhorar a capacidade de desenvolver skills referentes à comunicação é objetivo desta atividade fazer a gestão e garantir a manutenção dos meios de comunicação do grupo.</p>

        <p className="pex_title">WebMaster</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Equipe responsável por fazer a gestão do site do grupo PET. Dentre as atribuições desta equipe estão: manutenção da estrutura do site, correção de bugs encontrados, atualização de informações no site (ex: egressos), atualização do site no servidor que hospeda o site com alterações realizadas.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Além de melhorar a capacidade de desenvolver skills referentes às tecnologias envolvidas nesta atividade, objetiva o aprendizado de garantir a manutenabilidade e gestão de um site web.</p>

        <p className="pex_title">Seleção de Novos Integrantes</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Atividade voltada para elaboração da proposta de seleção/edital, acompanhamento do processo, envolvimento das principais atividades/etapas, realização da avaliação de concorrentes à vagas, organização do espaço e material, e etc. Trata-se de uma atividade bastante importante para garantir a manutenção de integrantes com verdadeiros atributos petianos.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Além de desenvolver a capacidade de avaliação de candidatos esta atividade proporciona uma visão crítica sobre processos de seleções bem organizados e comumente encontrados.</p>

        <p className="pex_title">Manutenção das Máquinas</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Equipe responsável por fornecer e garantir a manutenabilidade das máquina localizadas na sala de máquinas do grupo PET. Fazem parte das atribuições desta equipe o fornecimento de diagnósticos das máquinas, sugestão de soluções para os problemas encontrados, fornecimento de instruções de uso aos integrantes, geração de infraestrutura de rede adequada e etc.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Além de melhorar a capacidade de desenvolver skills referentes às tecnologias envolvidas nesta atividade, objetiva o aprendizado de garantir a manutenabilidade e gestão de hardware.</p>

        <p className="pex_title">Reunião de Tutores</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Reunião dos 19 tutores do PET UFCG e dos membros do CLAA, na qual são analisadas e planejadas as atividades de todos os grupos, buscando-se o alinhamento das ações destes com a ações institucionais da Pro-Reitoria de Ensino da UFCG. O Tutor é membro nato deste Conselho e atua como promotor do papel da Ciência da Computação como área meio e das TICs como recursos de apoio para a consecução dos objetivos do PET junto às comunidades internas e externas da UFCG.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Permitir ao tutor apresentar sugestões de ações e propostas de cooperação intra e interinstitucionais, públicas e privadas, para ampliar os impactos do PET nos cursos e nas comunidades servidas pela UFCG no entorno de Campina Grande. Além das reuniões de tutores na UFCG, o tutor participa de grupos de trabalho de tutores de outras instituições, com o objetivo de fomentar e realizar ações de garantia do custeio atual do Fundo Nacional do Desenvolvimento da Educação (FNDE) e ampliação deste custeio junto ao FNDE e a outras instituiççoes com potencial para serem mantenedoras complementares do Programa PET na UFCG e em âmbito nacional.</p>

        <p className="pex_title">SetBI</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Método e sistema de dashboard de gestão de indicadores de sucesso (KPI - Key Performance Indicators) de um grupo PET. O método inclui rotina de alimentação dos dados dos KPIs (usando a reunião semanal, pauta, informes, acompanhamento semanal, planilha-sistema de planejamento estratégico, etc) e um painel de visualização contínua do nível de atingimento dos objetivos do planejamento estratégico (medidores, infográficos etc).</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Permitir uma visão do andamento das atividades e atingimento dos objetivos e metas propostos pelo planejamento anual do grupo.</p>

        <p className="pex_title">SetCert</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Método e sistema de geração automática (ou semi-automática) de certificados de atividades no PET. A equipe responsável por esta atividades terá como atribuição produzir certificados das atividades organizadas pelo PET usando um algoritmo de automação parcial ou total das tarefas. O tutor também participa desta equipe como um emitente de certificados, dado que, produz certificados de participação do PET.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Além de permitir o aprendizado para a automação de atividades rotineiras utilizando recursos computacionais, esta atividade irá permitir a geração automática de certificados em larga escala em primeira ordem e em segunda ordem, o recebimento de comprovantes que certificam a participação ou realização de alguma atividade ou evento.</p>

        <p className="pex_title">Serviços de Educação Tutorial</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Consultoria prestada à Prefeitura Municipal de Campina Grande (PMCG) e outros parceiros da UFCG, mediante convênio institucional (Convênio Projeto FelizCidade), de capacitação de professores e alunos de escolas de Ensino Médio (EM) e Ensino Fundamental (EF) e de outras instituições de ensino superior (IES), para criarem grupos de educação tutorial e desenvolverem projetos inovadores baseados em princípios de educação tutorial.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Este serviço, prestado com o apoio do manual de GETI, gerará além de novos recursos econômicos (pessoal, infraestrutura, etc), novos recursos financeiros indiretos para compensar o baixíssimo recurso de custeio do FNDE e aumentar a capacidade financeira do Grupo para realizar atividades de alto impacto junto ao seu público alvo.</p>

        <p className="pex_title">Manual de GETI</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Livro interativo, de motivação para a criação e de apoio à gestão de Grupos de Educação Tutorial Inovadora. O livro terá como recurso AddOn para o leitor, um sistema online de apoio ao planejamento, avaliação e gestão de um Grupo de Educação Tutorial Inovadora. Os petianos escreverão parte do livro (capítulos específicos).</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Além de promover o desenvolvimento da escrita e publicação de um livro esta atividade irá proporcionar a criação e o apoio da gestão de modelos de grupos de educação tutorial sem fronteiras.</p>

        <p className="pex_title">Tesouraria</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Equipe ou integrante responsável por fazer a gestão de um recurso denominado caixinha do grupo PET. O integrante responsável deve fazer o controle e registro da entrada e saída de todo o dinheiro do orçamento do grupo PET. Este recurso permite fazer compras e custeio de gastos oriundos de eventos, passeios, água da sala e etc.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Estimular o olhar crítico e a gestão correta do dinheiro da caixinha do grupo PET.</p>

        <p className="pex_title">Manutenção da Sala e Organização</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Equipe responsável por construir planejamento de atividades que envolvam a organização e a manutenção desta nas salas do grupo PET. O planejamento de atividades delega os integrantes responsáveis por promover a manutenção, em certo intevalo de tempo, da organização das salas.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Permitir a estimulação e atenção voltada para manter a organização e desenvolver o aprendizado de organização de ambientes de estudo e de trabalho.</p>

        <p className="pex_title">Avaliação Interna</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Equipe responsável por organizar uma reunião geral para debater sobre todas as atividades desenvolvidas ao longo do ano, assim como, a qualidade das entregas de cada atividade, a participação de cada integrante no decorrer das atividades (iniciativa, dedicação, etc), dentre outras.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Permitir a reflexão sobre os pontos positivos e negativos observados, assim como, discutir alternativas para corrigir as falhas e refinar os acertos.</p>

        <p className="pex_title">Festas de Confraternização</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Equipe responsável por organizar os momentos de desconcentração e as confraternizações internas do grupo. Estes momentos permitem o estreitamento dos laços de relacionamento, a discussão sobre ideias e temas relevantes para o grupo, bem como, o divertimento e entretenimento. A palavra organizar refere-se em: pesquisa de locais, pesquisa de preços de refeições em estabeleciomentos, dinâmicas de grupo, jogos interativos e divertidos e etc.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">Permitir o conhecimento, o envolvimento interpessoal e a empatia entre os integrantes do grupo PET.</p>

        <p className="pex_title">Acompanhamento Semanal</p>
        <p className="pex_subtitle">Breve descrição</p>
        <p className="pex_text">Equipe responsável por fazer a lembrança dos encaminhamentos pertencentes ao grupo. Compromissos, eventos, deadlines, datas, atividades e demais assuntos tratados em reuniões são relembrados através de lembretes da equipe de acompanhamento semanal.</p>
        <p className="pex_subtitle">Objetivo</p>
        <p className="pex_text">O acompanhamento trata-se de uma ferramenta complementar à comunicação do grupo. Seu principal objetivo é manter os compromissos correntes ativos na mente dos integrantes para que as responsabilidades possam ser terminadas ou sinalizadas em tempo.</p>
      </PEXTemplate>
      <Footer/>
    </>
  );
}

export default PEXGestaoDeEmpreendimentoPage;