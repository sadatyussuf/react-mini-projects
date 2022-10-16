import { useContextProvider } from '../context/MenuContext'

import { useEffect, useRef, useState } from 'react'

const Popup = () => {
    const [colNum, setColNum] = useState(4)

    const refPosition = useRef(null)

    const { currentSubLink } = useContextProvider()

    useEffect(() => {
        const subLinkPosition = refPosition.current

        // const lengthOfLink = currentSubLink[0]['links'].length
        // setColNum(lengthOfLink)

        if (currentSubLink.length !== 0) {

        }
    }, [currentSubLink])


    if (currentSubLink.length === 0) {
        return (
            <p>lol</p>
        )
    }
    const { page, links } = currentSubLink[0]

    return (
        <aside className="submenu show" ref={refPosition}>
            <section>
                <h4>
                    {page}
                </h4>
                <div className={`submenu-center col-${colNum}`}>
                    {
                        links.map((link, index) => {
                            return (
                                <a href={link.url} key={index}>
                                    {link.icon}
                                    {link.label}
                                </a>
                            )
                        })
                    }
                </div>
            </section>
        </aside>
    )
}

export default Popup