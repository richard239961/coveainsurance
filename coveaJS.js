//coveaJS.js
//
//Example JS for API test page



var secureToken = ""


//testJS
//
//Function to prove that JS is enabled on the browser
function testjs(){
document.getElementById("demo").innerHTML = "If you can see this then JS is working....";
 
}

//testAPI()
//
//Function to test connection to api. This will display an alertbox with status of api connection.
function testAPI(){
    //alert("testAPI()")
    fetch('https://api.thesmokinggnu.net/api')
    .then(response => response.json())
    .then(data=>{
     console.log(data)
    // Work with JSON data here
     if (data['state'] == 'success'){
      alert("API connection Success")
     }else{
      alert("API connection failed...")
    }
    })
    .catch(err=>{// Do something for an error here
    })

}

//isAuthorized()
//
//Funtction to test if user is authorized. Part of the planned token based authentication.
function isAuthorized(){

	fetch('https://api.thesmokinggnu.net/api/protected',{
	method: 'GET',
	headers:{
	'Authorization': 'Bearer ' + secureToken
	}
	})
	.then( 
	function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem getting authorized. Status Code: ' +
          response.status);
	document.getElementById("authorizeCheck").innerHTML = "Not Authorized"
        return;
      }
	
		
	 response.json()
	.then(function(data){
		console.log(data)
		document.getElementById("authorizeCheck").innerHTML = "Your Authorized"
	
	})
	.catch(err=>{})
        
	//document.getElementById("authorizeCheck").innerHTML = "Nope"
	})
}


//login()
//
//Function to handle user login.
function login(){
        //alert("login attempt")
	usernameLogin = document.getElementById("formLogin").elements[0].value;
	passwordLogin = document.getElementById("formLogin").elements[1].value;

	//alert(JSON.stringify({"username":usernameLogin,"password":passwordLogin}))
	
	fetch('https://api.thesmokinggnu.net/api/login',{
	method: 'POST',
	headers:{
	 'Content-Type': 'application/json'
	},
	body: JSON.stringify({"username":usernameLogin,"password":passwordLogin}) 
	})
	.then(response => response.json())
	.then(data =>{
		//console.log(data['access_token'])
		secureToken = data.access_token
		//console.log(secureToken)
		
	})
	.catch(err=>{ 
		// something
	})
}

//getPolicies()
//
//Function to get and display policies in the system
function getPolicies(){
  text = ""
  fetch('https://api.thesmokinggnu.net/api/policies'
)
    .then(response => response.json())
    .then(data=>{
     console.log(data)
    for (policy of data.policies){
       text += "ID: "+policy.id+" Name: "+policy.policyname + "<br> Description: "+policy.policydetails+"<br><br>";
    }
    document.getElementById("policies").innerHTML = text;
    })
    .catch(err=>{// Do something for an error here
    })
    document.getElementById("div_policies").style.display = "block";
    
}

function hidePolicies(){
    document.getElementById("div_policies").style.display = "none";

}

//getCustomerDetails()
//
//Get and display customer details dependendent on supplied customer number

function getCustomerDetails(){
    var text = ""    
    var customernum = document.getElementById("frm_customerdetails").elements.namedItem("customernumber").value
    var url = "https://api.thesmokinggnu.net/api/client/"+customernum;
    fetch(url,{
  method: 'GET',
  headers:{
        'Authorization': 'Bearer ' + secureToken
  }
  })
		
    .then(
     function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem getting details. Status Code: ' +
          response.status);
        return;
      }
	    
     response.json()
    .then(function(data){
     console.log(data)
     if (response.status == 200){     
     text += "ID: "+customernum+"<br>Name: "+data.firstname+" "+data.surname+"<br>Address: "+data.address1+"<br>Address: "+data.address2+"<br>Postcode: "+data.postcode+"<br>Phone Number: "+data.phonenumber+"<br>email: "+data.email;
     document.getElementById("details").innerHTML = text;
    }
    })
    .catch(err=>{// Do something for an error here
    })
    document.getElementById("div_customerdetails").style.display = "block";
})

}

function hideCustomerdetails(){
    document.getElementById("div_customerdetails").style.display = "none";

}
