const form = document.querySelector("form")

function sendEmail() {
    Email.send({
        Host : "s1.maildns.net",
        Username : "samndirangu011@gmail.com",
        Password : "CDA0C5C9752E8FB2942AAC5EDCB38CF76D4B",
        To : 'samndirangu011@gmail.com',
        From : "samndirangu011@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});


