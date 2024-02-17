import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductPreview({ product, onRemove, onSelectProduct }) {
  const navigate = useNavigate();

  

  function onRemoveItem(e) {
    e.stopPropagation();
    onRemove(product._id);
  }

  function onSelectProdcut(e) {
    e.stopPropagation();
    onSelectProduct(product);
    navigate(`/product/edit/${product._id}`);
  }

  return (
    <div className='product-card' onClick={onSelectProdcut}>
      <h1>{product.title}</h1>
      <img src={product.img} alt='product' />
      <p>{product.desc}</p>
      <button onClick={onRemoveItem}>X</button>
    </div>
  );
}

export default ProductPreview;
