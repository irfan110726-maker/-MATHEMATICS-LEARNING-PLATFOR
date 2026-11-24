
"use strict";

// =====================================
// DATABASE MATERI MATEMATIKA
// =====================================

const subjects = [
    "Aljabar",
    "Kalkulus",
    "Statistika",
    "Matematika Diskrit",
    "Teori Graf",
    "Persamaan Diferensial",
    "Matematika Aktuaria"
];

const materials = [
    {
        id: "a1",
        subject: "Aljabar",
        title: "Persamaan Linear",
        description: "Persamaan linear satu variabel dan penyelesaiannya.",
        body: `
            <h3>Pengertian</h3>
            Persamaan linear adalah persamaan yang variabelnya memiliki pangkat tertinggi satu.

            <h3>Bentuk Umum</h3>
            <div class="formula">ax + b = 0</div>

            <h3>Contoh Soal</h3>
            Tentukan x jika 2x + 4 = 10.

            <div class="formula">
                2x + 4 = 10<br>
                2x = 10 - 4<br>
                2x = 6<br>
                x = 3
            </div>
        `
    },
    {
        id: "a2",
        subject: "Aljabar",
        title: "Matriks dan Determinan",
        description: "Operasi matriks, transpose, dan determinan.",
        body: `
            <h3>Pengertian Matriks</h3>
            Matriks adalah susunan bilangan berbentuk baris dan kolom.

            <h3>Determinan Matriks 2 × 2</h3>
            <div class="formula">
                A = [a b; c d]<br>
                det(A) = ad - bc
            </div>

            <h3>Contoh</h3>
            <div class="formula">
                A = [1 2; 3 4]<br>
                det(A) = (1 × 4) - (2 × 3)<br>
                det(A) = 4 - 6 = -2
            </div>
        `
    },
    {
        id: "a3",
        subject: "Aljabar",
        title: "Sistem Persamaan Linear",
        description: "Metode substitusi dan eliminasi.",
        body: `
            <h3>Pengertian</h3>
            Sistem persamaan linear adalah kumpulan persamaan linear dengan variabel yang sama.

            <h3>Contoh</h3>
            <div class="formula">
                x + y = 5<br>
                x - y = 1
            </div>

            <h3>Penyelesaian</h3>
            Jumlahkan kedua persamaan:

            <div class="formula">
                2x = 6<br>
                x = 3
            </div>

            Substitusikan ke persamaan pertama:

            <div class="formula">
                3 + y = 5<br>
                y = 2
            </div>

            Jadi, x = 3 dan y = 2.
        `
    },
    {
        id: "k1",
        subject: "Kalkulus",
        title: "Limit Fungsi",
        description: "Konsep limit dan penyelesaian limit aljabar.",
        body: `
            <h3>Pengertian</h3>
            Limit adalah nilai yang didekati fungsi ketika variabel mendekati suatu nilai tertentu.

            <h3>Notasi</h3>
            <div class="formula">lim x→a f(x) = L</div>

            <h3>Contoh</h3>
            <div class="formula">
                lim x→2 (x² + 3)<br>
                = 2² + 3<br>
                = 7
            </div>
        `
    },
    {
        id: "k2",
        subject: "Kalkulus",
        title: "Turunan Fungsi",
        description: "Aturan dasar diferensial dan aplikasinya.",
        body: `
            <h3>Pengertian</h3>
            Turunan merupakan laju perubahan suatu fungsi terhadap variabelnya.

            <h3>Rumus Dasar</h3>
            <div class="formula">f(x) = xⁿ<br>f'(x) = nxⁿ⁻¹</div>

            <h3>Contoh</h3>
            Jika f(x) = x³ + 2x, maka:

            <div class="formula">f'(x) = 3x² + 2</div>
        `
    },
    {
        id: "k3",
        subject: "Kalkulus",
        title: "Integral Dasar",
        description: "Konsep integral tak tentu.",
        body: `
            <h3>Pengertian</h3>
            Integral merupakan operasi kebalikan dari turunan dalam konteks antiturunan.

            <h3>Rumus</h3>
            <div class="formula">∫xⁿ dx = xⁿ⁺¹/(n+1) + C</div>
            untuk n ≠ -1.

            <h3>Contoh</h3>
            <div class="formula">
                ∫3x² dx<br>
                = x³ + C
            </div>
        `
    },
    {
        id: "s1",
        subject: "Statistika",
        title: "Statistika Deskriptif",
        description: "Mean, median, modus, dan jangkauan.",
        body: `
            <h3>Mean</h3>
            <div class="formula">Mean = Σx / n</div>

            <h3>Median</h3>
            Median adalah nilai tengah setelah data diurutkan.

            <h3>Modus</h3>
            Modus adalah nilai yang paling sering muncul.

            <h3>Contoh</h3>
            Data: 2, 3, 3, 4, 8.

            <div class="formula">
                Mean = 20/5 = 4<br>
                Median = 3<br>
                Modus = 3
            </div>
        `
    },
    {
        id: "s2",
        subject: "Statistika",
        title: "Varians dan Simpangan Baku",
        description: "Mengukur penyebaran data.",
        body: `
            <h3>Varians Populasi</h3>
            <div class="formula">σ² = Σ(x - μ)² / N</div>

            <h3>Simpangan Baku</h3>
            <div class="formula">σ = √σ²</div>

            <h3>Makna</h3>
            Semakin besar simpangan baku, semakin menyebar data dari nilai rata-ratanya.
        `
    },
    {
        id: "d1",
        subject: "Matematika Diskrit",
        title: "Logika Matematika",
        description: "Proposisi, konjungsi, dan disjungsi.",
        body: `
            <h3>Proposisi</h3>
            Proposisi adalah pernyataan yang memiliki nilai benar atau salah.

            <h3>Operator Logika</h3>
            <ul>
                <li>Konjungsi: p ∧ q (dan)</li>
                <li>Disjungsi: p ∨ q (atau)</li>
                <li>Negasi: ¬p (tidak)</li>
                <li>Implikasi: p → q</li>
                <li>Biimplikasi: p ↔ q</li>
            </ul>
        `
    },
    {
        id: "d2",
        subject: "Matematika Diskrit",
        title: "Himpunan",
        description: "Operasi gabungan, irisan, dan komplemen.",
        body: `
            <h3>Pengertian</h3>
            Himpunan adalah kumpulan objek yang terdefinisi dengan jelas.

            <h3>Operasi Himpunan</h3>
            <ul>
                <li>Gabungan: A ∪ B</li>
                <li>Irisan: A ∩ B</li>
                <li>Selisih: A - B</li>
                <li>Komplemen: Aᶜ</li>
            </ul>

            <h3>Contoh</h3>
            A = {1, 2, 3}, B = {3, 4, 5}.

            <div class="formula">
                A ∩ B = {3}<br>
                A ∪ B = {1, 2, 3, 4, 5}
            </div>
        `
    },
    {
        id: "g1",
        subject: "Teori Graf",
        title: "Dasar Teori Graf",
        description: "Vertex, edge, derajat, dan graf sederhana.",
        body: `
            <h3>Pengertian</h3>
            Graf adalah struktur matematika yang terdiri dari simpul dan sisi.

            <div class="formula">G = (V, E)</div>

            V adalah himpunan vertex atau simpul.
            E adalah himpunan edge atau sisi.

            <h3>Contoh</h3>
            V = {A, B, C}
            <br>
            E = {(A,B), (B,C), (A,C)}

            Graf tersebut memiliki 3 simpul dan 3 sisi.
        `
    },
    {
        id: "g2",
        subject: "Teori Graf",
        title: "Algoritma Dijkstra",
        description: "Menentukan lintasan terpendek.",
        body: `
            <h3>Pengertian</h3>
            Algoritma Dijkstra digunakan untuk mencari jarak terpendek dari satu simpul awal ke simpul lainnya pada graf berbobot nonnegatif.

            <h3>Langkah</h3>
            <ul>
                <li>Tentukan simpul awal.</li>
                <li>Berikan jarak awal nol.</li>
                <li>Periksa bobot sisi tetangga.</li>
                <li>Perbarui jarak yang lebih kecil.</li>
                <li>Ulangi sampai tujuan ditemukan.</li>
            </ul>
        `
    },
    {
        id: "p1",
        subject: "Persamaan Diferensial",
        title: "Persamaan Diferensial Orde Satu",
        description: "Dasar persamaan diferensial.",
        body: `
            <h3>Pengertian</h3>
            Persamaan diferensial adalah persamaan yang melibatkan fungsi dan turunannya.

            <h3>Contoh</h3>
            <div class="formula">dy/dx = 2x</div>

            Integrasikan kedua ruas:

            <div class="formula">y = x² + C</div>
        `
    },
    {
        id: "p2",
        subject: "Persamaan Diferensial",
        title: "Model Pertumbuhan Eksponensial",
        description: "Model matematika pertumbuhan populasi.",
        body: `
            <h3>Model</h3>
            <div class="formula">dP/dt = kP</div>

            <h3>Solusi</h3>
            <div class="formula">P(t) = P₀eᵏᵗ</div>

            P₀ adalah populasi awal, k adalah konstanta pertumbuhan, dan t adalah waktu.

            <h3>Contoh</h3>
            Populasi awal 100 dengan k = 0,5.

            <div class="formula">P(t) = 100e⁰·⁵ᵗ</div>
        `
    },
    {
        id: "a4",
        subject: "Matematika Aktuaria",
        title: "Peluang dan Risiko",
        description: "Dasar probabilitas dalam aktuaria.",
        body: `
            <h3>Pengertian</h3>
            Peluang mengukur kemungkinan terjadinya suatu peristiwa.

            <h3>Rumus</h3>
            <div class="formula">P(A) = n(A)/n(S)</div>

            <h3>Contoh</h3>
            Sebuah dadu memiliki 6 sisi. Peluang muncul angka 2 adalah:

            <div class="formula">P(2) = 1/6</div>
        `
    },
    {
        id: "a5",
        subject: "Matematika Aktuaria",
        title: "Nilai Sekarang",
        description: "Konsep nilai waktu uang.",
        body: `
            <h3>Pengertian</h3>
            Nilai sekarang adalah nilai saat ini dari sejumlah uang yang diterima pada masa mendatang.

            <h3>Rumus</h3>
            <div class="formula">PV = FV/(1+i)ⁿ</div>

            FV adalah nilai masa depan, i adalah tingkat bunga, dan n adalah periode.
        `
    }
];

