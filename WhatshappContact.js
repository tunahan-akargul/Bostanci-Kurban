function encodeWhatsAppMessage(ad, telefon) {
    const message = `Merhaba, ismim ${ad}. Telefon numaram: ${telefon}. Kurban kaydı talep ediyorum.`;
    return encodeURIComponent(message);
}

  document.getElementById("whatsappButton").addEventListener("click", function () {
    const ad = document.getElementById("name").value;
    const telefon = document.getElementById("phone").value;
    const message = encodeWhatsAppMessage(ad, telefon);

    console.log(ad, telefon);

    const whatsappNumber = "905372078499"; 
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    this.href = url;
  });