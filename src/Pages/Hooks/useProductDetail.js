import { useEffect, useState } from "react";

const useProductDetail = inventoryId =>{
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        const url = `https://morning-meadow-63483.herokuapp.com/products/${inventoryId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[inventoryId])

    return [product, setProduct];
}
export default useProductDetail;