// =====================================
// BANK SOAL KUIS
// =====================================

const quizBank = {
    "Aljabar": [
        { q: "Jika 2x + 4 = 10, nilai x adalah ...", options: ["2", "3", "4", "5"], answer: 1, explanation: "2x = 6, sehingga x = 3." },
        { q: "Determinan matriks [[1,2],[3,4]] adalah ...", options: ["-2", "2", "10", "5"], answer: 0, explanation: "1×4 - 2×3 = -2." },
        { q: "Hasil dari 3² + 4² adalah ...", options: ["12", "25", "49", "16"], answer: 1, explanation: "9 + 16 = 25." },
        { q: "Jika x + y = 5 dan x - y = 1, nilai x adalah ...", options: ["2", "3", "4", "5"], answer: 1, explanation: "Penjumlahan menghasilkan 2x = 6, sehingga x = 3." },
        { q: "Faktor dari x² - 9 adalah ...", options: ["(x-3)(x+3)", "(x-9)(x+1)", "(x-3)²", "(x+9)²"], answer: 0, explanation: "Gunakan selisih dua kuadrat." }
    ],
    "Kalkulus": [
        { q: "Turunan dari x² adalah ...", options: ["x", "2x", "2", "x²"], answer: 1, explanation: "Turunan x² adalah 2x." },
        { q: "Integral dari 2x adalah ...", options: ["x² + C", "2x² + C", "2 + C", "x + C"], answer: 0, explanation: "Integral 2x adalah x² + C." },
        { q: "Nilai limit x→2 dari x + 3 adalah ...", options: ["3", "4", "5", "6"], answer: 2, explanation: "Substitusi x = 2 menghasilkan 5." },
        { q: "Turunan dari 5x adalah ...", options: ["5", "x", "5x²", "0"], answer: 0, explanation: "Turunan 5x adalah 5." },
        { q: "Integral dari 3x² adalah ...", options: ["3x³ + C", "x³ + C", "6x + C", "x² + C"], answer: 1, explanation: "Integral 3x² adalah x³ + C." }
    ],
    "Statistika": [
        { q: "Mean dari 2, 4, 6 adalah ...", options: ["3", "4", "5", "6"], answer: 1, explanation: "(2+4+6)/3 = 4." },
        { q: "Median dari 2, 3, 7 adalah ...", options: ["2", "3", "7", "4"], answer: 1, explanation: "Nilai tengah adalah 3." },
        { q: "Modus dari 1, 2, 2, 3 adalah ...", options: ["1", "2", "3", "4"], answer: 1, explanation: "Angka 2 paling sering muncul." },
        { q: "Jangkauan data 3, 5, 9 adalah ...", options: ["3", "4", "6", "9"], answer: 2, explanation: "9 - 3 = 6." },
        { q: "Simbol rata-rata populasi adalah ...", options: ["μ", "σ", "π", "Σ"], answer: 0, explanation: "μ adalah simbol rata-rata populasi." }
    ],
    "Matematika Diskrit": [
        { q: "Negasi dari pernyataan p adalah ...", options: ["p", "¬p", "p ∧ q", "p ∨ q"], answer: 1, explanation: "Negasi dinyatakan dengan ¬p." },
        { q: "Simbol gabungan himpunan adalah ...", options: ["∩", "∪", "∈", "⊂"], answer: 1, explanation: "Gabungan menggunakan simbol ∪." },
        { q: "Jika A={1,2} dan B={2,3}, irisan A dan B adalah ...", options: ["{1}", "{2}", "{3}", "{1,2,3}"], answer: 1, explanation: "Anggota yang sama adalah 2." },
        { q: "Bilangan biner 10 bernilai desimal ...", options: ["1", "2", "3", "4"], answer: 1, explanation: "10₂ = 2₁₀." },
        { q: "Nilai kebenaran proposisi dapat berupa ...", options: ["Benar atau salah", "Besar atau kecil", "Positif atau negatif", "Genap atau ganjil"], answer: 0, explanation: "Proposisi memiliki nilai benar atau salah." }
    ],
    "Teori Graf": [
        { q: "Simpul dalam teori graf disebut ...", options: ["Edge", "Vertex", "Path", "Loop"], answer: 1, explanation: "Simpul disebut vertex." },
        { q: "Sisi pada graf disebut ...", options: ["Vertex", "Edge", "Degree", "Tree"], answer: 1, explanation: "Sisi disebut edge." },
        { q: "Graf dengan 3 simpul yang saling terhubung lengkap memiliki jumlah sisi ...", options: ["2", "3", "4", "6"], answer: 1, explanation: "Graf lengkap K3 memiliki 3 sisi." },
        { q: "Algoritma untuk mencari lintasan terpendek adalah ...", options: ["Bubble Sort", "Dijkstra", "Binary Search", "Merge Sort"], answer: 1, explanation: "Dijkstra mencari lintasan terpendek." },
        { q: "Pohon merentang minimum disebut ...", options: ["MST", "DFS", "BFS", "DAG"], answer: 0, explanation: "MST adalah Minimum Spanning Tree." }
    ],
    "Persamaan Diferensial": [
        { q: "Persamaan dy/dx = 2x memiliki solusi ...", options: ["2x + C", "x² + C", "x + C", "2 + C"], answer: 1, explanation: "Integrasi 2x menghasilkan x² + C." },
        { q: "Orde persamaan ditentukan oleh ...", options: ["Pangkat fungsi", "Turunan tertinggi", "Konstanta", "Jumlah variabel"], answer: 1, explanation: "Orde ditentukan oleh turunan tertinggi." },
        { q: "Solusi dari dy/dx = 3 adalah ...", options: ["3x + C", "x³ + C", "3 + C", "x + 3"], answer: 0, explanation: "Integrasi konstanta 3 menghasilkan 3x + C." },
        { q: "Model dP/dt = kP merupakan model ...", options: ["Linear", "Eksponensial", "Kuadrat", "Trigonometri"], answer: 1, explanation: "Model tersebut menghasilkan solusi eksponensial." },
        { q: "Konstanta integrasi biasanya ditulis ...", options: ["A", "B", "C", "D"], answer: 2, explanation: "Konstanta integrasi umum ditulis C." }
    ],
    "Matematika Aktuaria": [
        { q: "Peluang suatu kejadian dinyatakan dengan ...", options: ["P(A)", "f(x)", "dy/dx", "Σx"], answer: 0, explanation: "P(A) menyatakan peluang kejadian A." },
        { q: "Nilai sekarang sering disingkat ...", options: ["FV", "PV", "IRR", "ROI"], answer: 1, explanation: "PV berarti Present Value." },
        { q: "Nilai masa depan disingkat ...", options: ["PV", "FV", "PMT", "NPV"], answer: 1, explanation: "FV berarti Future Value." },
        { q: "Peluang muncul angka genap pada dadu adalah ...", options: ["1/6", "1/3", "1/2", "1"], answer: 2, explanation: "Ada 3 angka genap dari 6 sisi, yaitu 3/6 = 1/2." },
        { q: "Aktuaria banyak berkaitan dengan ...", options: ["Risiko dan keuangan", "Seni lukis", "Bahasa", "Sejarah"], answer: 0, explanation: "Aktuaria menggunakan matematika untuk analisis risiko dan keuangan." }
    ]
};

