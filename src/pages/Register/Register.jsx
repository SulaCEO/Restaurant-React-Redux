import React, { useState } from "react";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import {BsFillPencilFill} from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendEmail, sendPassword } from "../../redux/reducers/homeReducer";

const Register = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state)=>state.homeReducer);

    const [eye, setEye] = useState(false);
    const [reg2, setReg2] = useState(false);
    const [email, setEmail] = useState('');
    const [passw, setPassw] = useState('');

    return(
        <>
            {!reg2 ? 
            <div className="register auth">
                <h2 className="register__title tit">Регистрация</h2>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className="register__email inp" type="email" placeholder="Введите Email" required name="email"/>
                <button onClick={()=>{
                    setReg2(true);
                    dispatch(sendEmail(email));
                }} className="register__btn btn" type="button">Продолжить</button>
                <p><Link to="/login" className="register__registered">У меня есть аккаунт</Link></p>
            </div> 

            : 
            
            <div className="register2 auth">
                <p onClick={()=>setReg2(false)} className="register2__email">{user.email}<BsFillPencilFill/></p>
                <h2 className="register2__title tit">Придумай пороль для входа</h2>
                <div className="register2__field">
                    <input value={passw} onChange={(e)=>setPassw(e.target.value)} className="register2__field-passw inp" type={eye ? 'text' : 'password'} placeholder="Придумайте пароль" required name="email"/>
                    <span className="register2__field-eye" onClick={()=>setEye(!eye)}>{eye ? <AiFillEyeInvisible/> : <AiFillEye/>}</span>
                </div>
                <button onClick={()=>{
                    dispatch(sendPassword(passw));
                    navigate('/');
                }} className="register2__btn btn" type="button">Создать аккаунт</button>
            </div>}
        </>
    )
}

export default Register;