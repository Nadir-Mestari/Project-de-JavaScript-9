

const form = document.querySelector("form")



const Listtodo = () => {
    window.localStorage.todo = list.innerHTML;
}
const RecListtodo = () => {

    if (window.localStorage.todo) {

        list.innerHTML = window.localStorage.todo;
    } else {
        alert("faite une tache")
    }
}

window.addEventListener("load", RecListtodo)



form.addEventListener("submit", (e) => {
    e.preventDefault();

    list.innerHTML += `<li>${item.value}</li>`
    item.value = "";

    Listtodo();

});


list.addEventListener("click", (e) => {
    console.log(e.target)


    if (e.target.classList.contains("checked")) {
        e.target.remove();

    } else {
        e.target.classList.add("checked")

    }

    Listtodo();
})
