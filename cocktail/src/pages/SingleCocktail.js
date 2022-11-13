import React from 'react'
import { useParams, Link } from 'react-router-dom'

import Loading from '../components/Loading'

const SingleCocktail = () => {
    const { id } = useParams()

    const [loading, setLoading] = React.useState(false)
    const [cocktail, setCocktail] = React.useState(null)

    React.useEffect(() => {
        async function getCocktail() {
            setLoading(true)
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                const data = await response.json()
                const { drinks } = data

                // console.log(drinks)
                if (drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ]

                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    }
                    setCocktail(newCocktail)
                }
                else {
                    setCocktail(null)
                }
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        getCocktail()
    }, [id])


    if (loading) {
        return (
            <Loading />
        )
    }

    if (!cocktail) {
        return <h2 className='section-title'>no cocktail to display</h2>
    }

    return (
        <section className="section cocktail-section">
            <Link to={'/'} className='btn btn-primary'>back home</Link>
            <h2 className="section-title">
                {cocktail.name}
            </h2>
            <div className="drink">
                <img src={cocktail.image} alt={id} />
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name:</span>
                        {cocktail.name}
                    </p>
                    <p>
                        <span className="drink-data">category:</span>
                        {cocktail.category}
                    </p>
                    <p>
                        <span className="drink-data">info:</span>
                        {cocktail.info}
                    </p>
                    <p>
                        <span className="drink-data">glass:</span>
                        {cocktail.glass}
                    </p>
                    <p>
                        <span className="drink-data">instructions:</span>
                        {cocktail.instructions}
                    </p>
                    <p>
                        <span className="drink-data">ingredients:</span>
                        {
                            cocktail.ingredients.map((item, index) => {
                                return item ? <span key={index}>{item}</span> : null
                            })
                        }
                    </p>
                </div>
            </div>
        </section>

    )
}

export default SingleCocktail