import React, { useEffect, useState } from 'react'
import ProductsList from '../cmps/products/ProductsList'
import { useNavigate } from 'react-router-dom'
import { asyncStorageService } from '../services/async-storage.service';
import { useDispatch } from 'react-redux';
import { setProduct } from '../store/actions/workBenchDB.actions';


function Products() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [products, setProducts] = useState(null)
    const [CurrProduct, setCurrProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    async function getData() {
        try {
            const getProducts = await asyncStorageService.query("productDB")
            setProducts(getProducts)
            setIsLoading(false)
        }
        catch {
            console.log('error');

        }
    }

    useEffect(() => {
        getData()
    }, [products])

    function onRemove(productId) {
        try {
            asyncStorageService.remove("productDB", productId)
            getData()

        }
        catch {
            console.log('error with removing product');
        }

    }
    function onSelectProduct(product) {
        setCurrProduct(product)
        dispatch(setProduct(product))
        navigate(`/product/edit/${CurrProduct._id}`)


    }


    function addProduct() {
        navigate('/product/edit');
    }


    if (isLoading) return <div className='loading-spinner'></div>;

    return (
        <div>
            <button onClick={addProduct}>Add product</button>
            <div>
                <ProductsList products={products} onRemove={onRemove} onSelectProduct={onSelectProduct} />
            </div>
        </div>

    )
}

export default Products