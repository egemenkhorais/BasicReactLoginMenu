import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Giriş</h1>
                <div className="input-box">
                    <input type="text" placeholder="Kullanıcı Adı " required/>
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Şifre" required/>
                    <IoLockClosed className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Beni Hatırla </label>
                    <a href="#">Şifremi Unuttum</a>
                </div>

                <button type="submit">Giriş</button>

                <div className="register-link">
                    <p>Hesabın yok mu? <a href="#">Kaydol.</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;