var buttons = document.getElementsByClassName("button");
var length = buttons.length;
var display = document.getElementById("display");
var equalsWasClicked = false;
var expression = "";

for (var i = 0; i < length; i++) {
    var button = buttons[i];

    button.addEventListener("click", function(){
        if (this.id === "equals") {
            var result = eval(expression).toString();
            if (result.length > 15) {
                result = result.substring(0, 15);
            }

            display.innerHTML = result;
            equalsWasClicked = true;
        } else {
            if(equalsWasClicked && (this.value === "+" ||
                                    this.value === "-" ||
                                    this.value === "*" ||
                                    this.value === "/")) {
                    display.innerHTML = this.value;
                    expression += this.value;
                    equalsWasClicked = false;
                    operatorWasClicked = true;
            } else {
                if (this.id === "clear") {
                    display.innerHTML = "0";
                } else if (this.id ==="clearall"){
                    display.innerHTML = "0";
                    expression = "";
                } else {
                    if (this.value === "+" || this.value === "-" ||
                        this.value === "*" || this.value === "/") {
                       
                        if (!OperatorWasClicked()) {
                            expression += this.value;
                        } else {
                            expression = expression.substring(0, expression.length -2);
                            expression += this.value;
                        }

                        display.innerHTML = this.value;

                    } else {
                        if (display.innerHTML === "0" || OperatorWasClicked()){
                            display.innerHTML = this.value;
                        } else {
                            display.innerHTML += this.value;
                        }
                        
                        expression += this.value;
                    }
                }
            }
        }
    });    
}
function DisplayLengthIsValid() {
    return display.innerHTML.length + 1 <= 15;
}

function OperatorWasClicked() {
    return display.innerHTML === "+" ||
            display.innerHTML === "-" ||
            display.innerHTML === "*" ||
            display.innerHTML === "/";
}