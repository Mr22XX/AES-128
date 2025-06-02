function encrypt() {
  const inputText = document.getElementById("inputText").value;
  const key = document.getElementById("key").value;
  const output = document.getElementById("outputText");
  const notif = document.getElementById("notif");

  if (key.length !== 16) {
    notif.innerText = "🔑 Key harus 16 karakter!";
    output.value = "";
    return;
  }

  const ciphertext = CryptoJS.AES.encrypt(inputText, key).toString();
  output.value = ciphertext;
  notif.innerText = "✅ Teks berhasil dienkripsi!";
}

function decrypt() {
  const inputText = document.getElementById("inputText").value;
  const key = document.getElementById("key").value;
  const output = document.getElementById("outputText");
  const notif = document.getElementById("notif");

  if (key.length !== 16) {
    notif.innerText = "🔑 Key harus 16 karakter!";
    output.value = "";
    return;
  }

  try {
    const bytes = CryptoJS.AES.decrypt(inputText, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) {
      throw new Error("Gagal");
    }

    output.value = decrypted;
    notif.innerText = "✅ Teks berhasil didekripsi!";
  } catch (e) {
    output.value = "";
    notif.innerText = "⚠ Gagal dekripsi, cek input/kunci!";
  }
}

function copyOutput() {
  const output = document.getElementById("outputText");
  output.select();
  document.execCommand("copy");
  document.getElementById("notif").innerText = "📋 Output disalin ke clipboard!";
}

function handleFileUpload() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  const notif = document.getElementById("notif");

  if (file && file.type === "text/plain") {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("inputText").value = e.target.result;
      notif.innerText = "📄 File berhasil dimuat!";
    };
    reader.readAsText(file);
  } else {
    notif.innerText = "⚠ Hanya file .txt yang diperbolehkan!";
  }
}

function downloadOutput() {
  const output = document.getElementById("outputText").value;
  const notif = document.getElementById("notif");

  if (!output) {
    notif.innerText = "⚠ Tidak ada output untuk di-download!";
    return;
  }

  const blob = new Blob([output], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "output.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  notif.innerText = "📥 Output berhasil di-download!";
}