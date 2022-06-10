<script>
    import Project from './Project/Project.svelte'
    import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
</script>
<section use:scrollRef={'projects'} >
<pre><code>
<h1>> npm run showMyProjects</h1>
</code></pre>
    <Project project={'The Wine Valley'}/>
    <Project project={'Blog Front-End'}/>
    <Project project={'Blog Back-End'}/>
</section>