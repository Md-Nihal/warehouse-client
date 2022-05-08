import { useEffect, useState } from "react";

const useProductDetail = inventoryId =>{
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/products/${inventoryId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[inventoryId])

    return [product];
}
export default useProductDetail;