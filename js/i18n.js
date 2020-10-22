let lang = window.navigator.languages ? window.navigator.languages[0] : null;
lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

var shortLang = lang;
if (shortLang.indexOf('-') !== -1)
    shortLang = shortLang.split('-')[0];

if (shortLang.indexOf('_') !== -1)
    shortLang = shortLang.split('_')[0];


$(() => {
    // shortLang = 'ja';
    $('[i18n]').each(function () {
        $(this).attr('original-text', $(this).text());
        let arr = $(this).html().split("//");
        if (shortLang == 'ja') {
            $(this).html(arr[0].trim());
        } else if (shortLang == "zh") {
            $(this).html(arr[1].trim());
        } else {
            $(this).html(arr[2].trim());
        }
    });
});