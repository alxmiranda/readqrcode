const html5QrCode = new Html5Qrcode("reader");
const btnStart = document.querySelector(".btn-start")
const btnStop = document.querySelector(".btn-stop")
const result = document.querySelector(".result")

const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    /* handle success */
    result.innerHTML = `<strong>RESULTADO: </strong> ${decodedText}`
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// If you want to prefer front camera
// html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);

// If you want to prefer back camera
const start = () => html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
const stop = () => html5QrCode.stop().then(() =>result.innerHTML = "").catch(e => console.log(e))

btnStart.addEventListener("click", start)
btnStop.addEventListener("click", stop)
// Select front camera or fail with `OverconstrainedError`.
// html5QrCode.start({ facingMode: { exact: "user"} }, config, qrCodeSuccessCallback);

// Select back camera or fail with `OverconstrainedError`.
// html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);