<script>
import { onMount } from 'svelte';

import Project from './Project/Project.svelte'
    onMount(()=>{
        const project1 = document.getElementById('project-1')
        const project2 = document.getElementById('project-2')
        const projectsSection = document.getElementById('projects')
        const options= {
        root: null,
        threshold: 0.2
    }
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting == true){
                project1.classList.add('slide-in-fwd-top')
                project2.classList.add('slide-in-fwd-top-delay-4')
            }
        })
    }, options)
    observer.observe(projectsSection)
    })
</script>
<section id="projects">
<pre><code>
<h1>> npm run showMyProjects</h1>
</code></pre>
<div id="projects-container">
    <Project id="project-1" project={'Blog Back-End'} linkGithub={'https://github.com/Zaniuk/Blog-backend'} linkDemo={'https://ancient-badlands-91189.herokuapp.com/api/posts'} img={'blog.png'} />
    <Project id="project-2" project={'The Wine Valley'} linkGithub={'https://github.com/Zaniuk/TiendaVinos'} linkDemo={'https://winevalley.pages.dev/'}  img={'wine.png'} />
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