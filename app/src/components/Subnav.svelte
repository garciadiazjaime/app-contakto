<script>
  const steps = {
    generales: 1,
    personal: 2,
    salud: 3,
    academica: 4,
    vivienda: 5,
    marco: 6,
    economica: 7,
    referencias: 8,
    evaluacion: 9,
    adjuntos: 10,
  }
  function clicHandler(step) {
    console.log(step)
  }
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    color: #428bca;
    padding: 6px;
    display: inline-block;
  }
</style>

<ul>
  <li><a href="./candidato/datos-generales">Datos Generales</a></li>
  <li><a href="./candidato/informacion-personal">Inf. Personal</a></li>
  <li><a href="./candidato/salud-actividades-habitos">Salud, Actividades y Hábitos</a></li>
  <li><a href="./candidato/informacion-academica">Inf. Académica</a></li>
  <li><a href="./candidato/vivienda">Vivienda</a></li>
  <li><a href="./candidato/marco-familiar">Marco Familiar</a></li>
  <li><a href="./candidato/informacion-economica">Inf. Económica</a></li>
  <li><a href="./candidato/referencias-personales">Referencias Personales</a></li>
  <li><a href="./candidato/evaluacion">Evaluación</a></li>
  <li><a href="./candidato/adjuntos">Adjuntos</a></li>
  <li><a href="./candidato/exportar">Export</a></li>
</ul>
