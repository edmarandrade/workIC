import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'Ana Silva',
    description: 'Como psicóloga e ex-aluna da Escola do ISPA, posso dizer que minha experiência lá foi extremamente enriquecedora. A qualidade do ensino e a abordagem humanista adotada pela instituição me proporcionaram uma base sólida para minha carreira. Além disso, os professores são altamente qualificados e acessíveis, o que contribuiu significativamente para o meu desenvolvimento acadêmico e pessoal. Estou muito grata pela formação que recebi na Escola do ISPA."',
    designation: 'Psicóloga'
  },
  {
    id: 2,
    name: 'Pedro Martins',
    description: '"Estudar na Escola do ISPA tem sido uma jornada incrível para mim. Desde o primeiro dia, fui acolhido por uma comunidade vibrante e diversificada, onde pude explorar meus interesses acadêmicos e participar de diversas atividades extracurriculares. A infraestrutura da escola é moderna e bem equipada, proporcionando um ambiente propício para o aprendizado. Além disso, os projetos de pesquisa e extensão oferecidos pela instituição me permitiram expandir meus horizontes e me preparar para os desafios do futuro."',
    designation: 'Estudante'
  },
  {
    id: 3,
    name: 'Lucrecia Dos Santos',
    description: '"Como professora da Escola do ISPA, posso afirmar que a instituição está comprometida com a excelência acadêmica e o desenvolvimento integral de seus alunos. Aqui, temos a liberdade de inovar em nossas práticas pedagógicas e de colaborar com uma equipe dedicada e apaixonada pelo ensino. A Escola do ISPA valoriza o diálogo e o pensamento crítico, preparando seus alunos não apenas para o sucesso acadêmico, mas também para serem cidadãos conscientes e engajados em sua comunidade. Estou orgulhosa de fazer parte desta instituição.',
    designation: 'Professora'
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Depoimentos</h2>
          <div className="subtitle">O Que As Pessoas Dizem</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;