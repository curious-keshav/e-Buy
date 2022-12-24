import React, { useState } from 'react'
import './Login.css'
import logo from "./Assets/BUY2.gif"
import { Link,useNavigate } from "react-router-dom"
import { auth } from "./firebase"

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => { 
    e.preventDefault(); 
    auth.signInWithEmailAndPassword(email,password)
    .then   (auth=>{
      navigate('/');
    })
    .catch(error=> alert(error.message))
  }

  const register = e => { 
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
    // console.log(auth);
    if (auth){
      navigate('/');
    }
    })
    .catch(error =>alert(error.message))
   }
  return (
    <div className='login__background'>
      <div className='login__logobackground'>
        <Link to="/">
          <img className="login__ebuylogo" src={logo} />
        </Link></div>
      <div className='login__container'>
        <form>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="     Email" className="login__input" type='text' />

          <input value={password} onChange={e => setPassword(e.target.value)} placeholder="     Password" className="login__input" type='password' />

          <button type="submit" onClick={signIn} className='login__btn1'>Sign in</button>

        </form>
        <h6 className="login__forget">Forget your login details?</h6>
        <div className='login__design'>
          <p className='login__design__line'></p>
          <p className='login__design__or'>OR</p>
          <p className='login__design__line'></p>
        </div>
        <button onClick={register} className='login__btn2'>Create a new Account</button>

      </div>


    </div>
  )
}

export default Login