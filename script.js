
function savecipher() {
    var secret = document.getElementById('secret').value;
    var encrypted = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(secret));
    var blob = new Blob([encrypted], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "secret.txt");

}
