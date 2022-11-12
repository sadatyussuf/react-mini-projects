import React from 'react'

const Searchbar = () => {
    return (
        <section className="section search">
            <form action="" className="search-form">
                <div className="form-control">
                    <label htmlFor="name">
                        search your favorite cocktail
                    </label>
                    <input type="text" name="name" id="name" />
                </div>
            </form>
        </section>
    )
}

export default Searchbar