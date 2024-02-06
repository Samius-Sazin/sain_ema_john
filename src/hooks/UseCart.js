import { useEffect, useState } from "react"
import { getStoredCart } from "../Component/utilities/fakedb";

//get value from local storage, Here LS = Local Storage
const UseCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (products.length) {
            const savedCartData = getStoredCart();
            const LSproducts = [];

            for (const LSkey in savedCartData) {
                const searchedItemFromLS = products.find(product => product.key === LSkey);

                if (searchedItemFromLS) {
                    searchedItemFromLS.quantity = savedCartData[LSkey];
                    LSproducts.push(searchedItemFromLS);
                }
            }
            setCart(LSproducts);
        }
    }, [products])

    return [cart, setCart];
}

export default UseCart;