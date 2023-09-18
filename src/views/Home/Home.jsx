import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardContainer from '../../components/CardContainer/CardContainer';
import { getAllFurnitures } from '../../components/redux/actions/Actions';
import SearchBar from '../../components/SearchBar/SearchBar';

function Home() {
  const dispatch = useDispatch();
  const allFurnitures = useSelector((state) => state.allFurnitures);
  
  useEffect(() => {
    // Llamo a la acción que obtiene todas las furnitures
    dispatch(getAllFurnitures()); 
  }, [dispatch]);

  const [searchFurniture , setSearchFurniture] = useState('');

  const handleSearch = (furniture) => {
    setSearchFurniture(furniture.toLowerCase());
  };

  // Filtrar los muebles que coincidan con la búsqueda
  const filteredFurnitures = allFurnitures.filter((furniture) =>
    furniture.name.toLowerCase().includes(searchFurniture)
  );

  return (
    <div>
      {/* Pasar filteredFurnitures al CardContainer en lugar de allFurnitures */}
      <CardContainer allFurnitures={filteredFurnitures} />
      <SearchBar setSearch={handleSearch} />
    </div>
  );
}

export default Home;

