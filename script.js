let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "C") {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.currentTarget.id == "bs"){
            let l = string.length;
            string = string.substring(0, l-1);
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
