import React, { useEffect, useState } from 'react';
import style from './Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CardContainer from '../../components/CardContainer/CardContainer';
import { getAllFurnitures } from '../../components/redux/actions/Actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import OrderByName from '../../components/OrderByName/OrderByName';
import FilterPrice from '../../components/FilterPrice/FilterPrice';
// import { categoryFilter } from '../../helpers/categoryFilter';
import FilterCategory from '../../components/FilterCategory/FilterCategory';

const categoryFilter = [
  {
    id: 1,
    categoria: "sala de estar",
  },
  {
    id: 2,
    categoria: "dormitorios",
  },
  {
    id: 3,
    categoria: "sala de estudio",
  },
  {
    id: 4,
    categoria: "sala de comedor",
  },
  {
    id: 5,
    categoria: "accesorios",
  },
];

function Home() {
  const dispatch = useDispatch();
  const allFurnitures = useSelector((state) => state.allFurnitures);

  useEffect(() => {
    // Llamo a la acción que obtiene todas las furnitures
    dispatch(getAllFurnitures());
  }, [dispatch]);

  const [searchFurniture, setSearchFurniture] = useState('');
  const [filteredCategory, setFilteredCategory] = useState('all'); // Estado para rastrear la categoría filtrada

  const handleSearch = (furniture) => {
    setSearchFurniture(furniture.toLowerCase());
  };

  // Filtrar los muebles que coincidan con la búsqueda
  const filteredFurnitures = allFurnitures.filter((furniture) =>
    furniture.name.toLowerCase().includes(searchFurniture)
  );

  // Función para manejar el filtro de categoría
  const handleCategoryFilter = (selectedCategory) => {
    console.log('selectedCategory:', selectedCategory);
    setFilteredCategory(selectedCategory);
  };

  // Aplicar el filtro de categoría
  const filteredFurnituresByCategory = filteredCategory === 'all'
  ? filteredFurnitures
  : filteredFurnitures.filter((furniture) => {
      const furnitureCategory = categoryFilter.find(
        (category) => category.id === furniture.id
      );
      return furnitureCategory && furnitureCategory.categoria === filteredCategory;
    });


  console.log('filteredCategory:', filteredCategory);
  console.log('filteredFurnituresByCategory:', filteredFurnituresByCategory);

  return (
    <div>
      <div className={style.filtersContainer}>
        <div className={style.divSelect}>
          <OrderByName />
          <FilterCategory
            allCategories={categoryFilter}
            onFilterChange={handleCategoryFilter}
          />
          <FilterPrice />
        </div>
      </div>
      <CardContainer
        allFurnitures={
          filteredCategory === 'all'
            ? filteredFurnitures
            : filteredFurnituresByCategory
        }
      />
      <SearchBar setSearch={handleSearch} />
    </div>
  );
}

export default Home;
