import { faker } from '@faker-js/faker'

const profile = []

for (let i = 0; i < 5; i++) {
    const uuid = faker.datatype.uuid();
    const name = faker.name.findName();
    const image = faker.image.avatar();
    const job = faker.name.jobTitle();
    const info = faker.lorem.paragraph(5)
    const items = {
        uuid: uuid,
        name: name,
        image: image,
        job: job,
        info: info
    }
    profile.push(items)


}

export default profile;