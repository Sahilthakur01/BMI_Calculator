const form = document.querySelector("form")

form.addEventListener('submit', function(e)
 {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const display = document.querySelector("#results")

    if(height==="" || isNaN(height)){
        // console.log(`enter a valid height ${height}`)
        display.innerHTML = `Please Enter a valid height ${height}`
    }
    else if (weight === ""|| isNaN(weight)){
        display.innerHTML = `Please Enter a Valid Weight ${weight}`
    }
    else{
        const finaloutput = (weight/((height*height)/10000)).toFixed(2)
        display.innerHTML = `Your Calculated BMI is ${finaloutput}`
    }
})