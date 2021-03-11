window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       let testName = document.querySelector("input[name=testName")
       let testDate = document.querySelector("input[name=testDate]")
       let rocketType = document.querySelector("select[name=rocketType]")
       //why does this work without the Number() declaration? Shouldn't it be passing as a string?
       //WHY DOES THIS NOT WORK FOR NUMBER??? THAT"S ASS BACKWARDS. I can get why it would work as a str, but it should ALSO work as a number . . . .
       let boosterCount = Number(document.querySelector("input[name=boosterCount]"))
       let windRating = Number(document.querySelector("input[name=windRating]"))
       let productionServers = document.querySelector("input[name=productionServers]") 

       if (testName.value === "" || testDate.value === "" || rocketType.value === ""){
           alert("All fields are required!")
           event.preventDefault()
           console.log("prevented submission")
       } else if (boosterCount.value < 10) {
           //maybe this works because .value automatically reduces to a number? Or is this type looseness catching a mistake I'm making? 
           alert("Number of boosters must be 10 or greater.")
           event.preventDefault()
           console.log("conditional triggered")
       } else if (typeof boosterCount.value === "string"){
           alert("Booster count is a string")
           //it's a string when I pass it in, but if I use Number() it doesn't trigger the  <10 condition???????? I guess this is just JS's type weirdness
       } else if (typeof windRating === "number") {
           alert("Windrating is a number")
       }
    });
 });