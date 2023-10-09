window.onload = pageLoad;

function pageLoad() {
    document.getElementById('goproject').onclick = navwarpgate;
}

navwarpgate = () => {
    return document.location = 'project.HTML';
}