document.addEventListener("DOMContentLoaded", function () {
    const cantidadElement = document.querySelector("#cantidad");
    const totalElement = document.querySelector("#total");
    const disminuirButton = document.querySelector("#disminuir");
    const aumentarButton = document.querySelector("#aumentar");


    aumentarButton.addEventListener("click", function () {
        let cantidad = parseInt(cantidadElement.innerHTML);
        cantidad++;
        cantidadElement.innerHTML = cantidad;
        totalElement.innerHTML = cantidad * 79990;
    });


    disminuirButton.addEventListener("click", function () {
        let cantidad = parseInt(cantidadElement.innerHTML);
        if (cantidad > 1) {
            cantidad--;
            cantidadElement.innerHTML = cantidad;
            totalElement.innerHTML = cantidad * 79990;
        }
    });
});

