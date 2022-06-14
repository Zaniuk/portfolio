<script>
    import Project from './Project/Project.svelte'
    
</script>
<section id="projects">
<pre><code>
<h1>> npm run showMyProjects</h1>
</code></pre>
<div id="projects-container">
    <Project project={'Blog Front-End'} linkGithub={'https://github.com/Zaniuk/Blog'} />
    <Project project={'Blog Back-End'} linkGithub={'https://github.com/Zaniuk/Blog-backend'} />
    <Project project={'The Wine Valley'} linkGithub={'https://github.com/Zaniuk/TiendaVinos'} />
</div>
</section>
<style>
    #projects-container{
        max-width: 900px;
        margin: 0 auto;
        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
    h1{
        text-align: center;
        padding: 0;
        margin: 0;
        padding-top: 4rem;
}
</style>