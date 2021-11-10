import { useEffect, useState } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [productLoaded, setProductLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(result => result.json())
            .then(data => {
                setProducts(data);
                setProductLoaded(true);
            });
    }, []);
    
    return { products  , productLoaded, setProducts};
}