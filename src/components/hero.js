import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/img-hero1.jpg'),
    title: 'Boas-vindas Inesquecíveis: Festa dos Caloiros na Escola do ISPA',
    description: '"Prepare-se para uma explosão de energia e diversão na nossa lendária Festa dos Caloiros! É o momento em que os novos estudantes são recebidos de braços abertos pela comunidade do ISPA. Com música ao vivo, performances incríveis e atividades emocionantes, esta festa marca o início de uma jornada inesquecível na Escola do ISPA. Junte-se a nós para criar memórias que durarão toda a vida!"',
    link: '#'
  },
  {
    id: 2,
    image: require('../assets/img-hero2.jpg'),
    title: 'Explorando Fronteiras',
    description: '"Descrição: Na Escola do ISPA, o aprendizado vai além da sala de aula. Nossas atividades extracurriculares oferecem aos alunos a oportunidade de explorar seus interesses, desenvolver novas habilidades e criar conexões significativas com colegas e professores. Desde clubes de debate até projetos de pesquisa, há algo para todos na nossa vibrante comunidade escolar. Junte-se a nós e descubra o que é possível quando você se aventura além dos limites do currículo tradicional!"',
    link: '#'
  },
  {
    id: 3,
    image: require('../assets/img-hero3.jpg'),
    title: 'Celebrando Conquistas: Cerimônia de Outorga na Escola do ISPA',
    description: '"É hora de celebrar o sucesso e o talento dos nossos alunos na Cerimônia de Outorga da Escola do ISPA. Neste evento especial, reconhecemos e homenageamos as realizações acadêmicas, artísticas e pessoais que tornam nossa comunidade tão excepcional. Dos prêmios de mérito aos destaques culturais, esta é uma noite dedicada a celebrar o esforço, a dedicação e a excelência dos nossos estudantes. Junte-se a nós para aplaudir e inspirar as próximas gerações de líderes e visionários!"',
    link: '#'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Leia Mais <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;