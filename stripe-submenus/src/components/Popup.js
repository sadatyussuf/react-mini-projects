import { useContextProvider } from '../context/MenuContext'



const Popup = () => {

    const { currentSubLink, elementPosition, isSubmenuOpen } = useContextProvider()

    const { center, columnNum } = elementPosition
    console.log(elementPosition)
    if (currentSubLink.length === 0) {
        return (
            <p>lol</p>
        )
    }
    const { page, links } = currentSubLink[0]

    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} style={{ 'left': center }} >
            <section>
                <h4>
                    {page}
                </h4>
                <div className={`submenu-center col-${columnNum}`}>
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