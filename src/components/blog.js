import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../assets/ANU_02.jpg'),
    time: '16-Setembro-2023  | 09H - 12H',
    title: '3ª Cerimônia de Outorga de Diplomas',
    description: '"Na Cerimônia de Outorga de Diplomas doInstituto Superior Politécnico Atlântida, os formandos da turma de 2024 se reuniram ansiosos no auditório. Com discursos inspiradores, eles receberam seus diplomas, celebrando com amigos e familiares ao final."',
    link: '#'
  },
  {
    id: 2,
    image: require('../assets/ANU_03.jpg'),
    time: '07-Setembro-2023  | 09H - 12H',
    title: 'Baptismo dos Caloiros',
    description: '"No tradicional evento do Baptismo dos Caloiros, os novos estudantes se reuniram em um clima de excitação e nervosismo. Sob um arco decorado com as cores da universidade, eles participaram de rituais simbólicos e receberam as boas-vindas da comunidade acadêmica. Após o evento, os caloiros se integraram ainda mais à vida universitária, celebrando o início de sua jornada acadêmica com os veteranos em uma atmosfera de camaradagem e espírito de equipe."',
    link: '#'
  },
  {
    id: 3,
    image: require('../assets/ANU_04.jpg'),
    time: '07-Setembro-2023  | 09H - 12H',
    title: '5ª Jornada Científica Geral',
    description: '"O evento proporcionou uma oportunidade única para a comunidade acadêmica trocar ideias, colaborar em projetos e promover o avanço do conhecimento científico."',
    link: '#'
  }
]

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Anúncios</h2>
          <div className="subtitle">Nossas actividades</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">Leia mais<i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppBlog;