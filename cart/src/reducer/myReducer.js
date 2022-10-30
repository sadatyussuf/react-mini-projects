import { data } from "../utilis/data";

export const initialState = {
    'total': 2199.96,
    'products': data
}


export function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            {
                const productItems = state.products.map(product => {
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
                    products: productItems
                }
            }
        case 'DECREMENT':
            {
                const productItems = state.products.map(product => {
                    if (product.id === action.payload) {
                        return {
                            ...product,
                            amount: product.amount - 1
                        }
                    }
                    return product
                }).filter(item => item.amount !== 0)
                return {
                    ...state,
                    products: productItems
                }
            }


        default:
            return state;
    }

}