// =====================================
// LATIHAN SOAL
// =====================================

const practiceBank = {
    "Aljabar": [
        { q: "Tentukan x dari 3x + 6 = 18.", answer: "4", explanation: "3x = 12, sehingga x = 4." },
        { q: "Berapakah determinan [[2,1],[3,4]]?", answer: "5", explanation: "2×4 - 1×3 = 5." }
    ],
    "Kalkulus": [
        { q: "Turunan dari f(x) = x³ adalah ...", answer: "3x^2", explanation: "Gunakan rumus f'(x) = nx^(n-1)." },
        { q: "Integral dari 4x adalah ...", answer: "2x^2+C", explanation: "∫4x dx = 2x² + C." }
    ],
    "Statistika": [
        { q: "Mean dari data 4, 6, 8, 10 adalah ...", answer: "7", explanation: "(4+6+8+10)/4 = 7." },
        { q: "Jangkauan data 2, 5, 9, 12 adalah ...", answer: "10", explanation: "12 - 2 = 10." }
    ],
    "Matematika Diskrit": [
        { q: "Berapakah banyak himpunan bagian dari himpunan beranggota 3?", answer: "8", explanation: "Banyak himpunan bagian adalah 2^3 = 8." },
        { q: "Nilai desimal dari biner 101 adalah ...", answer: "5", explanation: "101₂ = 4 + 0 + 1 = 5." }
    ],
    "Teori Graf": [
        { q: "Berapa jumlah sisi pada graf lengkap K4?", answer: "6", explanation: "Rumus sisi graf lengkap adalah n(n-1)/2 = 6." },
        { q: "Jika derajat simpul A adalah 3, berapa sisi yang bersisian dengan A?", answer: "3", explanation: "Derajat simpul menyatakan banyak sisi yang bersisian dengannya." }
    ],
    "Persamaan Diferensial": [
        { q: "Jika dy/dx = 4x, berapa solusi y?", answer: "2x^2+C", explanation: "Integrasikan 4x menjadi 2x² + C." },
        { q: "Orde dari d²y/dx² + 3dy/dx + y = 0 adalah ...", answer: "2", explanation: "Turunan tertinggi adalah turunan kedua." }
    ],
    "Matematika Aktuaria": [
        { q: "Peluang muncul angka 6 pada dadu adalah ... (format 1/6)", answer: "1/6", explanation: "Ada satu kejadian yang diinginkan dari enam kemungkinan." },
        { q: "Jika FV = 110 dan i = 10% untuk satu periode, PV adalah ...", answer: "100", explanation: "PV = 110 / 1,1 = 100." }
    ]
};

