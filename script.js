let header = document.createElement("header")
let nav = document.createElement("nav")
let ul = document.createElement("ul")
let li = document.createElement("li")
let link = document.createElement("a")

let paginas = ["pagina1", "pagina2", "pagina3"]

ul.appendChild(li)
nav.appendChild(ul)
header.appendChild(nav)

function acrescentarPagina(pagina) {
    let link = document.createElement("a")
    link.innerText = pagina
    link.title = pagina
    link.href = "#"
    li.appendChild(link)
}

paginas.forEach(
    pagina => acrescentarPagina(pagina)
)




document.body.appendChild(header)

