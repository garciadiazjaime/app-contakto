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

	<h1>Inf. Académica</h1>

	<h2>Primaria</h2>
	<p>
		<span>Institución:</span>
		<input type="text" name="nombre">
	</p>
	<p>
		<span>Lugar (ciudad):</span>
		<input type="text" name="apellido">
	</p>
	<p>
		<span>años:</span>
		<input type="text" name="email">
	</p>
	<p>
		<span>Certificado:</span>
		<input type="text">
	</p>

	<h2>Secundaria</h2>
	<p>
		<span>Institución:</span>
		<input type="text" name="nombre">
	</p>
	<p>
		<span>Lugar (ciudad):</span>
		<input type="text" name="apellido">
	</p>
	<p>
		<span>años:</span>
		<input type="text" name="email">
	</p>
	<p>
		<span>Certificado:</span>
		<input type="text">
	</p>

	<h2>Preparatoria</h2>
	<p>
		<span>Institución:</span>
		<input type="text" name="nombre">
	</p>
	<p>
		<span>Lugar (ciudad):</span>
		<input type="text" name="apellido">
	</p>
	<p>
		<span>años:</span>
		<input type="text" name="email">
	</p>
	<p>
		<span>Certificado:</span>
		<input type="text">
	</p>

	<h2>Profesional</h2>
	<p>
		<span>Institución:</span>
		<input type="text" name="nombre">
	</p>
	<p>
		<span>Lugar (ciudad):</span>
		<input type="text" name="apellido">
	</p>
	<p>
		<span>años:</span>
		<input type="text" name="email">
	</p>
	<p>
		<span>Certificado:</span>
		<input type="text">
	</p>

	<h2>Otro</h2>
	<p>
		<span>Institución:</span>
		<input type="text" name="nombre">
	</p>
	<p>
		<span>Lugar (ciudad):</span>
		<input type="text" name="apellido">
	</p>
	<p>
		<span>años:</span>
		<input type="text" name="email">
	</p>
	<p>
		<span>Certificado:</span>
		<input type="text">
	</p>

	<p>
		<span>Cédula profesional::</span>
		<input type="text">
	</p>
	<p>
		<span>Año de expedición::</span>
		<input type="text">
	</p>
	<p>
		<span>Dominio de otro idioma::</span>
		<input type="text">
	</p>
	<p>
		<span>Hablado:</span>
		<input type="text">
	</p>
	<p>
		<span>Leido:</span>
		<input type="text">
	</p>
	<p>
		<span>Escuchado:</span>
		<input type="text">
	</p>

	<h2>Estudios</h2>
	<p>
		<span>Estudia Actualmente:</span>
		<input type="text">
	</p>
	<p>
		<span>Institución:</span>
		<input type="text">
	</p>

	<p>
		<span>Qué estudia?:</span>
		<input type="text">
	</p>
	<p>
		<span>Horarios:</span>
		<input type="text">
	</p>
	<p>
		<span>Días:</span>
		<input type="text">
	</p>

	<a href="/">Guardar</a>
	<a href="/">Cancelar</a>
</Content>
