NProgress.start();
function getLanguage(){
    var pathname = window.location.pathname;
    if (pathname.startsWith('/zh-cn/')){
        return 'zh-cn';
    }else{
        return 'en';
    }
}

$('#donateModal').on('shown.bs.modal', function () {
    NProgress.start();
    var img = new Image();
    img.src = '/static/img/donate/15.jpg';
    img.onload = function(){
        $('#qr').attr('src', img.src)
        NProgress.done();
    }
})

function changeDonateImg(url){
    NProgress.start();
    var img = new Image();
    img.src = url;
    img.onload = function(){
        $('#qr').attr('src', img.src)
        NProgress.done();
    }
}

$(document).ready(function(){
    NProgress.done();
    $(document).ajaxStart(function(){
        NProgress.start();
    });
    $(document).ajaxStop(function(){
        NProgress.done();
    });
    $("#search").click(function(){
        search(1, true);
    });
});