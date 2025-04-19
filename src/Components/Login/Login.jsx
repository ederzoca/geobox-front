import {FaUser, FaLock} from 'react-icons/fa'

import { useState } from 'react'

import "./Login.css"

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os dados pro BackEnd: " + username + " - " + password)
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
        <div className="logo-container">
                    <img src="src/assets/Group 18.svg" alt="Logo do App" className="logo" />
                </div>
            <div className='input-fields'>
                <input
                    type="email"
                    placeholder='Endereço de e-mail'
                    onChange={(e) => setUsername(e.target.value)}
                />
            <FaUser className='icon' />
            </div>

            <div className='input-fields'>
                <input type="password"
                placeholder='Senha'
                onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className='icon' />
            </div>

            <div className='recall-forget'>
                <label>
                    <input type="checkbox" />
                    Lembrar de mim
                </label>
                <a href="#">Esqueci minha senha</a>
            </div>

            <button>Entrar</button>

            {/*
            <div className="signup-link">
                <p>Não tem uma conta? <a href='#'>Registre-se</a></p>
            </div>
            */}
        </form>
    </div>
  )
}

export default Login

// Fazer validações de login    
// ES7 React cria um componente funcional sem a necessidade do retrabalho de criar 