/* Simple script for interacting with tab elements.*/
function openTab(evt, name) {
    // Declare all variables.
    var i, tabcontent, tablinks, added_class;
     // Get all elements with class="tabcontent" and hide them.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Check to see if " active" should be added or removed from selected tab
    if (evt.currentTarget.className.includes(" active")) {
        document.getElementById(name).style.display = "none";
        added_class = "";
    } else {
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(name).style.display = "block";
        added_class = " active";
    }
    // Get all "tablinks" and remove " active" classes
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += added_class;
}