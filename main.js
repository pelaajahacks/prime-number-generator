var slider = document.getElementById("num_slider");
var output = document.getElementById("slider_val");

output.innerHTML = slider.value;


slider.oninput = function() {
    output.innerHTML = this.value;
}

output.addEventListener('keyup', event => {
    slider.value = output.innerHTML;
    console.log(slider.value);

});


slider.addEventListener("mousemove", function() {
    var x = slider.value;
    x = x / 1000
    var color = "linear-gradient(90deg, rgb(5, 255, 200)" + x + "%, rgb(214, 214, 214)" + x + "%)";
    slider.style.background = color
})

function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function display() {
    var n = output.innerHTML;
    var arr = [2];
    var span = document.getElementById("generated_numbers");
    for (var i = 3; i < n; i += 2) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    console.log(arr)
    span.innerHTML = arr.join('\r\n') /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(span.innerHTML);
}