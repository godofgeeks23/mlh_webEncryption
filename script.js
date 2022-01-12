
function savecipher() {
    var secret = document.getElementById('secret').value;
    var encrypted = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(secret));
    var blob = new Blob([encrypted], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "secret.txt");

}
function decryptcipher() {
    document.getElementById('inputfile').addEventListener('change', function () {
        var fr = new FileReader();
        fr.onload = function () {
            var decrypted = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(fr.result));
            alert("Your message says: " + decrypted);
        }
        fr.readAsText(this.files[0]);
    });
}