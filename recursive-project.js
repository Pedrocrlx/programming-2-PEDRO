function timerMessage(time) {
    if (time <= 0) {
        console.log("Tempo esgotado! ");
        return;
    }
    console.log(`Faltam ${time} segundos...`);
    setTimeout(() => timerMessage(time - 1), 1000);
}

timerMessage(15);