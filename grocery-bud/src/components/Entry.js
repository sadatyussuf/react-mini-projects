import React from 'react'

const Entry = () => {
    return (
        <>
            <form className="grocery-form">
                <h3>grocery bud</h3>
                <div className="form-control">
                    <input type="text" className="grocery"
                        placeholder="e.g. eggs"
                        value='' />

                    <button type="submit" className="submit-btn">submit</button>
                </div>
            </form>
        </>
    )
}

export default Entry