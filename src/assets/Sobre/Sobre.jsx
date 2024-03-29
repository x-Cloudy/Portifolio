import { IoIosArrowRoundDown, IoIosArrowBack } from "react-icons/io";
import { useRef, useState } from 'react'
import foto from './img/foto.jpg'
import './Sobre.css'

export default function Sobre() {
  const [isActive, setIsActive] = useState(false)
  const [roll, setRoll] = useState(0)
  const sobre_texto = useRef()

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
    setRoll(-50)
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
        <h2>Skills</h2>
        <h3>LINGUAGENS</h3>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>SQL</li>
          <li>Python</li>
          <li>Lua</li>
        </ul>
        <br />
        <h3>TECH/TOOLS</h3>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Next</li>
          <li>Tailwind</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>jQuery</li>
          <li>Git</li>
          <li>Vue</li>
          <li>Node</li>
          <li>Figma</li>
        </ul>
      </div>
    )
  }

  return (
    <div className='sobre-container'>
      <div className='sobre'>
        <img src={foto} alt="foto de perfil" />

        <div className="content-container">
          <div className="spaceFixBtn">
            {roll < 0 && <ScrollButton right={false} onHandleClick={handleClickLeft} />}
          </div>
          <div className="container-carousel">
            <div className="sobre-carousel" style={{ transform: `translate(${roll}%, 0px)` }}>
              <SobreTexto />
              <SobreSkill />
            </div>
          </div>
          {roll === 0 && <ScrollButton right={true} onHandleClick={handleClickRight} />}
        </div>
      </div>
    </div>
  )
}