const getText = () => {
  fetch("http://www.tylermaxwell.co/day18/test.txt")
    .then(res => res.text())
    .then(res => {
      document.getElementById("output").innerHTML = res;
    })
    .catch(err => console.log(err));
};

const jsonPlace = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(json => {
      let output = "";
      json.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    });
};

const getJson = () => {
  fetch("posts.json")
    .then(res => res.json())
    .then(json => {
      let output = "";
      json.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    });
};

document.getElementById("butt-text").addEventListener("click", getText);
document.getElementById("butt-api").addEventListener("click", jsonPlace);
document.getElementById("butt-json").addEventListener("click", getJson);
