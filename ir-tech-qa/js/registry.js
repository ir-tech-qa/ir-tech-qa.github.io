    function addNew() {
        if(document.getElementById("age").value < 0){
            throwError();
            return;
        }
        var table = document.getElementById("customers");
        var row = table.insertRow(1);
        var lastName = row.insertCell(0);
        var firstName = row.insertCell(1);
        var age = row.insertCell(2);
        var sex = row.insertCell(3);
        var doc = row.insertCell(4);
        var stat = row.insertCell(5)
        lastName.innerHTML = document.getElementById("last_name").value;
        firstName.innerHTML = document.getElementById("fisrt_name").value;
        age.innerHTML = document.getElementById("age").value;
        doc.innerHTML = document.getElementById("doc").value;
        sex.innerHTML = getAllVal();
        if(document.getElementById("age").value > 18){
            stat.innerHTML = "С";
            return;
        }
        if(document.getElementById("age").value > 14 && document.getElementById("age").value <= 18){
            stat.innerHTML = "П";
            return;
        }
        stat.innerHTML = "Р";

    }
    function getAllVal() {
        sel = document.getElementById("sex");
        var values = "";
        for(var i=0; i < sel.options.length; i++){
            if(sel.options[i].selected==true){
                values += sel.options[i].value + " ";
            }
        }
        return values;
    }
	function BrowserDetect() {
		var nVer = navigator.userAgent;
		var verOffset;
		verOffset = nVer.indexOf("Chrome");
		console.log(verOffset)
		if(verOffset<0){
			document.getElementById("body").style.visibility= "hidden"
		}
	}