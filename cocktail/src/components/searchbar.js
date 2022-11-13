import React from 'react'
import { useGlobalContext } from "../context/Context"

const Searchbar = () => {
    const { setSearchText } = useGlobalContext()
    const refSearchInput = React.useRef('')


    React.useEffect(() => {
        refSearchInput.current.focus()
    }, [])

    function handleChange() {
        setSearchText(refSearchInput.current.value)
        // console.log(refSearchInput.current.value)

    }

    function handleSubmit(e) {
        e.preventDefault()
        // console.log('hi')
    }
    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">
                        search your favorite cocktail
                    </label>
                    <input type="text" name="name" id="name" ref={refSearchInput} onChange={handleChange} />
                </div>
            </form>
        </section>
    )
}

export default Searchbar