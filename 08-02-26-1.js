main() 



function main() {
    console.log(`The hero has a balance of ${calculateBalance(157, 47)}, and is at the level of ${calculateRanking(calculateBalance(157, 47))}.`);
}

function calculateBalance(victories, defeats) {
    return victories - defeats
}

function calculateRanking(balance) {

    if (balance <= 10)
    {
        return "Iron"
    }

    else if (balance <= 20) 
    {
        return "Bronze"
    }

    else if (balance <= 50)
    {
        return "Silver"
    }

    else if (balance <= 80) 
    {
        return "Gold"
    }

    else if (balance <= 90)
    {
        return "Diamond"
    }

    else if (balance <= 100)
    {
        return "Legendary"
    }

    else
    {
        return "Immortal"
    }
    
}