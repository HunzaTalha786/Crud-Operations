let rollV,nameV,email,addressV,contactV;

function readForm(){
rollV=document.getElementById('rollNo').value;
nameV = document.getElementById('name').value ;
email = document.getElementById('email').value ;
addressV = document.getElementById("address").value ;
contactV = document.getElementById('contactNo').value ;
console.log(rollV,nameV,email,addressV,contactV);

}

//create button working
document.getElementById('create').onclick = function(){
    readForm();


    firebase.database().ref("student/" + rollV)
    .set(
        {
            RollNo:rollV,
            Name:nameV,
            Email:email,
            Address:addressV,
            ContactNo:contactV
        }
    );
    alert("Data Created");
    document.getElementById('rollNo').value = "";
    document.getElementById('name').value = "" ;
    document.getElementById('email').value = "" ;
    document.getElementById("address").value = "" ;
    document.getElementById('contactNo').value = "" ;
}

//read button working
document.getElementById('read').onclick = function(){
    readForm();


    firebase.database().ref("student/" + rollV)
    .on("value",function(snap)
        {
            document.getElementById('rollNo').value =snap.val().RollNo; 
            document.getElementById('name').value =snap.val().Name; 
            document.getElementById('email').value =snap.val().Email; 
            document.getElementById('address').value =snap.val().Address; 
            document.getElementById('contactNo').value =snap.val().ContactNo; 
        }
    );
    
}
//update button working

document.getElementById('update').onclick = function(){
    readForm();


    firebase.database().ref("student/" + rollV)
    .update(
        {
            Name:nameV,
            Email:email,
            Address:addressV,
            ContactNo:contactV
        }
    );
    alert("Data Updated");
    document.getElementById('rollNo').value = "";
    document.getElementById('name').value = "" ;
    document.getElementById('email').value = "" ;
    document.getElementById("address").value = "" ;
    document.getElementById('contactNo').value = "" ;
}

//delete button working
document.getElementById('delete').onclick = function(){
    readForm();


    firebase.database().ref("student/" + rollV)
    .remove();
    alert("Data Deleted");
    document.getElementById('rollNo').value = "";
    document.getElementById('name').value = "" ;
    document.getElementById('email').value = "" ;
    document.getElementById("address").value = "" ;
    document.getElementById('contactNo').value = "" ;
}