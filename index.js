const button=document.querySelector(".calculate")
button.addEventListener("click",function(e){
    
const Userheight=document.querySelector("#userheight").value;
const Userweight=document.querySelector("#userweight").value;

    const bmi = (Userweight / (Userheight * Userheight) * 10000).toFixed(2);
          if(bmi<18.5)
          {
            document.getElementById("result").innerHTML=`Your BMI is: ${bmi},  so you are underweight.`
          }else if(bmi >= 18.5 && bmi < 24.9){
            document.getElementById("result").innerHTML=`Your BMI is: ${bmi}, so your weight is normal.` 
          }else if(bmi>24.9)
          {
            document.getElementById("result").innerHTML=`Your BMI is ${bmi}, so you are Overweight.`
          }
})


