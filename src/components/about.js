import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/img1.jpg';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Sobre nós</h2>
          <div className="subtitle">Nossa História</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>O Instituto Superior Politécnico Atlântida, idealizado e fundado em 2012, legalizado pelo Decreto Presidencial Nº 168 de 24 de julho de 2012/2013, localizado no município de Belas, bairro Kifica, província de Luanda, é uma instituição dotada de autonomia estatuária Pedagógica, Científica, Cultural, Administrativa, Financeira e Patrimonial. É um estabelecimento privado integrado na região académica n°1 do subsistema do Ensino Superior em Angola.</p>
            <p>A actual estrutura estabelece a constituição de quatro áreas do conhecimento, a saber: Ciências da Saúde, Ciências das Engenharias e Tecnologia, Ciências da Gestão e Ciência Sociais. Ao todo, são ministrados 15 cursos de graduação: licenciatura em Direito, Relações Internacionais, Pedagogia, Psicologia, Sociologia, Gestão de Empresa, Gestão de Recursos Humanos, Contabilidade, Economia, Enfermagem, Análises Clínicas, Engenharia Informática, Engenharia Civil, Farmácia e Fisioterapia.</p>
            <div className='progress-block'>
              <h4>Engenharia Informática</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>Análises Clínicas</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
              <h4>Gestão de Recursos Humanos</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;