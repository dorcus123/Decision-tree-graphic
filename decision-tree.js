function transportationOptions(weather, time, hungry) {
  
  if(weather  ==='sun'){
     if(time > 30){
       return "Walk"
     }
     else{
       return "go by bus"
     }
   }
  else if(weather === 'cloud'){
   if(hungry === 'yes'){
       return 'walk'
   }
   else{
     return 'bus'
   }
}

  else if(weather==='rain'){
   return "bus"
  }
}

let w='sun'
let t1= 31
let h1='no'

let res= transportationOptions(w,t1,h1)
console.log("when sunny and time greater than 30",res)

let w1='sun'
let t2= 29
let h2='no'

let res1= transportationOptions(w1,t2.h2)
console.log("when sunny and time lesser than 30",res1)

let w2='cloud'
let t3=0
let h3= 'yes'

let res2= transportationOptions(w2,t3,h3)
console.log("when cloudy and hungry go by",res2)

let w3='cloud'
let t4=0
let h4= 'no'

let res3= transportationOptions(w3,t4,h4)
console.log("when cloudy and not hungry go by",res3)

let w4='rain'
let t5=0
let h5= 'no'

let res4= transportationOptions(w4,t5,h5)
console.log("when raining go by",res4)


  