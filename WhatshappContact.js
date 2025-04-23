function encodeWhatsAppMessage(ad, telefon) {
    const message = `Merhaba, ismim ${ad}. Telefon numaram: ${telefon}. Kurban kaydı talep ediyorum.`;
    return encodeURIComponent(message);
}

document.getElementById("whatsappButton").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission
    
    const ad = document.getElementById("name").value;
    const telefon = document.getElementById("phone").value;
    
    if (!ad || !telefon) {
        alert("Lütfen tüm alanları doldurunuz.");
        return;
    }
    
    const message = encodeWhatsAppMessage(ad, telefon);
    const whatsappNumber = "905342937761"; 
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    window.open(url, '_blank');
});