function change(id) // no ';' here
{
    let container = document.getElementById(id);
    let title = container.getElementsByTagName("h2")[0];
    let paragraph = container.getElementsByTagName("section")[0];

    title.classList.toggle("hide")
    paragraph.classList.toggle("hide")
}