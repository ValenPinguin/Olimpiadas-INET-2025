function buscarVuelos() {
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    alert(`Buscando vuelos desde ${origen} hacia ${destino} con ${cantidadPasajeros} pasajero(s)...`);
}

function mostrarQuienesSomos() {
    const seccion = document.getElementById('seccion-quienes');
    seccion.style.display = seccion.style.display === 'none' || seccion.style.display === '' ? 'block' : 'none';
}

function toggleFiltros() {
    const filtros = document.getElementById('form-filtros');
    filtros.style.display = filtros.style.display === 'none' || filtros.style.display === '' ? 'block' : 'none';
}

let cantidadPasajeros = 1;

function cambiarPasajeros(cambio) {
    cantidadPasajeros += cambio;
    if (cantidadPasajeros < 1) cantidadPasajeros = 1;
    document.getElementById('contador-pasajeros').textContent =
    cantidadPasajeros === 1 ? '👤 1' : `👥 ${cantidadPasajeros}`;
}

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let fechaActual = new Date(2024, 3);

function renderizarCalendario() {
    const calendario = document.getElementById('grid-calendario');
    const mesTitulo = document.getElementById('mes-actual');
    const year = fechaActual.getFullYear();
    const month = fechaActual.getMonth();

    mesTitulo.textContent = `${meses[month]} ${year}`;

    const primerDia = new Date(year, month, 1).getDay();
    const diasEnMes = new Date(year, month + 1, 0).getDate();

    calendario.innerHTML = '<strong>Dom</strong><strong>Lun</strong><strong>Mar</strong><strong>Mié</strong><strong>Jue</strong><strong>Vie</strong><strong>Sáb</strong>';

    for (let i = 0; i < primerDia; i++) {
    calendario.innerHTML += '<span></span>';
    }

    for (let i = 1; i <= diasEnMes; i++) {
    calendario.innerHTML += `<span>${i}</span>`;
    }
}

function cambiarMes(direccion) {
    fechaActual.setMonth(fechaActual.getMonth() + direccion);
    renderizarCalendario();
}

renderizarCalendario();