const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 33,
    },
       {
      id: 4,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 100,
    },
  ];

  /*
  let passengers2=[];
  let b=0;
  for(i=passengers.length;i>0;i--){
    for(j=0;j<passengers.length;j++){
        if(passengers[j].connectedFlights==i){
            passengers2[b]=passengers[j];
            b++;
        }
    }
  }
  console.log(passengers2);
*/

  let a=[]
  let b=0;
  let big=passengers[0].connectedFlights;

  for(i=0;i<passengers.length;i++){
    if(passengers[i].connectedFlights>big){
        big=passengers[i].connectedFlights;
    }
  }

  for(i=big;i>0;i--){
    for(j=0;j<passengers.length;j++){
        if(passengers[j].connectedFlights==i){
            a[b]=passengers[j];
            b++;
        }
    }
  }
  console.log(a);