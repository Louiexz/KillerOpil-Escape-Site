import { useState } from 'react'
import '../inputs.css'
import register from './register.module.css'

function Register() {
    function tratarForm(e) {
        e.preventDefault()
        console.log(name, password, email, nascimento)
    }

    var [termos, setTermos] = useState(false)
    const [name, setName] = useState()
    const [nascimento, setNascimento] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    return (
        <div className='areaOutside' id="Sign-up">
            <form onSubmit={tratarForm} className={register.areaRegister}>
                <h1>Registro</h1>
                <div className={register.areaInput}>
                    <label htmlFor='usuario'>Usuário:</label>
                    <input type='text' id='usuario' placeholder='Usuário'
                    onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className={register.areaInput}>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' placeholder='seuemail@gmail.com'
                    onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className={register.areaInput}>
                    <label htmlFor='nascimento'>Data de nascimento:</label>
                    <input type='date' id='nascimento'
                    onChange={(e) => setNascimento(e.target.value)} required/>
                </div>
                <div className={register.areaInput}>
                    <label htmlFor='senha'>Senha:</label>
                    <input type='password' id='senha' placeholder='Senha:'
                    onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div>
                    <input type='checkbox' id='termos'
                    onChange={(e) => setTermos(termos = !termos)} required/>
                    <span> Aceito os <a href="#" aria-disabled>termos de uso</a></span>
                </div>
                <input className='buttons' type='submit' value='Enviar'/>
            </form>
        </div>
    )
}

Register.propTypes = {
}

export default Register