function transportationOptions(weather, time, hungry) {
    // Write code here to make the decision tree into an algorithm!
    if(weather() ==='sun'){
      if(time > 30){
        return "Walk"
      }
      else{
        return " bus"
      }
    }
   if(weather()=== 'cloud'){
    if(hungry()==='yes'){
      return 'walk'
    }
    else{
      return 'bus'
    }
   }
   if(weather()==='rain'){
    return "bus"
   }
  }

  