import { useEffect, useState } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [productLoaded, setProductLoaded] = useState(false);

    useEffect(() => {
        fetch('https://infinite-lowlands-70497.herokuapp.com/products')
            .then(result => result.json())
            .then(data => {
                setProducts(data);
                setProductLoaded(true);
            });
    }, []);
    
    return { products  , productLoaded, setProducts};
}