const titulo = (div) => {
    
    
    let titulo = document.createElement("h1")
    titulo.innerText = "Bienvenidos al react"
    
    const subTitulo = document.createElement("p")
    subTitulo.innerText = "somos los mejorees"
    
    div.appendChild(titulo)
    div.appendChild(subTitulo)
}

export default titulo