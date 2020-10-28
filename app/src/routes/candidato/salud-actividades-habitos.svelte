<script>
	import Content from '../../components/Content.svelte';
	import Subnav from '../../components/Subnav.svelte';
</script>

<style>
	span {
		width: 320px;
		display: inline-block;
	}
	input {
		width: 400px;
		height: 32px;
		font-size: 26px;
	}
	a {
		padding: 12px 20px;
		border: 1px solid black;
	}
</style>


<Content>
	<Subnav />

	<h1>Salud, Actividades y Hábitos</h1>

	<p>
		<span>Peso (kg)::</span>
		<input type="text" name="nombre">
	</p>
	<p>
		<span>Estatura (mts)::</span>
		<input type="text" name="apellido">
	</p>
	<p>
		<span>Salud física::</span>
		<input type="text" name="email">
	</p>


	<p>
		<span>Salud visual::</span>
		<input type="text">
	</p>
	<p>
		<span>Embarazada (# meses)::</span>
		<input type="text">
	</p>
	<p>
		<span>Ejercicio que practica y con qué frecuencia lo hace::</span>
		<input type="text">
	</p>
	<p>
		<span>Accidentes::</span>
		<input type="text">
	</p>
	<p>
		<span>Intervenciones quirúrgicas::</span>
		<input type="text">
	</p>
	<p>
		<span>Enfermedades que padecen familiares:</span>
		<input type="text">
	</p>

	<p>
		<span>Ha estado bajo algún tratamiento médico o psicológico::</span>
		<input type="text">
	</p>
	<p>
		<span>Enfermedades padecidas con mayor frecuencia::</span>
		<input type="text">
	</p>
	<p>
		<span>Institución médica a la que acude::</span>
		<input type="text">
	</p>

	<p>
		<span>Religión:</span>
		<input type="text">
	</p>
	<p>
		<span>Horarios y días en los que las practica::</span>
		<input type="text">
	</p>

	<h2>Inactividad laboral</h2>
	<p>
		<span>Periodos:</span>
		<input type="text">
	</p>
	<p>
		<span>Actividades que realizó::</span>
		<input type="text">
	</p>

	<h2>Negocios por cuenta propia</h2>
	<p>
		<span>Periodos:</span>
		<input type="text">
	</p>
	<p>
		<span>Actividades que realizó::</span>
		<input type="text">
	</p>

	<h2>Especificar cada cuanto consume</h2>
	<p>
		<span>Tabaco:</span>
		<input type="text">
	</p>
	<p>
		<span>Alcohol:</span>
		<input type="text">
	</p>
	<p>
		<span>Otras:</span>
		<input type="text">
	</p>
	
	<a href="/">Guardar</a>
	<a href="/">Cancelar</a>
</Content>
