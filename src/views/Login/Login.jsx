import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../components/redux/actions/Actions";

import { useHistory } from "react-router-dom";
import RecoveryEmail from "../../components/NewPassword/RecoveryEmail";
import { CartContext } from "../../components/Context/CartContext";

export default function Login() {
  const context = useContext(CartContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    dispatch(loginSuccess(userData));
    history.push("/");
  };
  const detailToShow = () => {
    context.openRecovery();
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Correo Electrónico"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <button onClick={detailToShow}>Olvide contraseña</button>
      <RecoveryEmail />
    </div>
  );
}
