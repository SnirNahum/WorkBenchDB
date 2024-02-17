import ProductPreview from "./ProductPreview";

function ProductsList({ products, onRemove,onSelectProduct }) {
    return (
        <div className="products-container">
            {products.map((product, index) => (
                <ProductPreview
                    key={index}
                    product={product}
                    onRemove={onRemove}
                    onSelectProduct={onSelectProduct}
                />

            ))}
        </div>
    );
}

export default ProductsList;
