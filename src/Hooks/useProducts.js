import { useEffect, useState } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(result => result.json())
            .then(data => setProducts(data));
    }, []);
    
    return { products  , setProducts};
}