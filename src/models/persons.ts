class Person {
    id: number
    name: string
    age: number

    constructor(name: string, age: number) {
        this.id = Math.random()
        this.name = name
        this.age = age
    }
}

export default Person
