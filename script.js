document.addEventListener('DOMContentLoaded', function () {
  const box = document.getElementById('calendario-box');
  const painel = document.getElementById('painel');
  const botao = document.querySelector('.btn-atalhos');

  function mostrarCalendario() {
    if (!box) return;
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
  }

  botao.addEventListener('click', function (e) {
    e.stopPropagation(); 
    painel.classList.toggle('ativo');
  });

  document.addEventListener('click', function (e) {
    if (!painel.contains(e.target) && !botao.contains(e.target)) {
      painel.classList.remove('ativo');
    }
  });

  document.getElementById('ano').textContent = new Date().getFullYear();

  window.mostrarCalendario = mostrarCalendario;

  function mostrarHorarios() {
    const hbox = document.getElementById('horarios-box');
    hbox.style.display = hbox.style.display === 'block' ? 'none' : 'block';
  }

  window.mostrarHorarios = mostrarHorarios;
});


function mostrarCadastro() {
  document.getElementById("cadastro").style.display = "block";
}

function tipoUsuario() {
  const tipo = document.getElementById("tipo").value;
  document.getElementById("campos-prof").style.display = tipo === "prof" ? "block" : "none";
  document.getElementById("campos-aluno").style.display = tipo === "aluno" ? "block" : "none";
}
