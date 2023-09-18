import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../Detail/Detail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFurnitures } from '../../components/redux/actions/Actions';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allFurnitures = useSelector((state) => state.allFurnitures);

  const [contador, setContador] = useState(1); // Cambiado a 'contador'

  useEffect(() => {
    // Llama a la acción que obtiene todas las furnitures solo si no se han cargado aún
    if (!allFurnitures.length) {
      dispatch(getAllFurnitures());
    }
  }, [dispatch, allFurnitures]);

  if (!allFurnitures.length) {
    return <div>Loading...</div>;
  }

  const furniture = allFurnitures.find((item) => item.id === parseInt(id, 10));

  if (!furniture) {
    return <div>Furniture not found</div>;
  }

  const { image, name, price, colors, description } = furniture;
  const colorString = Array.isArray(colors) ? colors.join(', ') : '';

  // Funciones para aumentar y disminuir el contador
  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div key={id} className={style.container}>
      <div key={id} className={style.container}></div>
      <div className={style.name}>
        <img src={image} alt={name} />
        <h3>ID: {id}</h3>
        <h3>Name: {name}</h3>
        <h3>Colors: {colorString}</h3>
        <h3>Description: {description}</h3>
        <h3>Price: {`${price} usd`}</h3>
        
        <button onClick={() => console.log(`Agregado al carrito: ${contador} ${name}`)}>Agregar al carrito</button>
        
        {/* Contador */}
        <div>
          <button onClick={disminuirContador}>-</button>
          <span>{contador}</span>
          <button onClick={aumentarContador}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
