burger = document.querySelector(".burger")
firstDiv = document.querySelector(".first-div")
close = document.querySelector(".cross")


burger.addEventListener("click", function ()
{
    firstDiv.classList.add("show-div")
    burger.style.display = "none";
    close.style.display = "block";
})

close.addEventListener("click", function ()
{
    firstDiv.classList.remove("show-div")
    burger.style.display = "block";
    close.style.display = "none";
})




