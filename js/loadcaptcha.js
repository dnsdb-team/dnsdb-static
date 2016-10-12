var handler = function(captchaObj) {
    captchaObj.appendTo("#captcha");
    $("#loading-progress").remove();
};
var captchaUrl = '/'+getLanguage() + "/getcaptcha";
$.ajax({
    url: captchaUrl,
    type: "get",
    dataType: "json",
    success: function(data) {
        initGeetest({
            gt: data.gt,
            challenge: data.challenge,
            product: "float",
            offline: !data.success
        },
        handler);
    }
});