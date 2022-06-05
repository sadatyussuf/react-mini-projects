import { faker } from '@faker-js/faker'

const data = []



for (let i = 0; i < 5; i++) {
    const uuid = faker.datatype.uuid()
    const name = faker.name.findName();
    const image = faker.image.avatar()
    const age = faker.datatype.number({ min: 20, max: 40, })

    const items = {
        uuid: uuid,
        name: name,
        image: image,
        age: age
    }
    data.push(items)


}
console.log(data)

export default data;