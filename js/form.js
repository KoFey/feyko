function proverka() {
    let name = document.getElementById("name_txt").value;
    let email = document.getElementById("email_txt").value;
    let message = document.getElementById("message_txt").value;
    let reg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(reg.test(name)|| re.test(email));
    if(!reg.test(name)|| !re.test(email)) {
        document.getElementById("error").className= "error";
        document.getElementById("error").innerHTML = "Заполните форму корректно, пожалуйста.";
    } else {
        document.getElementById("error").className= "error";
        document.getElementById("error").innerHTML = "Сообщение отправлено";
    }
}