function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("diceBtn").addEventListener("click", function () {
    const num = document.getElementById("num").value;
    const result_container = document.getElementById("result-container");
    const image_container = document.getElementById("image-container");
    let scale_of_dice = "";
    switch (num){
        case 1:
            scale_of_dice = "width: 70px";
            break
        case 2:
            scale_of_dice = "width: 50px";
            break
        case 3:
            scale_of_dice = "width: 30px";
            break
    }
    if (num && result_container && image_container) {
        const images = [];
        const values = [];
        for (let i = 0; i < num; i++) {
            const value = generateRandomInt(1, 6);
            values.push(value);
            images.push(`<img src="res/${value}.png" alt="dice ${value}" style="${scale_of_dice}">`)
        }
        result_container.textContent = `dice: ${values.join(", ")}`
        image_container.innerHTML = images.join("")
    }
});