// =====================================
// LOCAL STORAGE PER AKUN
// =====================================

let currentUser = null;
let currentMaterialId = null;
let calcExpression = "";
let activeQuestions = [];
let currentQuestion = 0;
let correctAnswers = 0;
let answered = false;
let quizSubject = "";
let practiceIndex = 0;

function getUsers() {
    return JSON.parse(localStorage.getItem("math_users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("math_users", JSON.stringify(users));
}

function getData(key) {
    if (!currentUser) return [];
    return JSON.parse(
        localStorage.getItem(`math_${currentUser.email}_${key}`)
    ) || [];
}

function saveData(key, value) {
    if (!currentUser) return;
    localStorage.setItem(
        `math_${currentUser.email}_${key}`,
        JSON.stringify(value)
    );
}

// =====================================
// LOGIN DAN REGISTER
// =====================================

function showAuth(type) {
    const login = type === "login";

    document.getElementById("loginForm").classList.toggle("hidden", !login);
    document.getElementById("registerForm").classList.toggle("hidden", login);
    document.getElementById("loginTab").classList.toggle("active", login);
    document.getElementById("registerTab").classList.toggle("active", !login);
    document.getElementById("authMessage").textContent = "";
}

function showMessage(message, color) {
    const element = document.getElementById("authMessage");
    element.textContent = message;
    element.style.color = color;
}

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim().toLowerCase();
    const password = document.getElementById("registerPassword").value;

    const users = getUsers();

    if (users.some(user => user.email === email)) {
        showMessage("Email sudah terdaftar!", "#ff647e");
        return;
    }

    users.push({ name, email, password });
    saveUsers(users);

    this.reset();
    showAuth("login");
    showMessage("Registrasi berhasil! Silakan login.", "#18d99a");
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const user = getUsers().find(
        item => item.email === email && item.password === password
    );

    if (!user) {
        showMessage("Email atau password salah!", "#ff647e");
        return;
    }

    currentUser = user;
    sessionStorage.setItem("math_session", user.email);
    openApp();
});

