const getText = () => {
  fetch("test.txt")
    .then(res => res.text())
    .then(res => {
      document.getElementById("output").innerHTML = res;
    })
    .catch(err => console.log(err));
};

document.getElementById("butt-text").addEventListener("click", getText);
