function verificar() {
  let data = new Date();
  let actualYear = Number(data.getFullYear());
  let birthYear = Number(document.querySelector("input#txtano").value);
  let result = document.querySelector("div#result");
  let sex = document.getElementsByName("radsex");
  let age = actualYear - birthYear;
  let gender = "";
  let pronoun = "";
  let image = document.createElement("img");
  if (birthYear == 0 || birthYear > actualYear || birthYear < 1900) {
    window.alert(`[ERRO] Verifique os dados e tente novamente!`);
  } else {
    if (sex[0].checked) {
      gender = "Homem";
      pronoun = "um";
      if (age <= 10) {
        console.log(`Criança`);
        image.setAttribute("src", "./assets/0-10-M.png");
      } else if (age > 11 && age <= 20) {
        console.log(`Jovem`);
        image.setAttribute("src", "./assets/10-20-M.png");
      } else if (age > 20 && age <= 30) {
        console.log(`adulto`);
        image.setAttribute("src", "./assets/20-30-M.png");
      } else if (age > 30 && age <= 45) {
        console.log(`Adulto Veterano`);
        image.setAttribute("src", "./assets/30-45-M.png");
      } else if (age > 45 && age <= 60) {
        console.log(`Terceira Idade`);
        image.setAttribute("src", "./assets/45-60-M.png");
      } else if (age > 60 && age <= 75) {
        console.log(`Idoso`);
        image.setAttribute("src", "./assets/60-75-M.png");
      } else if (age > 75) {
        console.log(`Idoso avançado`);
        image.setAttribute("src", "./assets/75-M.png");
      }
    } else if (sex[1].checked) {
      gender = "Mulher";
      pronoun = "uma";
      if (age <= 10) {
        console.log(`Criança`);
        image.setAttribute("src", "./assets/0-10-F.png");
      } else if (age > 11 && age <= 20) {
        console.log(`Jovem`);
        image.setAttribute("src", "./assets/10-20-F.png");
      } else if (age > 20 && age <= 30) {
        console.log(`adulto`);
        image.setAttribute("src", "./assets/20-30-F.png");
      } else if (age > 30 && age <= 45) {
        console.log(`Adulto Veterano`);
        image.setAttribute("src", "./assets/30-45-F.png");
      } else if (age > 45 && age <= 60) {
        console.log(`Terceira Idade`);
        image.setAttribute("src", "./assets/45-60-F.png");
      } else if (age > 60 && age <= 75) {
        console.log(`Idoso`);
        image.setAttribute("src", "./assets/60-75-F.png");
      } else if (age > 75) {
        console.log(`Idoso avançado`);
        image.setAttribute("src", "./assets/75-F.png");
      }
    }

    result.innerHTML = `<p id="p-result">Detectamos ${pronoun} ${gender} com ${age} anos.</p>`;
    result.appendChild(image);
    //image.style.marginTop = "20px"
    console.log(`${actualYear} ${birthYear} ${age} ${gender}`);
  }
}

document.getElementById("txtano").focus()