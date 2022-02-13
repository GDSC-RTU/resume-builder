var request = require('request');
var access_token = 'AQVEi-d1FmxFA83geqjOXGfEtSmheFdjgaOzh6CJqnbwYVuSfiBhg_mEtqaNVKtvKLr1ySkPidDN5Vn9H9_FfjcE30Asrt8V9NEQWVfypgI_g6FAdc037lsJSPhtvzbzKmEgba39qrtjfhElKfF58OCQJJyL3e-YyFqd1q2nDT0XPR2Dy1wB7zM6-P6kcNy_5xHvplTZUgXnw0vcd5W80xRwd0cQv5IfD7T81mTHNcgcuhGlYkudjCEEL35BU3bLG2eNjI8hlzQzPe7jAr_3BSAv6AJyGp273xJTfcle5fP-F3WBUt8CiUIYfD9H3FKDqrPfsdKas3sHEb4mEs4Nbdoagq6rzg';

function callMeAPI(accessToken, done){
	request.get({url:"https://api.linkedin.com/v2/me",headers:{"Authorization": "Bearer "+accessToken}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}

function callEmailAPI(accessToken, done){
	request.get({url:"https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",headers:{"Authorization": "Bearer "+accessToken}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}

function main(done){
	callMeAPI(access_token,function(err, res){
		if (err) {done(err)}
		else{
			var firstname = res.localizedFirstName;
			var lastname = res.localizedLastName;
			callEmailAPI(access_token,function(err, res){
				if (err) {done(err)}
				else{
					var email = res.elements[0]["handle~"].emailAddress;
					console.log(firstname+" "+lastname+" "+email);
					done(null,"success");
				}
			});
		}
	});
}

main(function(a,b){});


