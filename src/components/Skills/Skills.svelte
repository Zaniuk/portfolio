<script>
import Card from './Card/Card.svelte'
import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
</script>
<section use:scrollRef={'skills'} >
<pre><code>
<h1>console.log('My Skills');</h1>
</code></pre>
        <Card technology={'NodeJS'}/>
        <Card technology={'React'}/>
        <Card technology={'MongoDB'}/>
        <Card technology={'ExpressJS'}/>
        <Card technology={'JavaScript'}/>
        <Card technology={'HTML/CSS'}/>
</section>