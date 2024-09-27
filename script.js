const slidingTexts = [
    "Selamat datang di FUNVITA INDONESIA",
    "Kami memberikan training yang berfokus pada Manajemen, Keuangan dan Pemasaran",
    "Meningkatkan kompetensi dan kapasitas usaha Anda dengan metode pelatihan yang terbukti efektif",
    "Bergabunglah dengan kami untuk mencapai potensi penuh Anda"
];

const companyDescriptions = [
    "Perusahaan yang bergerak dalam bidang Training and Development dengan tujuan untuk pengembangan kapasitas usaha dari perusahaan-perusahaan yang bekerjasama dengan kami.",
    "Kami menyediakan program pelatihan khusus untuk meningkatkan keterampilan manajerial dan keuangan. Tidak hanya itu kami juga mempunyai agency dalam bidang Branding Product, Sehingga dapat membuat perusahaan semakin dikenal oleh khalayak umum dan semakin berkembang.",
    "Fokus kami adalah membangun daya saing UMKM melalui pelatihan yang relevan dan praktik terbaik.",
    "Kami berkolaborasi dengan para ahli untuk memberikan pelatihan yang bermanfaat bagi semua peserta."
];

let currentIndex = 0;

function updateContent() {
    const slidingText = document.getElementById("sliding-text");
    const companyDescription = document.getElementById("company-description");

    // Fade out effect
    slidingText.style.opacity = "0";
    companyDescription.style.opacity = "0";

    setTimeout(() => {
        slidingText.innerText = slidingTexts[currentIndex];
        companyDescription.innerText = companyDescriptions[currentIndex];

        // Fade in effect
        slidingText.style.opacity = "1";
        companyDescription.style.opacity = "1";
    }, 500); // Waktu yang sama dengan animasi keluar
}

// Event listener untuk tombol panah kanan
document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slidingTexts.length;
    updateContent();
});

// Event listener untuk tombol panah kiri
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slidingTexts.length) % slidingTexts.length;
    updateContent();
});

// Inisialisasi konten saat pertama kali
updateContent();

// Script untuk navbar sticky
window.onscroll = function() {
    var navbar = document.querySelector('.navbar-sticky');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.top = '0'; // Tampilkan navbar
    } else {
        navbar.style.top = '-100px'; // Sembunyikan navbar
    }
};
