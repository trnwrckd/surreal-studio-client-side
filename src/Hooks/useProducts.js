import { useEffect, useState } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(result => result.json())
            .then(data => setProducts(data));
    }, []);
    
    return { products };
}