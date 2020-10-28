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

	<h1>Evaluación</h1>

	<h2>Documentos evaluados</h2>
	<p>
		<span>Acta de nacimiento:</span>
		<input type="text" name="nombre">
	</p>
	<p>
		<span>Acta de matrimonio:</span>
		<input type="text" name="apellido">
	</p>
	<p>
		<span>Comprobante de domicilio:</span>
		<input type="text" name="email">
	</p>
	<p>
		<span>Comprobrante de identificación:</span>
		<input type="text">
	</p>
	<p>
		<span>Comprobante de NSS:</span>
		<input type="text">
	</p>
	<p>
		<span>CURP:</span>
		<input type="text">
	</p>
	<p>
		<span>Cartilla SMN:</span>
		<input type="text">
	</p>
	<p>
		<span>Último grado de estudios:</span>
		<input type="text">
	</p>
	<p>
		<span>Cartas laborales:</span>
		<input type="text">
	</p>
	<p>
		<span>En caso de que no, especificar documento y razón porque no lo presentó:</span>
		<input type="text">
	</p>

	<h2>Calificación de 1% a 100%</h2>
	<h3>Aspecto del Hogar</h3>
	<p>
		<span>Orden:</span>
		<input type="text">
	</p>
	<p>
		<span>Limpieza:</span>
		<input type="text">
	</p>
	<p>
		<span>Conservación:</span>
		<input type="text">
	</p>

	<h3>Aspecto del candidato</h3>
	<p>
		<span>Puntualidad:</span>
		<input type="text">
	</p>
	<p>
		<span>Apariencia física:</span>
		<input type="text">
	</p>
	<p>
		<span>Colaboración:</span>
		<input type="text">
	</p>
	<p>
		<span>Actitud:</span>
		<input type="text">
	</p>
	
	<h2>Conclusión</h2>
	<p>
		<span>Resultado de la entrevista:</span>
		<input type="text">
	</p>
	<p>
		<span>Conclusiones de la entrevista (visible en conclusión pdf)::</span>
		<input type="text">
	</p>

	<a href="/">Guardar</a>
	<a href="/">Cancelar</a>
</Content>
