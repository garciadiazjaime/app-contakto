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

	<h1>Inf. Personal</h1>

	<p>
		<span>Demandas Laborales y/o Antecedentes Penales</span>
		<input type="text" name="nombre">
	</p>
	<p>
		<span>Cuenta con algún tatuaje o arete:(Cuantos y en que parte del cuerpo)</span>
		<input type="text" name="apellido">
	</p>

	<h2>Historial en empresa</h2>
	<p>
		<span>Ha trabajado anteriormente en la empresa</span>
		<input type="text">
	</p>
	<p>
		<span>Puesto</span>
		<input type="text">
	</p>
	<p>
		<span>Periodo:</span>
		<input type="text">
	</p>
	<p>
		<span>Sucursal</span>
		<input type="text">
	</p>
	<p>
		<span>Motivo de Salida:</span>
		<input type="text">
	</p>

	<p>
		<span>Tiene algún familiar trabajando en la empresa:</span>
		<input type="text">
	</p>

	<p>
		<span>Puesto:</span>
		<input type="text">
	</p>
	<p>
		<span>Nombre:</span>
		<input type="text">
	</p>
	<p>
		<span>Sucursal:</span>
		<input type="text">
	</p>
	<p>
		<span>Parentesco:</span>
		<input type="text">
	</p>

	<a href="/">Guardar</a>
	<a href="/">Cancelar</a>
</Content>
