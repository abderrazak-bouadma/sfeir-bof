function addAttender(){
	var attender = {"nickname":"jpuzzler", "email":"bouadma.a@sfeir.com","password":"qwerty"};
	$.ajax({
		type : "PUT",
		url : "api/attender",
		data : attender,
		contentType : "application/json"
	}).success(function(data) {console.data}).error(function(){console.log("server error")})
}
