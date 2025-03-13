// Get all users
function httpGet(){
    var url  = "http://reqres.in/api/users?page=1";
    var xhr  = new XMLHttpRequest();
    xhr.open('GET', url, true)
    //xhr.readystatechange = function () {
    //https://teamtreehouse.com/community/xhronreadystatechange-vs-xhronload
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        let userCard = '';
        const content = document.getElementById('continut');
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users.data);
            for( let i = 0;i < myUsers.length; i++){
                console.table(myUsers[i]);
                userCard +=`
                < div class="feature col">
                <div
                class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-

                <img src="${myUsers[i].avatar}" style="max-
                `
            }
        } else {
            console.error(users);
        }
    }
    xhr.send(null);
    }