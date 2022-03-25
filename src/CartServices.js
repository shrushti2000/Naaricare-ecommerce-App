import axios from 'axios'
export const addToCart = (item, encodedToken) => {
    console.log('under item', item)
    fetch("/api/user/cart", {
        method: "POST",
        body: JSON.stringify({ product: item }),
        headers: {
            authorization: encodedToken,
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

export const updateProductQty = async (id, encodedToken, dispatch, actionType) => {
    try {
        const {
            data: { cart },
        } = await axios.post(
            `api/user/cart/${id}`,
            {
                action: {
                    type: actionType,
                },
            },
            {
                headers: {
                    authorization: encodedToken,
                },
            }
        );
        dispatch({ type: 'SET_CART', payload: cart })
    } catch (error) {
        console.log("Error in updateQtyFromCart service", error);
    }
}