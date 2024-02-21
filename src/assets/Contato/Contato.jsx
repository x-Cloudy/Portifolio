import { GoCopy } from "react-icons/go";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Contato.css"
import { useEffect, useState } from "react";

export default function Contato() {
  const [copy, setCopy] = useState(false)
  const email = 'cloudibr@gmail.com'

  const emailCopy = () => {
    setCopy((prev) => prev = true)

  }

  const EmailName = () => {
    return (
      <div onClick={emailCopy}>
        e-mail
        <GoCopy id="email-arrow" />
      </div>
    )
  }

  useEffect(() => {
    if (copy) {
      navigator.clipboard.writeText(email)
      setTimeout(() => {
        setCopy((prev) => prev = false)
      }, 1000)
    }
  }, [copy])

  return (
    <div className="contato">
      <div className="contato-texto">
        <p>Comisão <br /> Aberta</p>
        <div className="line"></div>
        <div className="email">
          <div>
            {copy ? <p id="copy-text">copy</p> : <EmailName />}
          </div>
        </div>
      </div>
      <div className="contato-links">
        <FaGithub />
        <FaLinkedin />
        <FaFacebook />
        <FaInstagram />
      </div>
    </div>
  )
}