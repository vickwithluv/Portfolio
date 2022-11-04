function myFunction() {
  const copyText = document.getElementById("nickDiscord");

  navigator.clipboard.writeText(copyText.innerText)
  .then((nick) => {
    /* clipboard successfully set */
      alert("Nick do Discord copiado: " + copyText.innerText);

  });
}