function openApp() {
    document.getElementById("authPage").classList.add("hidden");
    document.getElementById("appPage").classList.remove("hidden");

    document.getElementById("headerName").textContent = currentUser.name;
    document.getElementById("welcomeName").textContent = currentUser.name;

    refreshAll();
}

function logout() {
    sessionStorage.removeItem("math_session");
    currentUser = null;

    document.getElementById("appPage").classList.add("hidden");
    document.getElementById("authPage").classList.remove("hidden");
    document.getElementById("loginForm").reset();

    showAuth("login");
}

// =====================================
// NAVIGASI
// =====================================

function showSection(sectionId, button) {
    document.querySelectorAll(".page-section").forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) button.classList.add("active");

    if (sectionId === "progress") renderProgress();
    if (sectionId === "history") renderHistory();
    if (sectionId === "practice") renderPractice();
}

function openSubject(subject) {
    document.getElementById("subjectFilter").value = subject;
    showSection("materials", document.querySelector('[data-section="materials"]'));
    renderMaterials();
}

// =====================================
// MATERI
// =====================================

function renderMaterials() {
    const subject = document.getElementById("subjectFilter").value;
    const keyword = document.getElementById("materialSearch").value.toLowerCase();
    const completed = getData("completed");

    const filtered = materials.filter(item => {
        const matchSubject = subject === "Semua" || item.subject === subject;
        const matchKeyword = (
            item.title + " " + item.description
        ).toLowerCase().includes(keyword);

        return matchSubject && matchKeyword;
    });

    const list = document.getElementById("materialList");

    list.innerHTML = filtered.length ? filtered.map(item => `
        <div class="material-card">
            <span class="subject-tag">${item.subject}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <button class="primary-btn" onclick="openMaterial('${item.id}')">
                ${completed.includes(item.id) ? "Pelajari Lagi" : "Buka Materi →"}
            </button>
        </div>
    `).join("") : `<p class="muted">Materi tidak ditemukan.</p>`;
}

