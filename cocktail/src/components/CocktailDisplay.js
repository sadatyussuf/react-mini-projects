import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { useGlobalContext } from "../context/Context"
const CocktailDisplay = () => {
    const { loading, cocktails } = useGlobalContext()
    //   console.log(loading)
    if (loading) {
        return <Loading />
    }

    return (
        <section className="section">
            <h2 className='section-title'>cocktails</h2>
            <div className="cocktails-center">
                {
                    cocktails.map((cocktail) => {
                        console.log(cocktail)
                        const { id, glass, image, info, name } = cocktail
                        return (
                            <article className="cocktail" key={id}>
                                <div className="img-container">
                                    <img src={image} alt={name} />
                                </div>
                                <div className="cocktail-footer">
                                    <h3>{name}</h3>
                                    <h4>{glass}</h4>
                                    <p>{info}</p>
                                    <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details' >details</Link>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default CocktailDisplay