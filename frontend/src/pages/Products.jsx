import React, { useEffect, useState } from 'react'
import ProductsList from '../cmps/products/ProductsList'
import { asyncStorageService } from '../services/async-storage.service';
import { useDispatch } from 'react-redux';
import { setProduct } from '../store/actions/workBenchDB.actions';


function Products() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState(null)
    const [CurrProduct, setCurrProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    async function getData() {
        try {
            const getProducts = await asyncStorageService.query("productDB")
            setProducts(getProducts)
            setIsLoading(false)
        }
        catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false); // Make sure to set isLoading to false even in case of error
        }
    }

    useEffect(() => {
        getData()
    }, [products])

    async function onRemove(productId) {
        try {
            await asyncStorageService.remove("productDB", productId)
            getData()
            console.log(CurrProduct);
        }
        catch (error) {
            console.error('Error removing product:', error);
        }
    }

    function onSelectProduct(product) {
        setCurrProduct(product)
        dispatch(setProduct(product))
    }

    if (isLoading) return <div className='loading-spinner'></div>;

    return (
        <div className='product-list'>
            <ProductsList products={products} onRemove={onRemove} onSelectProduct={onSelectProduct} />
        </div>
    )
}

export default Products
