import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: '#',
    image: require('../assets/Not_01.jpg'),
    title: 'Dia da África',
    subtitle: 'O evento incluiu apresentações de dança, música, comida e palestras sobre temas relevantes, promovendo a compreensão e apreciação da herança africana. Foi uma oportunidade inspiradora para celebrar e valorizar a influência duradoura de África no mundo.'
  },
  {
    id: 2,
    link: '#',
    image: require('../assets/Not_02.jpg'),
    title: 'Visita do embaxador do Brasil em Angola no ISPA dia  07.06.2023',
    subtitle: 'Na visita do Embaixador do Brasil em Angola ao Instituto Superior de Politécnico Atlântida (ISPA), houve um encontro marcante entre autoridades acadêmicas e diplomáticas. Durante o evento, foram discutidas possíveis parcerias educacionais e culturais entre os dois países, destacando a importância da cooperação internacional no campo da educação e da pesquisa. A visita do Embaixador fortaleceu os laços entre Brasil e Angola, inspirando novas oportunidades de colaboração e intercâmbio acadêmico.'
  },
  {
    id: 3,
    link: '#',
    image: require('../assets/Not_03.jpg'),
    title: 'Actividade das Mulheres solidarias do ISPA 31.03.2022',
    subtitle: 'Na atividade das Mulheres Solidárias do ISPA em 31 de março de 2022, as mulheres da comunidade acadêmica se reuniram para promover a solidariedade e o empoderamento feminino. O evento incluiu palestras inspiradoras, workshops práticos e iniciativas de apoio a causas sociais, destacando o papel fundamental das mulheres na construção de uma sociedade mais justa e inclusiva. Foi uma oportunidade emocionante para as participantes compartilharem experiências, fortalecerem laços e fazerem a diferença em suas comunidades.'
  },
  {
    id: 4,
    link: '#',
    image: require('../assets/Not_05.jpg'),
    title: 'Palestra  sobre a violencia Domestica',
    subtitle: 'Na palestra sobre a violência doméstica, realizada em uma data não especificada, especialistas e ativistas se reuniram para discutir esse tema crucial. Durante o evento, foram abordadas questões como prevenção, suporte às vítimas e mudança de paradigmas culturais. A palestra proporcionou uma oportunidade importante para conscientização e educação, incentivando a comunidade a tomar medidas para combater e prevenir a violência doméstica em todas as suas formas'
  },
  {
    id: 5,
    link: '#',
    image: require('../assets/Not_06.jpg'),
    title: 'Lançamento da ROC- Revista Olhar Científico',
    subtitle: 'No lançamento da ROC - Revista Olhar Científico, um evento marcante ocorrido em uma data específica não fornecida, a comunidade acadêmica se reuniu para celebrar a inauguração desta importante plataforma de divulgação científica. Durante o evento, foram apresentados os objetivos e o escopo da revista, bem como os primeiros artigos e pesquisas publicados. O lançamento da ROC representou um marco significativo no compartilhamento do conhecimento científico e no estímulo à produção acadêmica na instituição, promovendo a disseminação de ideias e o avanço do saber científico.'
  },
  {
    id: 6,
    link: '#',
    image: require('../assets/Not_08.jpg'),
    title: 'Batismo dos Caloiros ISPA 2023',
    subtitle: 'No Batismo dos Caloiros do ISPA em 2023, os novos estudantes foram recebidos em uma atmosfera de camaradagem e tradição. O evento, realizado com entusiasmo pela comunidade acadêmica, incluiu rituais simbólicos e atividades de integração para dar as boas-vindas aos caloiros. Foi um momento de celebração e acolhimento, marcando o início de sua jornada no Instituto Superior de Psicologia Aplicada.'
  },
  {
    id: 7,
    link: '#',
    image: require('../assets/Not_10.jpg'),
    title: 'Inaguraçao do tribunal simulado do  ISPA dia 17 de Dezembro I2023',
    subtitle: 'Na inauguração do Tribunal Simulado do ISPA em 17 de dezembro de 2023, estudantes e professores se reuniram para celebrar a abertura desta nova iniciativa educacional. O evento foi marcado por discursos inspiradores sobre a importância da prática jurídica simulada na formação dos alunos. Com a presença de autoridades acadêmicas e jurídicas, o tribunal simulado foi oficialmente declarado aberto, prometendo oferecer uma plataforma valiosa para o desenvolvimento de habilidades práticas e o aprofundamento do conhecimento jurídico dos estudantes do ISPA.'
  },
  {
    id: 8,
    link: '#',
    image: require('../assets/Not_12.jpg'),
    title: 'Campeonato Dispostivo',
    subtitle: 'No Campeonato Esportivo do ISPA, realizado em uma data não especificada, atletas e entusiastas do esporte se reuniram para competir e celebrar a paixão pelo jogo. O evento contou com uma variedade de modalidades esportivas, incluindo futebol, basquete, vôlei e muito mais. As equipes se empenharam em demonstrar sua habilidade e trabalho em equipe, criando uma atmosfera emocionante e competitiva. O campeonato esportivo do ISPA proporcionou uma oportunidade única para a comunidade acadêmica se unir em torno do esporte, promovendo a saúde, o bem-estar e o espírito de camaradagem entre os participantes.'
  },
  {
    id: 9,
    link: '#',
    image: require("../assets/Not_11.jpg"),
    title: 'Entrega de medalhas',
    subtitle: 'Na cerimônia de entrega de medalhas do ISPA, realizada em uma ocasião especial, atletas e participantes foram reconhecidos por suas conquistas e dedicação. Em um ambiente festivo e inspirador, os vencedores de diferentes competições esportivas foram chamados ao palco para receber suas merecidas medalhas. A plateia aplaudiu calorosamente cada homenageado, celebrando não apenas suas realizações individuais, mas também o espírito de competitividade e fair play que caracteriza o esporte no ISPA. A entrega de medalhas foi um momento de orgulho e emoção para todos os presentes, destacando o valor do esforço, da determinação e da excelência no campo esportivo'
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Notícia</h2>
          <div className="subtitle">Actividades Curriculares</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
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

export default AppWorks;