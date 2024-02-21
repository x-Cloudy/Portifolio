import { IoIosArrowRoundDown } from "react-icons/io";
import { useRef, useState } from 'react'
import foto from './img/foto.jpg'
import './Sobre.css'

export default function Sobre() {
  const [isActive, setIsActive] = useState(false)
  const sobre_texto = useRef()

  const overflowVerif = () => {
    if (sobre_texto.current.offsetWidth <= 352) {
      setIsActive(true)
    }
  }

  const ScrollArrow = () => {
    return (
      <span className="scroll_arrow"><IoIosArrowRoundDown /></span>
    )
  }

  return (
    <div className='sobre-container' onLoad={overflowVerif}>
      <div className='sobre'>
        <img src={foto} alt="foto de perfil" />
        
        <div className='sobre-texto' ref={sobre_texto}>
          <p>
            Olá, visitante!
          </p>
          <br />
          <p>
            Sou Juan R. Ferreira, um Desenvolvedor Full Stack independente apaixonado por programação e Design Web.
          </p>
          <br />
          <p>
            Minha jornada no mundo da tecnologia é marcada pela constante busca por aprendizado. Para mim, a programação não é apenas uma profissão, mas também meu passatempo predileto. Dedico meu tempo a explorar novidades, contando com a orientação do "professor" Google e seu estagiário, GPT.
          </p>
          <br />
          <p>
            O desafio constante de explorar novas tecnologias e criar projetos inovadores é o que me impulsiona. Estou sempre me desafiando a superar minhas habilidades a cada dia, em busca de uma evolução contínua.
          </p>
          <br />
          <p>
            Enxergo o design web como uma forma de arte, uma expressão que vai além de proporcionar uma simples experiência ao usuário.
          </p>
          <br />
          <p>
            Se você compartilha dessas paixões ou simplesmente deseja entrar em contato, sinta-se à vontade para me chamar! Estou pronto para novas colaborações e desafios emocionantes.
          </p>
        </div>
        {isActive && <ScrollArrow />}
      </div>
    </div>
  )
}