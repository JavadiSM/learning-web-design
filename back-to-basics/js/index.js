function generateRandomInt(min, max) {
    return Math.floor(Math.random * (max - min + 1)) + min;
}

function submitInfo() {
    if (checkbox.checked) {
        if (studentRadio.checked){
            result.textContent = `checked as student!`
        } else if(parentsRadio.checked){
            result.textContent = `checked as parent!`
        } else {
            result.textContent = `checked as teacher!`
        }
    } else {
        result.textContent = `not checked`
    }
}

const result = document.getElementById("result");
const checkbox = document.getElementById("isChecked");

const studentRadio = document.getElementById("student");
const parentsRadio = document.getElementById("parents");
const teacherRadio = document.getElementById("teacher");

const submitBtn = document.getElementById("submit");
submitBtn.onclick = function (){
    submitInfo()
}