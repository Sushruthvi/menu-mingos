

const cartReducer = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        let {item_id, amount, curElem} = action.payload;
      
        let cartProduct;
        cartProduct = {
            id: item_id,
            name: curElem.item_name,
            amount: amount,
            price: curElem.price,
            category: curElem.category,
        };
        return{...state,cart: [...state.cart, cartProduct]} ;
      
    };

    if(action.type === "REMOVE_ITEM"){
        let updateCart = state.cart.filter((curElem) => {
            return curElem.id !== action.payload
        })
        return {...state, cart: updateCart}
    }

    if(action.type === "TOTAL_AMOUNT"){
        let total_price=state.cart.reduce((initialVal, curElem) => {
            let {price, amount} = curElem;
            initialVal = initialVal + (price * amount);
            return initialVal
        },0);

        return {...state, total_price: total_price}
    }
    return state
    }

export default cartReducer;