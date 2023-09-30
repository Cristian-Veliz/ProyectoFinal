import React, {  useState } from 'react';
import { useDispatch } from "react-redux";
import {crearProduct} from '../redux/actions/Actions'


export const CreateProduct = (props) => {
    const dispatch = useDispatch();
    const [productData, setProductData] = useState({
        name: "",
        colors: "",
        image:"",
        width: "",
        height: "",
        deep: "",
        description: "",
        rate: "",
        count: "",
        price: "",
        category: ""
    });

 



    const handleInputs = (e) => {
      const { name, value } = e.target;
      setProductData({
        ...productData,
        [name]: value,
      });
    };


  const handleSubmit = (e) => {
      e.preventDefault();
    // Creas un objeto con la estructura esperada
    const formattedData = {
    name: productData.name,
    colors: [productData.colors],
    image:productData.image,
    measures: {
      width: productData.width,
      height: productData.height,
      deep: productData.deep,
    },
    description: productData.description,
    rating: {
      rate: Number(productData.rate),
      count: Number(productData.count),
    },
    price: Number(productData.price),
    category: [productData.category],
  };

  // Llamas a la acción de Redux pasando el objeto formateado
  dispatch(crearProduct(formattedData));
};

      

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data' action='/product/create' method='POST' >
            <label htmlFor="name">Nombre del producto</label>
            <input type="text" value={productData.name} name="name" onChange={handleInputs} />

            <label htmlFor="colors">Colores (separados por coma)</label>
            <input type="text" value={productData.colors} name="colors" onChange={handleInputs} />

            <label htmlFor="image">imagen</label>
            <input type="text" value={productData.image} name="image" onChange={handleInputs} />

            <label htmlFor="width">width</label>
            <input type="text" value={productData.width} name="width" onChange={handleInputs} />

            <label htmlFor="height">height</label>
            <input type="text" value={productData.height} name="height" onChange={handleInputs} />

            <label htmlFor="deep">deep</label>
            <input type="text" value={productData.deep} name='deep' onChange={handleInputs}/>

            <label htmlFor="description">description</label>
            <input type="text" value={productData.description} name='description' onChange={handleInputs} />

            <label htmlFor="rate">rate</label>
            <input type="text" value={productData.rate} name='rate' onChange={handleInputs}/>

            <label htmlFor="count">count</label>
            <input type="text" value={productData.count} name='count' onChange={handleInputs}/>

            <label htmlFor="price">price</label>
            <input type="text" value={productData.price} name='price' onChange={handleInputs}/>

            <label htmlFor="category">category</label>
            <input type="text" value={productData.category} name='category' onChange={handleInputs} />
            <br/>
            <button type="submit">Guardar Producto</button>
        </form>
    );
};








/*
    const handleOnchange=(e){
      const newImage = e.target.files[0]
      if(newImage){
        setImage(URL.createObjectURL(newImage))
      }
      props.imageUpload(e)
    }

*/




  //  const [image, setImage] = useState();
   //  const inputFileRef = createRef()

   //  const cleanup = () =>{
   //    URL.revokeObjectURL(image && props.image)
   //    inputFileRef.current.value= null;
   //  }

   //  const setImage = (newImage) =>{
   //    if(image){
   //      cleanup()
   //    }
   //    setImage(newImage)
   //  }









// const handleInputs = (e) => {
//   const { name, value, files } = e.target;

//   // Si el campo es un campo de archivo (input type="file"), actualiza el estado con el archivo seleccionado
//   if (name === "image") {
//     if (files && files.length > 0) {
//       // Si hay un archivo seleccionado, guárdalo en el estado
//       setProductData({
//         ...productData,
//         [name]: files[0],
//       });
//     } else {
//       // Si no hay archivo seleccionado, resetea el campo de archivo en el estado (por ejemplo, a null)
//       setProductData({
//         ...productData,
//         [name]: null,
//       });
//     }
//   } else {
//     // Si no es un campo de archivo, actualiza el estado como de costumbre
//     setProductData({
//       ...productData,
//       [name]: value,
//     });
//   }
// };





// const formData = new FormData();
// formData.append("name", productData.name);
// formData.append("colors", productData.colors);
// formData.append("image", productData.image);
// formData.append("width", productData.width);
// formData.append("height", productData.height);
// formData.append("deep", productData.deep);
// formData.append("description", productData.description);
// formData.append("rate", productData.rate);
// formData.append("count", productData.count);
// formData.append("price", productData.price);
// formData.append("category", productData.category);












   // const objeto = {
    //     name:productData.name,
    //     colors:[productData.colors],
    //     image:productData.image,
    //     measures:{
    //         width:productData.width,
    //         height:productData.height,
    //         deep:productData.deep,
    //     },
    //     description:productData.description,
    //     rating:{
    //         rate: Number(productData.rate),
    //         count: Number(productData.count),
    //     },
    //     price: Number(productData.price),
    //     category: [productData.category]
    // }

    // const handleInputs = (e) => {
    //     const { name, value } = e.target;
    //   setProductData({
    //     ...productData,
    //     [name]:value
    //   })
    // };











