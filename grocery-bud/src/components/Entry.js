import React from 'react'

const Entry = ({ inputText, setInputText, handleSubmit, editBtn }) => {
    return (
        <>
            <form className="grocery-form">
                <h3>grocery bud</h3>
                <div className="form-control">
                    <input type="text" className="grocery"
                        placeholder="e.g. eggs"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />

                    <button type="submit" className="submit-btn" onClick={handleSubmit}>{!editBtn ? 'submit' : 'edit'}</button>
                </div>
            </form>
        </>
    )
}

export default Entry