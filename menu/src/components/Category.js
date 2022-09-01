import React from 'react'

const Category = ({ filterItems, category }) => {
    return (
        <div className="btn-container">
            {
                category.map((category, index) => {

                    return (

                        <button type="button" key={index} className="filter-btn"
                            onClick={() => filterItems(category)}>
                            {category}
                        </button>
                    )

                })
            }

        </div>
    )
}

export default Category