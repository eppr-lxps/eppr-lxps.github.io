function readyFn( ) {
    // Code to run when the document is ready.
    const entrada = document.getElementById("input").value;
    document.getElementById("submit").addEventListener("click", () => {
        console.log('Hello World')
        console.log(entrada)
    });
}
