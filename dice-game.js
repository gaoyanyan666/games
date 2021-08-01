function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        //console.log(roll);

        if (roll === 1) {
            alert("Game over, no more rolls!");
            break;
        } else if (roll < 4) {
            continue;
        } else if (roll === 4) {
            alert("Oops!You just lose 1 gold coin!");
            goldCoins = goldCoins - 1;
        } else if (roll === 5) {
            alert("Congratulations, you win 5 gold coins!");
            goldCoins = goldCoins + 5;
        } else {
            alert("Congratulations, you win 6 gold coins!");
            goldCoins = goldCoins + 6;
        }
        alert("Now your total gold coins are " + goldCoins + " gold coins!");
    }

}