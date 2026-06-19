function rastgeleSayiKontrolEt() {
    // 1. Rastgele sayımızı üretiyoruz
    let rastgeleSayi = Math.floor(Math.random() * 101);

    // 2. Sayı kontrolünü ekrana yazdırıyoruz
    if (rastgeleSayi > 50) {
        document.getElementById("sonuc-alani").innerText = "Üretilen Sayı: " + rastgeleSayi + " - Büyük bir sayı!";
    } else {
        document.getElementById("sonuc-alani").innerText = "Üretilen Sayı: " + rastgeleSayi + " - Küçük bir sayı!";
    }

    // 3. İpek'e olan mesajlar (alert pencereleri)
    alert("İpeği çok seviyorum!");
    alert("Tamam ya kıskanma seni de çok seviyorum şapşal");
    alert("evet gerçekten çok seviyorum"); 
    alert("sıkılacağımı mı düşünüyorsun?");
    alert("çok beklersin");
    alert("doğum günümü kutladığın için de teşekkür ederim bebeğim benim :3");
    alert("banabisakso? sanabisoksa?");
    alert("tamam tamam");
    alert("sıkıldığını biliyorum");
    alert("peki o zaman bu son olucak");
    
    // Alert pencereleri biter bitmez "yeni bir mesajın var" butonunu kilitliyoruz
    let mesajButonu = document.getElementById("mesaj-butonu");
    mesajButonu.disabled = true;

    // 4. 2 saniye (2000 ms) bekleyen zamanlayıcı
    setTimeout(function() {
        alert("ŞAKA YAPTIM ENAYİ SENİ PUAHAHAHHAHAHA:)");
        
        // Zamanlayıcı bittikten sonra butonu tekrar tıklanabilir yapıyoruz
        mesajButonu.disabled = false;
    }, 2000); 
}

// 5. İkinci buton için rastgele mesaj fonksiyonu
function rastgeleMesaj() {
    // Rastgele gösterilmesini istediğin mesaj listesi
    let mesajlar = [
        "ananı sikeyim abdullah öcalan",
        "hello world from ASLAN ACAR!",
        "bu gece büyük otuzbir var",
        "buralar eskiden hep dutluktu",
        "nasıl olmuş knk?",
        "Bugün harika bir gün!",
        "Kod yazmak bazen sabır ister.",
        "TEFOOOOO TEFO KOOOOOOOŞŞŞŞ!!",
        "Her şey yoluna girecek.",
    ];
    
    // Listeden rastgele bir indeks seçiyoruz
    let rastgeleIndeks = Math.floor(Math.random() * mesajlar.length);
    
    // Seçilen mesajı h2 alanına yazdırıyoruz
    document.getElementById("yeni alan").innerText = mesajlar[rastgeleIndeks];
}
