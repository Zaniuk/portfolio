<script>
import Card from './Card/Card.svelte'

</script>
<section id="skills">

<h1><span class="text-pink">console</span>.<span class="text-lblue">log</span><span class="text-ulblue">(</span><span class="text-green">'My Skills'</span><span class="text-ulblue">)</span>;</h1>

<div>
        <Card color1={'text-green'}  technology={'NodeJS'} img={'nodejs.png'}/>
        <Card color1={'text-purple'}  technology={'React'} img={'react.png'}/>
        <Card color1={'text-ulblue'}  technology={'MongoDB'} img={'mongo.png'}/>
        <Card color1={'text-lblue'}  technology={'ExpressJS'} img={'express.png'}/>
        <Card color1={'text-yellow'}  technology={'JavaScript'} img={'js.png'}/>
        <Card color1={'text-pink'}  technology={'HTML/CSS'} img={'htmlcss.png'} exc={'html-img'}/>
</div>
</section>
<style>
div{
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