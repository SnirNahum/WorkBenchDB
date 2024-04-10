import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductPreview({ product, onRemove, onSelectProduct }) {
  const navigate = useNavigate();



  // function onRemoveItem(e) {
  //   e.stopPropagation();
  //   onRemove(product._id);
  // }

  function onSelectProdcut(e) {
    e.stopPropagation();
    onSelectProduct(product);
    navigate(`/product/${product._id}`);
  }

  return (

    <div class="card" onClick={onSelectProdcut}>

      <div class="card-content">
        <img src={product.img} alt="" />
        <div className="card-details">
          <h2>
            {product.title}
          </h2>
          <p>
            {product.desc}
          </p>
          <p>
            {product.price}
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProductPreview;
