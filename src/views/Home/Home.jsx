import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardContainer from '../../components/CardContainer/CardContainer';
import { getAllFurnitures } from '../../components/redux/actions/Actions';


function Home() {

  const dispatch = useDispatch();
  const allFurnitures = useSelector((state) => state.allFurnitures);

  useEffect(() => {
    // Llamo a la acción que obtiene todas las furnitures
    dispatch(getAllFurnitures()); 
  }, [dispatch]);

  return (
    <div>
      <CardContainer allFurnitures={allFurnitures} />
    </div>
  );
}

export default Home;

