// import React, { useState } from 'react';
// import { asyncStorageService } from '../services/async-storage.service';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { utilService } from '../services/utilService';
// import { useEffect } from 'react';

// function EditProduct() {

//     const navigate = useNavigate()
//     const params = useParams()
//     const currProduct = useSelector((state) => state.workBenchDBModule.product)
//     const [product, setProduct] = useState({
//         title: params.id ? currProduct.title : "",
//         price: params.id ? currProduct.price : 0,
//         img: params.id ? currProduct.img : "",
//         desc: params.id ? currProduct.desc : "",
//         _id: params.id ? params.id : utilService.makeId()

//     });
//     const updateProductProperty = (property, value) => {
//         setProduct(prevProduct => ({
//             ...prevProduct,
//             [property]: value
//         }));

//     };

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         updateProductProperty(name, value);

//     };

//     function goBack() {
//         navigate("/products")
//     }
//     return (
//         <div>
//             <h1>{'Update product'}</h1>
//             <div>
//                 <button onClick={goBack}>Back</button>
//             </div>
//             <input
//                 type="text"
//                 name="title"
//                 placeholder='Product title'
//                 value={product.title}
//                 onChange={handleInputChange}
//             />
//             <input
//                 type="text"
//                 name="img"
//                 placeholder='Product image'
//                 value={product.img}
//                 onChange={handleInputChange}
//             />
//             <textarea
//                 type="text"
//                 name="desc"
//                 placeholder='Product details'
//                 value={product.desc}
//                 onChange={handleInputChange}
//             />
//             <input
//                 type="number"
//                 name="price"
//                 placeholder='Product price'
//                 value={product.price}
//                 onChange={handleInputChange}
//             />
//             <button >Update product</button>
//         </div>
//     );
// }

// export default EditProduct;
