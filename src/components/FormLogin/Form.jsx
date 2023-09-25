import React, { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";
import Logo from "../../assets/LogoDivano.jpg";
import { Link } from "react-router-dom"; 

const Form = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(validation({ ...userData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.contenedor}>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1> {/* Título */}
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <p className={styles.errors}>{errors.email ? errors.email : null}</p>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <p className={styles.errors}>
          {errors.password ? errors.password : null}
        </p>

        <button className={styles.submit} type="submit">
          LOGIN
        </button>
        <p className={styles.cuenta}>
         ¿No sos cliente?
          <Link to="/register" className={styles.cuenta}>Abrí tu cuenta en minutos</Link>
        </p>
      </form>
    </div>
  );
};

export default Form;
