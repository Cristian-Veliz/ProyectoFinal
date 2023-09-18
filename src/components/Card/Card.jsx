import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Card/Card.module.css';
import furnitures from '../../helpers/Furnitures';

const Card = () => {
    const {id, name, image, color, category } = furnitures;
  return (
    <div key={id} className={style.container}>
      <div className={style.header}></div>
      <div>
        <Link to={`/products/${id}`}>
          <img className={style.image} src={image} alt={name} />
        </Link>
      </div>
      <div className={style.name}>
        <h3>ID: {id}</h3>
        <h3>Name: {name}</h3>
        <h3>Color: {color}</h3>
        <h3>Category: {category}</h3>
      </div>
    </div>
  );
};

export default Card;
