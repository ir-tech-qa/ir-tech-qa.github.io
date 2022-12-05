    function addNew() {
        if(document.getElementById("age").value < 0){
            throwError();
            return;
        }
        if(!document.getElementById("last_name").value) {
            document.getElementById("last").className = "rederror";
            return;
        }else{
            document.getElementById("last").className = "";
        }
        if(!document.getElementById("password").value) {
            alert("Поле пароль обязательное для заполненя")
            return;
        }
        if(document.getElementById("doc").value === "Мультипаспорт") {
            return;
        }
        var table = document.getElementById("customers");
        var row = table.insertRow(1);
        var firstName = row.insertCell(0);
        var lastName = row.insertCell(1);
        var thirdName = row.insertCell(2);
        var age = row.insertCell(3);
        var sex = row.insertCell(4);
        var doc = row.insertCell(5);
        var stat = row.insertCell(6)
        firstName.innerHTML = document.getElementById("fisrt_name").value;
        lastName.innerHTML = document.getElementById("last_name").value;
        if (!thirdName.innerHTML) {
            thirdName.innerHTML = "Не указано";
        } else {
	    thirdName.innerHTML = "";
	}
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
