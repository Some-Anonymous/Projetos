main() 

function main()
{

    let victories = 0
    let defeats = 0

    let balance = victories - defeats

    let ranking = (balance <= 10) ? "Iron" : (balance <= 20) ? "Bronze"
                                           : (balance <= 50) ? "Silver"
                                           : (balance <= 80) ? "Gold"
                                           : (balance <= 90) ? "Diamond"
                                           : (balance <= 100) ? "Legendary"
                                           : "Immortal"

    console.log(`The hero has a balance of ${balance}, and is at the level of ${ranking}.`);

}