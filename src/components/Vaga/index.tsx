import styled from 'styled-components'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

/* ================== STYLED COMPONENTS ================== */

const Card = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  border-radius: 8px;
  transition: all ease 0.3s;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }

  &:hover a {
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
    border-color: var(--cor-principal);
  }
`

const Titulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

const Botao = styled.a`
  display: inline-block;
  margin-top: 16px;
  padding: 8px 16px;
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid var(--cor-secundaria);

  @media (max-width: 768px) {
    display: block;
  }
`

/* ================== COMPONENTE ================== */

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: Props) => (
  <Card>
    <Titulo>{titulo}</Titulo>

    <ul>
      <li>Localização: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratação: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>

    <Botao href="#">Ver detalhes e candidatar-se</Botao>
  </Card>
)

export default Vaga
