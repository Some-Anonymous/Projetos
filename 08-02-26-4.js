main() 

function main()
{

    class Hero
    {

        constructor(name, age, type)
        {

            this.name = name
            this.age = age
            this.type = type

        }

        atack()
        {

            let weapon = (this.type === "warrior") ? "sword" : (this.type === "wizard") ? "magic"
                                                             : (this.type === "monk") ? "macial arts"
                                                             : (this.type === "Ninja") ? "shuriken"
                                                             : "something"

            console.log(`The ${this.type} atacked using ${weapon}`);

        }

    }

    let hero = new Hero("Jesus", "33", "man's son")

    hero.atack()

}