// Parent class untuk kendaraan
class Kendaraan {
  constructor(merk, model, tahun) {
    this.merk = merk;
    this.model = model;
    this.tahun = tahun;
  }

  infoKendaraan() {
    return `${this.merk} ${this.model} (${this.tahun})`;
  }
}

// Class turunan: Mobil
class Mobil extends Kendaraan {
  constructor(merk, model, tahun, jumlahPintu) {
    super(merk, model, tahun);
    this.jumlahPintu = jumlahPintu;
  }

  infoKendaraan() {
    return `${super.infoKendaraan()} - ${this.jumlahPintu} pintu`;
  }
}

// Class turunan: Motor
class Motor extends Kendaraan {
  constructor(merk, model, tahun, tipe) {
    super(merk, model, tahun);
    this.tipe = tipe;
  }

  infoKendaraan() {
    return `${super.infoKendaraan()} - Tipe: ${this.tipe}`;
  }
}

// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  infoPelanggan() {
    return `${this.nama} (${this.nomorTelepon}) menyewa ${this.kendaraanDisewa.infoKendaraan()}`;
  }
}

// Class Sistem Transportasi
class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  sewaKendaraan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanPelanggan() {
    console.log("Daftar Pelanggan yang sedang menyewa kendaraan:");
    this.daftarPelanggan.forEach((p, index) => {
      console.log(`${index + 1}. ${p.infoPelanggan()}`);
    });
  }
}

// ======= SIMULASI PROGRAM =======

// Buat kendaraan
const mobil1 = new Mobil("Toyota", "Avanza", 2022, 5);
const motor1 = new Motor("Honda", "CBR", 2021, "Sport");

// Buat pelanggan
const pelanggan1 = new Pelanggan("Sabrina", "08123456789", mobil1);
const pelanggan2 = new Pelanggan("Budi", "08987654321", motor1);

// Buat sistem transportasi
const sistem = new SistemTransportasi();
sistem.sewaKendaraan(pelanggan1);
sistem.sewaKendaraan(pelanggan2);

// Tampilkan daftar pelanggan
sistem.tampilkanPelanggan();
