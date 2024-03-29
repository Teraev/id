let form = document.forms.namedItem('form')


form.onsubmit = (e) => {
 e.preventDefault();

    let user = {
        id:  Math.floor(Math.random() * 100) + 1,
        name: new FormData().get("name"),
        age: new Date().getFullYear() - new FormData().get("age"),
    }
    console.log(user);
} 
   