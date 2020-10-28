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

	<h1>Datos Generales</h1>

	<p>
		<span>Nombre:</span>
		<input type="text" name="nombre">
	</p>
	<p>
		<span>Apellido:</span>
		<input type="text" name="apellido">
	</p>
	<p>
		<span>Email:</span>
		<input type="text" name="email">
	</p>

	<h2>Domicilio</h2>
	<p>
		<span>Calle:</span>
		<input type="text">
	</p>
	<p>
		<span>Colonia:</span>
		<input type="text">
	</p>
	<p>
		<span>Num ext-int:</span>
		<input type="text">
	</p>
	<p>
		<span>Ciudad:</span>
		<input type="text">
	</p>
	<p>
		<span>Estado:</span>
		<input type="text">
	</p>
	<p>
		<span>Código Postal:</span>
		<input type="text">
	</p>

	<h2>Teléfonos</h2>
	<p>
		<span>Movil:</span>
		<input type="text">
	</p>
	<p>
		<span>Recado:</span>
		<input type="text">
	</p>
	<p>
		<span>Parentesco:</span>
		<input type="text">
	</p>

	<h2>Datos adicionales</h2>
	<p>
		<span>Lugar de nacimiento:</span>
		<input type="text">
	</p>
	<p>
		<span>Fecha de nacimiento:</span>
		<input type="text">
	</p>
	<p>
		<span>Nacionalidad:</span>
		<input type="text">
	</p>
	<p>
		<span>RFC:</span>
		<input type="text">
	</p>
	<p>
		<span>CURP:</span>
		<input type="text">
	</p>
	<p>
		<span>Folio credencial IFE:</span>
		<input type="text">
	</p>
	<p>
		<span>Cartilla SMN:</span>
		<input type="text">
	</p>
	<p>
		<span>Tipo de licencia:</span>
		<input type="text">
	</p>
	<p>
		<span>No. de licencia:</span>
		<input type="text">
	</p>
	<p>
		<span>No. de pasaporte o visa:</span>
		<input type="text">
	</p>
	<p>
		<span>NSS (IMSS):</span>
		<input type="text">
	</p>
	<p>
		<span>Estado civil:</span>
		<input type="text">
	</p>
	<p>
		<span>Fecha de matrimonio:</span>
		<input type="text">
	</p>
	<p>
		<span>Religión:</span>
		<input type="text">
	</p>
	<p>
		<span>Tiempo radicando en la ciudad:</span>
		<input type="text">
	</p>
	<p>
		<span>Medio que utiliza para transporte:</span>
		<input type="text">
	</p>
	<p>
		<span>Medio por el qué se enteró de la vacante:</span>
		<input type="text">
	</p>
	<p>
		<span>Tiempo de trayecto al lugar de trabajo:</span>
		<input type="text">
	</p>

	<a href="/">Guardar</a>
	<a href="/">Cancelar</a>

</Content>
