import styled from 'styled-components'

/* ================== STYLED COMPONENTS ================== */

const HeroContainer = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--cor-principal);
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

const Conteudo = styled.div`
  position: relative;
  color: #eee;
  width: 100%;
`

const Titulo = styled.h2`
  font-family: 'Gloock', serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

/* ================== COMPONENTE ================== */

const Hero = () => (
  <HeroContainer>
    <Conteudo className="container">
      <Titulo>
        As melhores vagas para tecnologia, design e artes visuais.
      </Titulo>
    </Conteudo>
  </HeroContainer>
)

export default Hero
