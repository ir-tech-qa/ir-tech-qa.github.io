function goTo(login, url) {
    if(login == "student@ir-tech.ru"){
        window.location.href=url;
    }
    else {
        alert('Неправильный логин или пароль')
    }

}
function throwError() {
    console.error("Некорректный возраст учащегося")
}