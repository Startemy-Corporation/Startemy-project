import { Container } from '../../styles/Container';
import {
  AboutUsContainer,
  CategoriesContainer,
  FooterContainer,
  HeaderContainer,
  TestimonyContainer,
} from './styles';

import { BsArrowUpRight } from 'react-icons/bs';
import {
  TbBrandJavascript,
  TbBrandFigma,
  TbBrandReactNative,
  TbBrandHtml5,
} from 'react-icons/tb';
import { SiTypescript } from 'react-icons/si';

import headerImg from '../../assets/headerLandpage.svg';
import stars from '../../assets/imgs/stars.svg';
import Gustavo from '../../assets/imgs/Gustavo.svg';
import Lucas from '../../assets/imgs/Lucas.svg';
import Pedro from '../../assets/imgs/Pedro.svg';
import Wigny from '../../assets/imgs/Wigny.svg';
import Tomas from '../../assets/imgs/Tomas.svg';
import Mayson from '../../assets/imgs/Mayson.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { Header } from '../../components/Header';
import { StyledLink } from '../../styles/Link';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/Colors';

export const HomePage = () => {
  return (
    <>
      <Container>
        <Header profile={true} />
      </Container>
      <HeaderContainer>
        <Container>
          <div>
            <h1>
              Em busca do <span>Curso</span> perfeito para você?
            </h1>
            <p>
              Aqui na Startemy você encontra os melhores cursos na área de
              tecnologia.
              <br />
              Venha aprender com a gente!
            </p>
            <StyledLink to={'/courses'} className='default xxl'>
              Veja mais
            </StyledLink>
          </div>
          <img src={headerImg} alt='' />
        </Container>
      </HeaderContainer>
      <CategoriesContainer>
        <Container>
          <div>
            <h2>
              Categorias <span>Populares</span>
            </h2>
            <p>Varias categorias para você se aprofundar no aprendizado.</p>
          </div>
          <ul>
            <Link to={'/courses/HTML'}>
              <li>
                <div className='group'>
                  <TbBrandHtml5 size={30} color={colors.gray600} />

                  <p>HTML 5</p>
                </div>
                <div className='arrowDiv'>
                  <BsArrowUpRight size={24} />
                </div>
              </li>
            </Link>
            <Link to={'/courses/Javascript'}>
              <li>
                <div className='group'>
                  <TbBrandJavascript size={30} color={colors.gray600} />

                  <p>JavaScript</p>
                </div>
                <div className='arrowDiv'>
                  <BsArrowUpRight size={24} />
                </div>
              </li>
            </Link>
            <Link to={'/courses/Figma'}>
              <li>
                <div className='group'>
                  <TbBrandFigma size={30} color={colors.gray600} />

                  <p>Figma</p>
                </div>
                <div className='arrowDiv'>
                  <BsArrowUpRight size={24} />
                </div>
              </li>
            </Link>
            <Link to={'/courses/React'}>
              <li>
                <div className='group'>
                  <TbBrandReactNative size={30} color={colors.gray600} />

                  <p>React</p>
                </div>
                <div className='arrowDiv'>
                  <BsArrowUpRight size={24} />
                </div>
              </li>
            </Link>
            <Link to={'/courses/Typescript'}>
              <li>
                <div className='group'>
                  <SiTypescript size={30} color={colors.gray600} />

                  <p>TypeScript</p>
                </div>
                <div className='arrowDiv'>
                  <BsArrowUpRight size={24} />
                </div>
              </li>
            </Link>
          </ul>
        </Container>
      </CategoriesContainer>
      <TestimonyContainer>
        <Container>
          <div>
            <h2>
              Depoimentos <span>de Alunos</span>
            </h2>
            <p>Feedbacks sobre os cursos e o conteudo que temos disponiveis.</p>
          </div>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
              type: 'bullets',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper'
          >
            <SwiperSlide key={1}>
              <div>
                <img src='' alt='' />
                <div className='starsContainer'>
                  <h2>Jenny Wilson</h2>
                  <img src={stars} alt='' />
                </div>
              </div>
              <p className='testimonyDesc'>
                Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                malandris se pirulitá.Paisis, filhis, espiritis santis.Si u
                mundo tá muito paradis? Toma um mé que o mundo vai
                girarzis!Interagi no mé, cursus quis, vehicula ac nisi. Si u
                mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
              </p>
            </SwiperSlide>
            <SwiperSlide key={2}>
              <div className='divTop'>
                <img src='' alt='' />
                <div className='starsContainer'>
                  <h2>Mark Wilson</h2>
                  <img src={stars} alt='' />
                </div>
              </div>
              <p className='testimonyDesc'>
                Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                malandris se pirulitá.Paisis, filhis, espiritis santis.Si u
                mundo tá muito paradis? Toma um mé que o mundo vai
                girarzis!Interagi no mé, cursus quis, vehicula ac nisi. Si u
                mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
              </p>
            </SwiperSlide>
            <SwiperSlide key={3}>
              <div className='divTop'>
                <img src='' alt='' />
                <div className='starsContainer'>
                  <h2>Mark Wilson</h2>
                  <img src={stars} alt='' />
                </div>
              </div>
              <p className='testimonyDesc'>
                Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                malandris se pirulitá.Paisis, filhis, espiritis santis.Si u
                mundo tá muito paradis? Toma um mé que o mundo vai
                girarzis!Interagi no mé, cursus quis, vehicula ac nisi. Si u
                mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
              </p>
            </SwiperSlide>
          </Swiper>
        </Container>
      </TestimonyContainer>
      <AboutUsContainer>
        <Container>
          <div>
            <h2>
              Sobre <span>Nós</span>
            </h2>
            <p>Pessoas que trabalharam para criar este projeto.</p>
          </div>
          <div className='container'>
            <div className='Foto-Gustavo'>
              <img src={Gustavo} alt='' />
            </div>
            <div className='Foto-Lucas'>
              <img src={Lucas} alt='' />
            </div>
            <div className='Foto-Pedro'>
              <img src={Pedro} alt='' />
            </div>
            <div className='Foto-Wigny'>
              <img src={Wigny} alt='' />
            </div>
            <div className='Foto-Tomás'>
              <img src={Tomas} alt='' />
            </div>
            <div className='Foto-Mayson'>
              <img src={Mayson} alt='' />
            </div>
            <div className='Lucas-Batista'>
              <p>Lucas </p>
              <p>M3</p>
            </div>
            <div className='Gustavo-Lima'>
              <p>Gustavo</p>
              <p>M3</p>
            </div>
            <div className='Pedro-Lisboa'>
              <p>Pedro</p>
              <p>M3</p>
            </div>
            <div className='Wigny'>
              <p>Wigny</p>
              <p>M3</p>
            </div>
            <div className='Tomás-Lillo'>
              <p>Tomás</p>
              <p>M3</p>
            </div>
            <div className='Mayson'>
              <p>Mayson</p>
              <p>M3</p>
            </div>
          </div>
        </Container>
      </AboutUsContainer>
      <FooterContainer>
        <Container>
          <p>2023 - Startemy - © Todos os direitos reservados</p>
        </Container>
      </FooterContainer>
    </>
  );
};
