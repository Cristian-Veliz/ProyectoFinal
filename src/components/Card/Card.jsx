import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Card/Card.module.css';
import { category } from '../../helpers/category';


const Card = ({id, name, image, colors, price}) => {

const colorString = colors.join(', ');
const categoryItem = category.find(item => item.id === String(id));

  return (
    <div key={id} className={style.container}>
      <div className={style.header}></div>
      <div>
        <Link to={`/products/${id}`}>
          <img className={style.image} src={image} alt={name} />
        </Link>
      </div>
      <div className={style.name}>
        <h3>Name: {name}</h3>
        <h3>Colors: {colorString}</h3>
        <h3>Price: {`${price} usd`}</h3>
        <h3>Category: {categoryItem ? categoryItem.categoria : 'N/A'}</h3>
      </div>
    </div>
  );
};

export default Card;
