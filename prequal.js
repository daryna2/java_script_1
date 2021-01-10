var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1995,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
  started: false,
  start: function() {
    this.started=true;
  },
  stop: function() {
    this.started=false;
  },
  drive: function() {
    if(this.started){
      alert(this.make + " "+ this.model+" "+"goes zoom zoom!");
    }else{
      alert("You need to start the engine first.");
    }
  }
};
var cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892,
  started: false,
  start: function() {
    this.started=true;
  },
  stop: function() {
    this.started=false;
  },
  drive: function() {
    if(this.started){
      alert(this.make + " "+ this.model+" "+"goes zoom zoom!");
    }else{
      alert("You need to start the engine first.");
    }
  }
};
var fiat = {
  make: "fiat",
  model: "500",
  year: 1957,
  color: "medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 8800,
  started: false,
  start: function() {
    this.started=true;
  },
  stop: function() {
    this.started=false;
  },
  drive: function() {
    if(this.started){
      alert(this.make + " "+ this.model+" "+"goes zoom zoom!");
    }else{
      alert("You need to start the engine first.");
    }
  }
};
var chevy = {
  make: "chevy",
  model: "belAir",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
  started: false,
  start: function() {
    this.started=true;
  },
  stop: function() {
    this.started=false;
  },
  drive: function() {
    if(this.started){
      alert(this.make + " "+ this.model+" "+"goes zoom zoom!");
    }else{
      alert("You need to start the engine first.");
    }
  }
};

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  }else if(car.year > 1960) {
    return false;
  }
  return true;
}
var worthALook = prequal(cadi);
if (worthALook) {
  console.log("You gotta check out this "+taxi.make+ " "+ taxi.model);
}else{
  console.log("You should really pass on the " +taxi.make +" "+ taxi.model);
}
for(var prop in chevy){
  console.log(prop+":"+chevy[prop]);
}
