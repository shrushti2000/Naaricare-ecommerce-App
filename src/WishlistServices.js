import axios from "axios";

export const handleAddToWishlist=(wishlist,item,token,dispatch)=>{
  const isItemPresent = wishlist.find(itemInWishlist => itemInWishlist._id === item._id)
    if (isItemPresent === undefined) {
      addToWishlist(item, token,dispatch)
    }
}

export const addToWishlist = (item, token,dispatch) => {
   try{
    fetch("/api/user/wishlist", {
        method: "POST",
        body: JSON.stringify({ product: item }),
        headers: {
            authorization: token,
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(res => res.json())
        .then(data =>  dispatch({ type: 'SET_WISHLIST', payload: data.wishlist }))
   }catch(error){
       console.log(error)
   }
}

export const removeFromWishlist=async(id,token,dispatch)=> {
    try {
      const {
        data: { wishlist },
      } = await axios.delete(`api/user/wishlist/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: 'SET_WISHLIST', payload: wishlist })
    } catch (error) {
        console.log("Error in wishlist service", error);
    }
  }
