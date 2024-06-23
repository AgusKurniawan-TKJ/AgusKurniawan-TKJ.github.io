var rawjari = document.getElementById('jari');
var input = document.getElementById('input');
var output = document.getElementById('output-lingkaran');
var keliling = document.getElementById('output-keliling');
var luas = document.getElementById('output-luas')
input.addEventListener('click',() => hitung());

function hitung(){
  var jari = rawjari.value
  var hasilkeliling = 22/7 * jari * 2 ;
  var hasilluas = 22/7 * jari * jari ;
  output.style.border = "solid 2px black";
  keliling.innerHTML = "Keliling Lingkaran = " + hasilkeliling ;
  luas.innerHTML = "Luas Lingkaran = " + hasilluas ;
  if(jari <= 80){
  output.style.width = jari*10 + "px";
  output.style.height = jari*10 + "px";
  }
  else
  {
  output.style.width = 800 + "px";
  output.style.height = 800 + "px";
  }
};

if(window.innerWidth < 480){
  alert("Silahkan Gunakan Situs Desktop Untuk Melihat Halaman Web")
}