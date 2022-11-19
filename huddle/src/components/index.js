import React from 'react'
import { GrInstagram, GrTwitter, GrFacebookOption } from 'react-icons/gr'

import logo from '../images/logo.svg'
import illustration from '../images/illustration-mockups.svg'

const Index = () => {
    return (
        <div className='container'>
            <nav className="nav-container">
                <img src={logo} alt="logo" />
            </nav>
            <main className="main-container">
                <div className='main-image'>

                    <img src={illustration} alt="illustration-mockups" />
                </div>

                <div className='main-info'>
                    <h1>
                        build the community your fans will love
                    </h1>
                    <p>
                        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
                    </p>

                    <button>register</button>
                </div>

            </main>
            <footer className="footer-container">
                <ul className="icons-link">
                    <li>
                        <a href="#">
                            <GrFacebookOption className='icons' />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <GrTwitter className='icons' />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <GrInstagram className='icons' />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Index