import React from 'react';
import Card from '../Card/Card';
import style from './CardContainer.module.css';

const CardContainer = ({furnitures}) => {
  return (
    <div className={style.container}>
      {furnitures.map((furniture, index) => (
        <Card
          key={index}
          image={furniture.image}
          name={furniture.name}
          category={furniture.category}
          color={furniture.color}
          measures={{
            height: furniture.measures.height,
            width: furniture.measures.width,
            depth: furniture.measures.depth,
          }}
        //   price={furniture.price}
        //   id={furniture.id}
        />
      ))}
    </div>
  );
};

export default CardContainer;
