import Values from "values.js"

const HextoRBG = (hex) => {
    try {

        const color = new Values(hex)
        const response = color.all(10)
        return response
    } catch (e) {
        console.error(e)
        return false
    }

}

export default HextoRBG