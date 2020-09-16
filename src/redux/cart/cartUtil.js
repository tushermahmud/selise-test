export const addNewItemsToCart=(previousItems,itemsToAdd)=>{
    const existingCartItem=previousItems.find(cartItem=>cartItem._id===itemsToAdd._id);
    if(existingCartItem){
        return previousItems.map(cartItem=>cartItem._id===itemsToAdd._id?
            {...cartItem, quantity:cartItem.quantity + 1}:cartItem
        )
    }
    return [...previousItems,{...itemsToAdd,quantity:1}]
}


