import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/Doc_01.jpg'),
    name: 'LUIS MARQUES  ',
    designation: 'DOCENTE LINGUSITICO',
    description: 'Profissional especializado em ensinar linguística ou línguas.'
  },
  {
    id: 2,
    image: require('../assets/Doc_02.jpg'),
    name: 'LUVAMBO SEBASTIÃO ',
    designation: 'DOCENTE DO CURSO DE GESTÃO DE EMPRESA',
    description: 'Capacitamos os alunos com habilidades essenciais de liderança, pensamento crítico e resolução de problemas, preparando-os para os desafios do ambiente empresarial global.'
  },
  {
    id: 3,
    image: require('../assets/Doc_03.jpg'),
    name: 'ADAO GENEROSO ',
    designation: 'DOCENTE DO CURSO DE CONTABILIDADE',
    description: '"Formando Profissionais Financeiros Excepcionais"'
  },
  {
    id: 4,
    image: require('../assets/Doc_04.jpg'),
    name: 'ADELINO SEBASTIÃO',
    designation: 'DOCENTE DO CURSO DE RELACOES INTERNACIONAIS',
    description: '"Navegando nas Complexidades do Mundo Globalizado'
  },
  {
    id: 5,
    image: require('../assets/Doc_05.jpg'),
    name: 'ADERITO FERREIRA',
    designation: 'DOCENTE  DO CURSO DE ANALISES CLINICAS',
    description: '"Guiando o Caminho para a Precisão Diagnóstica".'
  },
  {
    id: 6,
    image: require('../assets/Doc_06.jpg'),
    name: 'ADERITO KAPAKALA',
    designation: 'DIRECTOR  PRA AREA CIENTIFICA DA UN. ORG. DE CIENCIAS  ECONOMICAS JURICAS E HUMANAS',
    description: '"Liderando a Excelência Acadêmica e a Inovação Interdisciplinar".'
  },
  {
    id: 7,
    image: require('../assets/Doc_07.jpg'),
    name: 'MARIA CASIMIRO',
    designation: 'DOCENTE COM CARGO NA GESTÃO',
    description: '"Integrando Educação e Liderança para um Impacto Transformador"'
  },
  {
    id: 8,
    image: require('../assets/Doc_09.jpg'),
    name: 'SARA PINTO',
    designation: 'DOCENTE DA AREA DE SAUDE',
    description: 'Ensinando, Cuidando e Inspirando Futuros Profissionais da Saúde"'
  }
]

function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Docentes</h2>
          <div className="subtitle">Alguns de nossos especialistas</div>
        </div>
        <Row>
          {
            teamsData.map(teams => {
              return (
                <Col sm={3} key={teams.id}>
                  <div className='image'>
                    <Image src={teams.image} />
                  </div>
                  <div className='content'>
                    <h3>{teams.name}</h3>
                    <span className='designation'>{teams.designation}</span>
                    <p>{teams.description}</p>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppTeams;