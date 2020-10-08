<style>
	.container {
		display: flex;
	}

	.list {
		background: #f5f5f5;
		width: 200px;
		padding: 12px;
		height: 100vh;
	}

	.view {
		padding: 12px;
	}

	h3 {
		display: inline;
	}

	.controls {
		margin-bottom: 12px;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 12px 0;
	}
</style>

<svelte:head>
	<title>Contakto Offline</title>
</svelte:head>

<div class="container">
	<section class="list">
		<div class="controls">
			<h3>Entrevistas</h3>
			<button>+</button>
		</div>
		<ul>
			<li>
				<a href="./#">Candidato 1</a>
			</li>
			<li>
				<a href="./#">Candidato 2</a>
			</li>
			<li>
				<a href="./#">Candidato 3</a>
			</li>
		</ul>
	</section>
	<section class="view">

		<div class="column">
			<div class="item">
				<p>1. Foto de perfil del candidato</p>
				<input type="file">
			</div>

			<br>

			<fieldset>
				<legend>2. Fotografias del domicilio</legend>

				<div class="item">
					<p>a. Interior derecho</p>
					<input type="file">
				</div>
				<div class="item">
					<p>b. Interior izquierdo</p>
					<input type="file">
				</div>
				<div class="item">
					<p>c. Exterior derecho</p>
					<input type="file">
				</div>
				<div class="item">
					<p>d. Exterior izquierdo</p>
					<input type="file">
				</div>
				<div class="item">
					<p>e. Frente</p>
					<input type="file">
				</div>
			</fieldset>

			<br>

			<div class="item">
				<p>3. Gestor Entrevistador</p>
				<input type="file">
			</div>

			<div class="item">
				<p>4. Croquis</p>
				<input type="file">
			</div>

			<div class="item">
				<p>5. Aviso Privacidad</p>
				<input type="file">
			</div>

			<div class="item">
				<p>6. Constancia</p>
				<input type="file">
			</div>
		</div>

		<br>

		<fieldset>
			<legend>7. Fotografias de la Identificación</legend>

			<div class="item">
				<p>7.a Identificación con fotografia</p>
				<input type="file">
			</div>
			<div class="item">
				<p>7.b Identificación con fotografia</p>
				<input type="file">
			</div>
			<div class="item">
				<p>7.c Identificación con fotografia</p>
				<input type="file">
			</div>
			<div class="item">
				<p>7.d Identificación con fotografia</p>
				<input type="file">
			</div>
		</fieldset>

		<div class="item">
			<p>8. Acta de nacimiento</p>
			<input type="file">
		</div>

		<div class="item">
			<p>9. Comprobante de domicilio</p>
			<input type="file">
		</div>

		<br>

		<fieldset>
			<legend>10. Semanas Cotizadas</legend>

			<div class="item">
				<p>10.a Semanas Cotizadas</p>
				<input type="file">
			</div>
			<div class="item">
				<p>10.b Semanas Cotizadas</p>
				<input type="file">
			</div>
			<div class="item">
				<p>10.c Semanas Cotizadas</p>
				<input type="file">
			</div>
			<div class="item">
				<p>10.d Semanas Cotizadas</p>
				<input type="file">
			</div>
			<div class="item">
				<p>10.e Semanas Cotizadas</p>
				<input type="file">
			</div>
		</fieldset>

		<br>

		<div class="item">
			<p>11. Validación de Demandas Laborales</p>
			<input type="file">
		</div>

		<div class="item">
			<p>12. Carta Laboral</p>
			<input type="file">
		</div>

		<br>

		<fieldset>
			<legend>13. Adicionales</legend>

			<div class="item">
				<p>Adicionales A</p>
				<input type="file">
			</div>
			<div class="item">
				<p>Adicionales B</p>
				<input type="file">
			</div>
			<div class="item">
				<p>Adicionales C</p>
				<input type="file">
			</div>
			<div class="item">
				<p>Adicionales D</p>
				<input type="file">
			</div>
			<div class="item">
				<p>Adicionales E</p>
				<input type="file">
			</div>
			<div class="item">
				<p>Adicionales F</p>
				<input type="file">
			</div>
			<div class="item">
				<p>Adicionales G</p>
				<input type="file">
			</div>
			<div class="item">
				<p>Adicionales H</p>
				<input type="file">
			</div>
			<div class="item">
				<p>Adicionales I</p>
				<input type="file">
			</div>
		</fieldset>

		<br>

		<div class="item">
			<p>Extra A (Cualquier formato)</p>
			<input type="file">
		</div>

		<br>

		<div class="cta">
			<button>Guardar</button>
			<br />
			<button>Exportar</button>
		</div>
		
	</section>
</div>
