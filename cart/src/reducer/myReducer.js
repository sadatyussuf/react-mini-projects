import { data } from "../utilis/data";

export const initialState = {
    'total': 2199.96,
    'numOfItems': 4,
    'products': data
}
function sumTotal(products) {
    let total = 0
    let numOfItems = 0

    for (let product of products) {
        // console.log(product)
        const amount = product['amount'];
        const price = product['price'];
        // console.log(price, amount)

        numOfItems += amount

        total += (price * amount)
    }
    return [total.toFixed(2), numOfItems]

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
                const [total, numOfItems] = sumTotal(productItems)
                return {
                    ...state,
                    total: total,
                    numOfItems: numOfItems,
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
                const [total, numOfItems] = sumTotal(productItems)
                return {
                    ...state,
                    total: total,
                    numOfItems: numOfItems,
                    products: productItems
                }
            }


        case 'REMOVE':
            {
                const productItems = state.products.filter(product => product.id !== action.payload)
                const [total, numOfItems] = sumTotal(productItems)
                return {
                    ...state,
                    total: total,
                    numOfItems: numOfItems,
                    products: productItems
                }
            }
        case 'CLEAR_ALL':
            {
                return {
                    ...state,
                    total: 0,
                    numOfItems: 0,
                    products: []
                }
            }


        default:
            return state;
    }

}