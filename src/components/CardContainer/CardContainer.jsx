import React from 'react';
import style from './CardContainer.module.css';
import Card from '../Card/Card';
import Paginate from '../Paginate/Paginate';
import { useSelector } from 'react-redux';


const CardContainer = ({ allFurnitures }) => {
  // Ordena las tarjetas por id de menor a mayor
  const sortedFurnitures = allFurnitures?.sort((a, b) => a.id - b.id);

  const { numPage } = useSelector((state) => state);
  const furnitures = allFurnitures;
  const cantRecipesPage = 9;

  let desde = (numPage - 1) * cantRecipesPage;
  let hasta = numPage * cantRecipesPage;

  let cantPage = Math.ceil(furnitures.length / cantRecipesPage);

  return (
    <div className={style.cardContainer}>
      {sortedFurnitures?.slice(desde, hasta).map((furniture, index) => (
        <Card
          key={index}
          image={furniture.image}
          id={furniture.id}
          name={furniture.name}
          colors={furniture.colors}
          price={furniture.price}
          // category={furniture.category}
        />
      ))}
       <div>
        <Paginate numPage={numPage} cantPage={cantPage} />
      </div>
    </div>
  );
};

export default CardContainer;
