<style>
  .container {
		display: flex;
	}

	.view {
		padding: 12px;
	}

  .list {
		background: #f5f5f5;
		width: 200px;
		padding: 12px;
		height: 100vh;
	}

  h3 {
    display: inline-block;
  }

  .controls a {
    display: inline-block;
    margin: 6px;
    font-size: 20px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 6px 0;
  }
</style>

<div class="container">

	<section class="list">
    <div class="controls">
      <h3>Entrevistas</h3>
      <a href="/candidato/datos-generales">+</a>
    </div>
    <ul>
      <li>
        <a href="/candidato/edit/1">Candidato 1</a>
      </li>
      <li>
        <a href="/candidato/edit/2">Candidato 2</a>
      </li>
      <li>
        <a href="/candidato/edit/3">Candidato 3</a>
      </li>
    </ul>
  </section>

	<section class="view">
		<slot />
	</section>
</div>
