import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginGetUser, logout } from "../../components/redux/actions/Actions";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../components/Context/CartContext";
import "./LoginGetUser.css";
import { getToken } from "../../helpers/AuthToken";

export default function LoginGetUser() {
  const context = useContext(CartContext);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
      const token = getToken();
      
      if (token) {
          dispatch(loginGetUser(token));
          
        }
  }, []);
  console.log("userdata", userData);
  if (!userData) {
    return <p>Cargando...</p>;
  }

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div>
      <div className={`product-detail `}>
        <div>
        
          <h1>Perfil de usuario</h1> {/* Título */}
          <p>Nombre: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <button onClick={handleLogout}>Cerrar Sesión</button>
          
        </div>
      </div>
    </div>
  );
}
