import styled from 'styled-components'

/* ================== STYLED COMPONENTS ================== */

const Header = styled.header`
  background-color: var(--cor-secundaria);
  padding: 24px;
  text-align: center;
  border-bottom: 2px solid var(--cor-principal);
`

const Titulo = styled.h1`
  color: var(--cor-principal);
  margin: 0;
  font-size: 32px;
`

/* ================== COMPONENTE ================== */

const Cabecalho = () => (
  <Header>
    <Titulo>EBAC Jobs</Titulo>
  </Header>
)

export default Cabecalho
