/**
 * check if the user agent is Internet Explorer
 * return true if user agent is IE, otherwise return false
*/export default function isIE() {
    const userAgent = window.navigator.userAgent;
    return /MSIE|Trident/.test(userAgent);
}