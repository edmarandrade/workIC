import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Ciências  da Saúde',
    description: '"Explore as oportunidades de aprendizado, os desafios e as perspectivas de carreira neste campo dinâmico e crucial para o bem-estar da sociedade."'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Ciências Das Engenharia e Tecnologias',
    description: '"Conheça as últimas tendências, os projetos mais impactantes e as oportunidades de carreira que aguardam aqueles que se aventuram nesse emocionante mundo da ciência e da tecnologia."'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'Pedagogia',
    description: '"Explore a Pedagogia: transformando a educação com métodos inovadores e inspiradores para o desenvolvimento das futuras gerações."'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Sociologia',
    description: 'A Sociologia analisa questões como cultura, poder, desigualdade, mudança social e dinâmicas de grupo, oferecendo insights valiosos para compreendermos melhor o mundo em que vivemos e as relações que o permeiam.'
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Licenciatura em Direito',
    description: '"Desvende a Licenciatura em Direito: explorando a justiça, a ética e os desafios contemporâneos do sistema legal."'
  },
  {
    id: 7,
    icon: 'fas fa-life-ring',
    title: 'Gestão de Empresas',
    description: '"Descubra a Gestão de Empresas: estratégia, inovação e liderança para impulsionar o sucesso organizacional."'
  },
  {
    id: 8,
    icon: 'fas fa-life-ring',
    title: 'Gestão Recursos Humanos',
    description: '"Desvende a Gestão de Recursos Humanos: cultivando talentos, promovendo o engajamento e impulsionando o crescimento das organizações."'
  },
  {
    id: 9,
    icon: 'fas fa-life-ring',
    title: 'Economia',
    description: '"Explore a Economia: análise, tendências e impactos globais nas decisões financeiras e políticas."'
  },
  {
    id: 10,
    icon: 'fas fa-desktop',
    title: 'Enfermagem',
    description: '"Descubra a Enfermagem: cuidado, inovação e dedicação para promover a saúde e o bem-estar da comunidade."'
  },
  {
    id: 11,
    icon: 'fas fa-life-ring',
    title: 'Análizes Clínicas',
    description: '"Explore Análises Clínicas: diagnóstico preciso, inovação laboratorial e contribuição para a saúde pública."'
  },
  {
    id: 12,
    icon: 'fas fa-life-ring',
    title: 'Engenharia Informática',
    description: '"Desbrave a Engenharia Informática: inovação digital, tecnologia de ponta e soluções para os desafios do mundo moderno."'
  },
  {
    id: 13,
    icon: 'fas fa-desktop',
    title: 'Farmácia',
    description: '"Desvende a Farmácia: cuidado com a saúde, inovação farmacêutica e contribuição para o bem-estar da sociedade."'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nossos Cursos</h2>
          <div className="subtitle">Cursos que prestamos</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;