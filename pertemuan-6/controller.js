// Fungsi untuk menampilkan data ke tabel
function lihatData() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  data.map((item, index) => {
    let row = `
      <tr>
        <td>${index + 1}</td>
        <td>${item.nama}</td>
        <td>${item.umur}</td>
        <td>${item.alamat}</td>
        <td>${item.email}</td>
        <td>
          <button onclick="hapusData(${index})">Hapus</button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Fungsi untuk menambah data
function tambahData() {
  const nama = document.getElementById("nama").value;
  const umur = document.getElementById("umur").value;
  const alamat = document.getElementById("alamat").value;
  const email = document.getElementById("email").value;

  if (nama && umur && alamat && email) {
    data.push({ nama, umur: parseInt(umur), alamat, email });
    lihatData();
    document.getElementById("form").reset();
  } else {
    alert("Lengkapi semua field!");
  }
}

// Fungsi untuk menghapus data
function hapusData(index) {
  data.splice(index, 1);
  lihatData();
}


window.onload = () => {
  lihatData();
};
