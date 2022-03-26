import axios from "axios";

export const handleAddToWishlist=(wishlist,item,encodedToken)=>{
  const isItemPresent = wishlist.find(itemInWishlist => itemInWishlist._id === item._id)
    if (isItemPresent === undefined) {
      addToWishlist(item, encodedToken)
    }
}

export const addToWishlist = (item, encodedToken) => {
   try{
    fetch("/api/user/wishlist", {
        method: "POST",
        body: JSON.stringify({ product: item }),
        headers: {
            authorization: encodedToken,
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
   }catch(error){
       console.log(error)
   }
}

export const removeFromWishlist=async(id,encodedToken,dispatch)=> {
    try {
      const {
        data: { wishlist },
      } = await axios.delete(`api/user/wishlist/${id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      dispatch({ type: 'SET_WISHLIST', payload: wishlist })
    } catch (error) {
        console.log("Error in wishlist service", error);
    }
  }