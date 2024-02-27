import { IoIosArrowRoundDown, IoIosArrowBack } from "react-icons/io";
import { useRef, useState } from 'react'
import foto from './img/foto.jpg'
import './Sobre.css'

export default function Sobre() {
  const [isActive, setIsActive] = useState(false)
  const [roll, setRoll] = useState(0)
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

  const SobreTexto = () => {
    return (
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
    )
  }

  function handleClickRight() {
    setRoll(-30)
  }
  function handleClickLeft() {
    setRoll(0)
  }

  const ScrollButton = ({ right, onHandleClick }) => {
    let isRight;
    right ? isRight = 'right' : isRight = '';
    return (
      <button className={`arrow-button ${isRight}`} onClick={onHandleClick}><IoIosArrowBack /></button>
    )
  }

  const SobreSkill = () => {
    return (
      <div className="sobre-skills">

      </div>
    )
  }

  return (
    <div className='sobre-container' onLoad={overflowVerif}>
      <div className='sobre'>
        <img src={foto} alt="foto de perfil" />

        <div className="content-container">
          <div className="spaceFixBtn">
            {roll < 0 && <ScrollButton right={false} onHandleClick={handleClickLeft} />}
          </div>
          <div className="container-carousel">
            <div className="sobre-carousel" style={{ transform: `translate(${roll}vw, 0px)` }}>
              <SobreTexto />
              <SobreSkill />
            </div>
          </div>
          {roll === 0 && <ScrollButton right={true} onHandleClick={handleClickRight} />}
        </div>

        {isActive && roll === 0 && <ScrollArrow />}
      </div>
    </div>
  )
}