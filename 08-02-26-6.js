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

            switch (this.type)
            {

                case "warrior":
                console.log(`The ${this.type} atacked using sword`);
                break

                case "wizard":
                console.log(`The ${this.type} atacked using magic`);
                break

                case "monk":
                console.log(`The ${this.type} atacked using marcial arts`);
                break

                case "ninja":
                console.log(`The ${this.type} atacked using shuriken`);
                break

            }

        }

    }

    let hero = new Hero("Pedrinho", "40", "monk")

    hero.atack()

}