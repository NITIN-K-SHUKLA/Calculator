var btn = document.querySelectorAll(".button");
var display = document.querySelector(".display");
for(var i=0; i < btn.length; i++)
{
    btn[i].addEventListener("click", function (){

        var no = this.innerHTML;
        print(no);
    });
}
document.addEventListener("keypress", function (event){

    var no = event.key;
    print(no);
});

function print(no)
{
    switch(no)
    {
        case "C":
            display.innerHTML = "";
            break;
        case "←":
            display.innerHTML = display.innerHTML.slice(0,-1);
            break;
        case "=":
            try{
                display.innerHTML = eval(display.innerHTML);
            }
            catch{
                display.innerHTML = "Error!";
            }
            break;
        default: display.innerHTML += no;
    }
    display.innerHTML = text;
}
