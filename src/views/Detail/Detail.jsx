import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getFurnitureById } from "../../components/redux/actions/Actions";
import { useParams, Link } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const furniture = useSelector((state) => state.furt.furniture) || {};
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    // Llama a la acción getFurnitureById para obtener los detalles del producto
    dispatch(getFurnitureById(id));
  }, [dispatch, id]);

  // Asegúrate de que measures esté definido y tenga las propiedades adecuadas
  const measures = furniture.measures || {};

  return (
    <div>
      <div>
        <img className={style.img} src={furniture.image} alt={furniture.name} />
        <h1 className={style.name}>{furniture.name}</h1>
        {/* Descripción */}
        <div>
          <h4 className={style.furniture}>$</h4>
          <span className={style.span}>{furniture.price}</span>
          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            natus, ipsum quo modi porro.
          </p>
          <h4 className={style.furniture}>Categoria:</h4>
          <span className={style.span}>{furniture.category}</span>

          <h4 className={style.furniture}>Color:</h4>
          <span className={style.span}>{furniture.color}</span>

          {/* Mostrar las medidas como cadena de texto */}
          <h4 className={style.furniture}>Medidas:</h4>
          <span className={style.span}>
            Alto: {measures.height} cm, Ancho: {measures.width} cm, Profundidad: {measures.depth} cm
          </span>

          {/* Mostrar las medidas en una lista */}
          <div>
            <h3>Medidas</h3>
            <ul className={style.measures}>
              <li>Alto: {measures.height} cm</li>
              <li>Ancho: {measures.width} cm</li>
              <li>Profundidad: {measures.depth} cm</li>
            </ul>
          </div>
        </div>
        {/* Enlace de retorno a la página de inicio */}
        <Link to="/productos">
          <button className={style.button}>Products</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;