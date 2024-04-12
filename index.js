// Add your code here

const bodi = document.querySelector("#bodie");
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then(responce => responce.json())
    .then(user => {
      bodi.innerHTML = user.id;
    })
    .catch(error => {
      bodi.innerHTML = error.message;
    });
}