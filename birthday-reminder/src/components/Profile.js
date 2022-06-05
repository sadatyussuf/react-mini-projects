// import React from 'react'

const Profile = ({ people }) => {
    // console.log(people)
    return (
        <>
            {
                people.map((data) => {
                    return (
                        <article key={data.uuid} className
                            ='person'>
                            <img src={data.image} alt={data.name} />
                            <div>
                                <h4>{data.name}</h4>
                                <p>{data.age} years</p>
                            </div>
                        </article>
                    )
                })
            }
        </>
    )
}

export default Profile