<script>
	import Content from '../../components/Content.svelte';
	import Subnav from '../../components/Subnav.svelte';
</script>

<style>
	a {
		padding: 12px 20px;
		border: 1px solid black;
	}
</style>

<Content>
	<Subnav />

	<h1>Exportar</h1>

	<a href="/candidato_1.zip" target="_blank">Generar ZIP</a>
</Content>