function openMaterial(id) {
    const item = materials.find(m => m.id === id);
    if (!item) return;

    currentMaterialId = id;

    document.getElementById("modalSubject").textContent = item.subject.toUpperCase();
    document.getElementById("modalTitle").textContent = item.title;
    document.getElementById("modalBody").innerHTML = item.body;

    const completed = getData("completed");
    const button = document.getElementById("completeMaterialBtn");

    button.disabled = completed.includes(id);
    button.textContent = button.disabled ? "✓ Sudah Dipelajari" : "Tandai Sudah Dipelajari ✓";

    document.getElementById("materialModal").classList.remove("hidden");
}

function closeMaterial() {
    document.getElementById("materialModal").classList.add("hidden");
}

function completeMaterial() {
    if (!currentMaterialId) return;

    const completed = getData("completed");

    if (!completed.includes(currentMaterialId)) {
        completed.push(currentMaterialId);
        saveData("completed", completed);
    }

    closeMaterial();
    refreshAll();
}

// =====================================
// KALKULATOR
// =====================================

function updateCalc() {
    document.getElementById("calcExpression").textContent =
        calcExpression.replaceAll("*", "×").replaceAll("/", "÷").replaceAll("^", " ^ ");

    document.getElementById("calcDisplay").textContent = calcExpression || "0";
}

function appendCalc(value) {
    calcExpression += value;
    updateCalc();
    document.getElementById("calcMessage").textContent = "";
}

function clearCalc() {
    calcExpression = "";
    updateCalc();
    document.getElementById("calcMessage").textContent = "";
}

function deleteCalc() {
    calcExpression = calcExpression.slice(0, -1);
    updateCalc();
}

