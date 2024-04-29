// Same JavaScript functions as before

function openTab(tabName) {
    // Hide all tab content
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById(tabName).classList.add('active');
}
