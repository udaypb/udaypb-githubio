function submit(){

alert('thh');
	var adults=document.getElementById('dropdown-1');
	var children=document.getElementById('dropdown-2');

	var no_adults=adults.options[adults.selectedIndex].value;
	var no_children=children.options[children.selectedIndex].value;

	var date=document.getElementById('date').value;
	var email=document.getElementById('email').value;
	var phone_no=document.getElementById('phone_no').value;
	var state=document.getElementById('state')value;
	var country=document.getElementById('country').value;
	var pin=document.getElementById('pin_code').value;

	if(no_adults==0||no_children==0){

		alert("marked fields cannot be empty");
		adults.style.border-style=solid;
		adults.style.border-color=red;

	}

}