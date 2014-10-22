
function getJSON(url, cb){
        //var url = arguments[0]
        //var cb = argument[1]
        var xhr = new XMLHttpRequest();
        xhr.open('GET',url, true);

        xhr.onload = function() {
                cb(JSON.parse(xhr.responseText));   
        };

        xhr.send();
}












function hide(element){
        element.style.display = "none";
}

function show(element){
        element.style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {



        getJSON('https://savingsmultipliedssh.firebaseio.com/itemlist.json', function(data){
                var students = data;






                var loginModalToggleAreas = document.querySelectorAll('.lightbox, #authentication a, #cancel');

                for (var i=0; i<loginModalToggleAreas.length; i++) {
                        loginModalToggleAreas[i].addEventListener('click', function(){
                                toggle(document.querySelector('.login-modal'));
                        });

                }
                /*

                   loginModalToggleAreas.addEventListener('click', function(){
                   toggle(document.querySelector('.login-modal'));
                   });

                /*	loginModalToggleAreas.forEach(function(area){
                area.addEventListener('click', function(){
                toggle(login-modal);
                });
                });
                */






                /*	var lightbox = document.querySelector('.lightbox');
                    lightbox.addEventListener('click', function(){
                    toggle(document.querySelector('.login-modal'));
                    });
                    var cancel = document.querySelector('#cancel');
                    cancel.addEventListener('click', function(){
                    toggle(document.querySelector('.login-modal'));
                    });
                    var loginlink = document.querySelector('#authentication a');
                    loginlink.addEventListener('click', function(){
                    toggle(document.querySelector('.login-modal'));
                    });
                    */


});





function toggle(element){
        if (element.classList)
                element.classList.toggle('hidden')
}

else {
        var classes = element.className.split(' ');
        var classIndex 1;
        for (var i=0; i<classes.length; i++) {
                if (classes[i] === 'hidden')
                        classIndex = i;
        }


        if (classindex >= 0)
                classes.splice(classIndex, 1);
        else
                classes.push('hidden');

        element.className = classes.join(' ');
}
}







function hide(element) {

        if (element.classList)
                element.classList.add('hidden');
        else
                element.className += ' ' + 'hidden';
}

function show(element) {

        if (element.classList)
                el.classList.remove(className);
        else
                element.className = el.className
                        .replace(new RegExp('(^|\\b)' + 'hidden' .split(' ')
                                                .join('|') + '(\\b|$)', 'gi'), ' ');
}




function show(element) {
        element.style.display = "block"
}
