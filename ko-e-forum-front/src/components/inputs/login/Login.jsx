import { useState } from 'react'
import Button from '../../button/Button'
import '../inputs.css'
import login from './login.module.css'
import Name from '../../Text'
function Login() {
    
    function tratarForm(e) {
        e.preventDefault()
        console.log(name, password)
        window.location.href = "index.html"
    }

    function recuperarSenha() {
        window.location.href = "recuperarSenha.html"
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    
    return (
        <div className='areaOutside' id="Sign-in">
            <Name name={name}/>
            <form className={login.areaForm} onSubmit={(e) => tratarForm}>
                <h1>Login</h1>
                <div className={login.areaInput}>
                    <label htmlFor='usuario'>Usuário:</label>
                    <input type='text' id='usuario' placeholder='Usuário:'
                    onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className={login.areaInput}>
                    <label htmlFor='senha'>Senha:</label>
                    <input type='password' id='senha' placeholder='Senha:'
                    onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <input className='buttons' type='submit' value='Enviar'/>
                <Button class={login.esqueciSenha} text="Esqueci a senha" event="onClick" funct={recuperarSenha} />
            </form>
        </div>
    )
}

Login.propTypes = {
}

export default Login