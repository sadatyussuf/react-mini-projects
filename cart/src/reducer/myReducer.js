import { data } from "../utilis/data";

export const initialState = {
    'total': 0,
    'products': data
}


export function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            const productItem = state.products.map(product => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        amount: product.amount + 1
                    }
                }
                return product
            })
            return {
                ...state,
                products: productItem
            }
        // return state.products


        default:
            return state;
    }
    // console.log('state', state)
    // console.log('action', action)
}