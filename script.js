var names =["Anna", "Jon", "Jimmy", "Rahul", "Sushmita", "Aslam", "Riya", "Jerry", "Sraboni", "Irfan"];
for(var i=0; i<names.length; i++){
    var firstletter = names[i].charAt(0).toLowerCase();
 if(firstletter == 'j'){
     console.log("GoodBye " +names[i]);
 } else {
     console.log("Hello " +names[i]);
 }
}