function calculate() {
    if (!calcExpression) return;

    try {
        let expression = calcExpression
            .replaceAll("^", "**")
            .replace(/sqrt\(/g, "Math.sqrt(");

        // Hanya karakter matematika yang diizinkan.
        if (!/^[0-9+\-*/().%\sA-Za-z]*$/.test(expression)) {
            throw new Error("Input tidak valid");
        }

        if (!/^(?:[0-9+\-*/().%\s]|Math\.(?:PI|E|sqrt))+$/i.test(expression)) {
            throw new Error("Input tidak valid");
        }

        const result = Function('"use strict"; return (' + expression + ')')();

        if (!Number.isFinite(result)) {
            throw new Error("Hasil tidak terdefinisi");
        }

        document.getElementById("calcExpression").textContent =
            calcExpression.replaceAll("*", "×").replaceAll("/", "÷");

        calcExpression = String(Number(result.toPrecision(12)));
        document.getElementById("calcDisplay").textContent = calcExpression;
        document.getElementById("calcMessage").textContent = "Perhitungan berhasil.";
    } catch (error) {
        document.getElementById("calcMessage").textContent =
            "Periksa kembali operasi matematika.";
    }
}

// =====================================
// KUIS
// =====================================

function startQuiz() {
    quizSubject = document.getElementById("quizSubject").value;
    activeQuestions = [...quizBank[quizSubject]];

    currentQuestion = 0;
    correctAnswers = 0;
    answered = false;

    document.getElementById("quizSetup").classList.add("hidden");
    document.getElementById("quizResult").classList.add("hidden");
    document.getElementById("quizArea").classList.remove("hidden");

    document.getElementById("quizSubjectLabel").textContent = quizSubject;

    renderQuestion();
}

function renderQuestion() {
    const question = activeQuestions[currentQuestion];
    answered = false;

    document.getElementById("quizCounter").textContent =
        `Soal ${currentQuestion + 1}/${activeQuestions.length}`;

    document.getElementById("quizProgressBar").style.width =
        `${((currentQuestion + 1) / activeQuestions.length) * 100}%`;

    document.getElementById("questionText").textContent = question.q;
    document.getElementById("answerFeedback").textContent = "";
    document.getElementById("nextQuestionBtn").disabled = true;

    document.getElementById("nextQuestionBtn").textContent =
        currentQuestion === activeQuestions.length - 1
            ? "Lihat Hasil →"
            : "Soal Berikutnya →";

    document.getElementById("answerOptions").innerHTML =
        question.options.map((option, index) => `
            <button class="answer-option" onclick="selectAnswer(${index})">
                ${String.fromCharCode(65 + index)}. ${option}
            </button>
        `).join("");
}

function selectAnswer(index) {
    if (answered) return;

    answered = true;

    const question = activeQuestions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-option");

    buttons.forEach((button, i) => {
        button.disabled = true;

        if (i === question.answer) button.classList.add("correct");
        if (i === index && index !== question.answer) button.classList.add("wrong");
    });

    const feedback = document.getElementById("answerFeedback");

    if (index === question.answer) {
        correctAnswers++;
        feedback.textContent = "✓ Benar! " + question.explanation;
    } else {
        feedback.textContent = "✕ Belum tepat. " + question.explanation;
    }

    document.getElementById("nextQuestionBtn").disabled = false;
}

function nextQuestion() {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < activeQuestions.length) {
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const score = Math.round(correctAnswers / activeQuestions.length * 100);

    const history = getData("history");

    history.push({
        subject: quizSubject,
        score,
        correct: correctAnswers,
        total: activeQuestions.length,
        date: new Date().toISOString()
    });

    saveData("history", history);

    document.getElementById("quizArea").classList.add("hidden");
    document.getElementById("quizResult").classList.remove("hidden");
    document.getElementById("finalScore").textContent = score;

    let message;

    if (score === 100) message = "Sempurna! Kamu menguasai materi ini! 🏆";
    else if (score >= 80) message = "Hebat! Pertahankan prestasimu! 🎉";
    else if (score >= 60) message = "Bagus! Terus tingkatkan kemampuanmu.";
    else message = "Jangan menyerah. Pelajari kembali materinya!";

    document.getElementById("resultMessage").textContent =
        `${message} Jawaban benar: ${correctAnswers} dari ${activeQuestions.length}.`;

    refreshAll();
}

function resetQuiz() {
    document.getElementById("quizResult").classList.add("hidden");
    document.getElementById("quizSetup").classList.remove("hidden");
}

// =====================================
// LATIHAN SOAL
// =====================================

function renderPractice() {
    const subject = document.getElementById("practiceSubject").value;
    const questions = practiceBank[subject];

    if (practiceIndex >= questions.length) practiceIndex = 0;

    const question = questions[practiceIndex];

    document.getElementById("practiceQuestion").innerHTML = `
        <div class="practice-question">
            <p class="eyebrow">LATIHAN ${practiceIndex + 1} / ${questions.length}</p>
            <h3>${question.q}</h3>
            <input id="practiceAnswer" placeholder="Masukkan jawabanmu">
            <button class="primary-btn" onclick="checkPractice()">Periksa Jawaban</button>
            <button class="secondary-btn" onclick="nextPractice()">Soal Berikutnya →</button>
            <div id="practiceFeedback" class="practice-feedback"></div>
        </div>
    `;
}

function normalizeAnswer(value) {
    return value.toLowerCase()
        .replace(/\s+/g, "")
        .replaceAll("²", "^2")
        .replaceAll("³", "^3");
}

function checkPractice() {
    const subject = document.getElementById("practiceSubject").value;
    const question = practiceBank[subject][practiceIndex];
    const input = document.getElementById("practiceAnswer").value;

    if (!input.trim()) {
        document.getElementById("practiceFeedback").textContent =
            "Masukkan jawaban terlebih dahulu.";
        return;
    }

    const correct =
        normalizeAnswer(input) === normalizeAnswer(question.answer);

    document.getElementById("practiceFeedback").innerHTML = correct
        ? `<span style="color:#18d99a">✓ Jawaban benar! ${question.explanation}</span>`
        : `<span style="color:#ff8b9f">✕ Jawaban belum tepat. Coba lagi. Pembahasan: ${question.explanation}</span>`;
}

function nextPractice() {
    const subject = document.getElementById("practiceSubject").value;

    practiceIndex = (practiceIndex + 1) % practiceBank[subject].length;
    renderPractice();
}

// =====================================
// PROGRESS BELAJAR
// =====================================

function renderProgress() {
    const completed = getData("completed");
    const history = getData("history");

    document.getElementById("subjectProgress").innerHTML =
        subjects.map(subject => {
            const total = materials.filter(m => m.subject === subject).length;

            const done = materials.filter(m =>
                m.subject === subject && completed.includes(m.id)
            ).length;

            const percentage = total
                ? Math.round(done / total * 100)
                : 0;

            return `
                <div class="progress-item">
                    <div class="progress-item-header">
                        <span>${subject}</span>
                        <span>${percentage}% (${done}/${total})</span>
                    </div>
                    <div class="progress-track">
                        <div class="progress-fill" style="width:${percentage}%"></div>
                    </div>
                </div>
            `;
        }).join("");

    const average = history.length
        ? Math.round(history.reduce((sum, item) => sum + item.score, 0) / history.length)
        : 0;

    document.getElementById("progressCompleted").textContent = completed.length;
    document.getElementById("progressQuizzes").textContent = history.length;
    document.getElementById("progressAverage").textContent = average;
}

// =====================================
// RIWAYAT NILAI
// =====================================

function renderHistory() {
    const history = [...getData("history")].reverse();
    const list = document.getElementById("historyList");

    list.innerHTML = history.length
        ? history.map(item => `
            <div class="history-item">
                <div>
                    <h4>${item.subject}</h4>
                    <p>${new Date(item.date).toLocaleString("id-ID")}</p>
                    <p>Benar: ${item.correct}/${item.total}</p>
                </div>
                <span class="score-badge">${item.score}/100</span>
            </div>
        `).join("")
        : `<p class="muted">Belum ada riwayat kuis.</p>`;
}

function clearHistory() {
    if (!confirm("Hapus seluruh riwayat nilai akun ini?")) return;

    saveData("history", []);
    refreshAll();
}

// =====================================
// DASHBOARD
// =====================================

function updateDashboard() {
    const completed = getData("completed");
    const history = getData("history");

    const average = history.length
        ? Math.round(history.reduce((sum, item) => sum + item.score, 0) / history.length)
        : 0;

    document.getElementById("totalMaterials").textContent = materials.length;
    document.getElementById("completedMaterials").textContent = completed.length;
    document.getElementById("totalQuizzes").textContent = history.length;
    document.getElementById("averageScore").textContent = average;
}

function renderRecentActivity() {
    const history = [...getData("history")].reverse().slice(0, 5);
    const container = document.getElementById("recentActivity");

    container.innerHTML = history.length
        ? history.map(item => `
            <div class="history-item">
                <div>
                    <h4>Kuis ${item.subject}</h4>
                    <p>${new Date(item.date).toLocaleString("id-ID")}</p>
                </div>
                <span class="score-badge">${item.score}/100</span>
            </div>
        `).join("")
        : `<p class="muted">Belum ada aktivitas. Yuk, mulai belajar!</p>`;
}

function refreshAll() {
    if (!currentUser) return;

    renderMaterials();
    updateDashboard();
    renderRecentActivity();
    renderProgress();
    renderHistory();
}

// =====================================
// PEMULIHAN SESI
// =====================================

const savedEmail = sessionStorage.getItem("math_session");

if (savedEmail) {
    const user = getUsers().find(item => item.email === savedEmail);

    if (user) {
        currentUser = user;
        openApp();
    } else {
        sessionStorage.removeItem("math_session");
    }
}
