import {ChangeEvent, useState} from "react";
import "@css/layout/LoginPanel.css";

export function LoginPanel({onLogin}: {onLogin: () => void}) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        password == import.meta.env.VITE_APP_PASSWORD ?
            onLogin() :
            setError(true)
    };

    return (
        <div className={"LoginPanel"}>
            <div className={"LoginForm"}>
                <strong>Login</strong>
                {error && <div className={"ErrorMessage"}>
                    <span>Incorrect Password!</span>
                </div>}
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="input"
                />
                <button onClick={handleLogin} className="button">
                    Login
                </button>
            </div>
        </div>
    );
}