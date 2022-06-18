<script>
    import Project from './Project/Project.svelte'
    
</script>
<section id="projects">
<pre><code>
<h1>> npm run showMyProjects</h1>
</code></pre>
<div id="projects-container">
    <Project project={'Blog Back-End'} linkGithub={'https://github.com/Zaniuk/Blog-backend'} linkDemo={'https://ancient-badlands-91189.herokuapp.com/api/posts'} img={'blog.png'} />
    <Project project={'The Wine Valley'} linkGithub={'https://github.com/Zaniuk/TiendaVinos'} linkDemo={'https://winevalley.pages.dev/'}  img={'wine.png'} />
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