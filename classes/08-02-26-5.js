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

            let weapon = ""
            if (this.type = "warrior")
            {

                weapon = "sword"

            }

            else if (this.type === "wizard")
            {

                weapon = "magic"

            }

            else if (this.type === "monk")
            {

                weapon = "marcial arts"

            }

            else if (this.type === "ninja")
            {

                weapon ="shuriken"

            }

            else
            {
                weapon = "anything"

            }

            return `The ${this.type} atacked using ${weapon}`

        }

    }

    let hero = new Hero("Joãozinho", "47", "warrior")

    console.log(hero.atack());

}