import { data } from "../utilis/data";

export const initialState = {
    'total': 2199.96,
    'products': data
}
function sumTotal(products) {
    let total = 0

    for (let product of products) {
        // console.log(product)
        const amount = product['amount'];
        const price = product['price'];
        // console.log(price, amount)

        total += (price * amount)
    }
    return total

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
                    // total = total + (product.amount * product.price)
                    // console.log(total)
                    return product
                })
                const total = sumTotal(productItems).toFixed(2)

                return {
                    ...state,
                    total: total,
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
                const total = sumTotal(productItems).toFixed(2)
                return {
                    ...state,
                    total: total,
                    products: productItems
                }
            }


        case 'REMOVE':
            {
                const productItems = state.products.filter(product => product.id !== action.payload)
                const total = sumTotal(productItems).toFixed(2)
                return {
                    ...state,
                    total: total,
                    products: productItems
                }
            }
        case 'CLEAR_ALL':
            {
                return {
                    ...state,
                    total: 0,
                    products: []
                }
            }


        default:
            return state;
    }

}