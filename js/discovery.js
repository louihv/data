document.getElementById('searchBar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchFunction();
    }
});
    
function searchFunction() {
    var input, filter, containerGrid, containers, h2, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    containerGrid = document.getElementById('containerGrid');
    containers = containerGrid.getElementsByClassName('container');

    for (i = 0; i < containers.length; i++) {
        h2 = containers[i].getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            containers[i].style.display = "";
        } else {
            containers[i].style.display = "none";
}
}
    }
