<script>
import Card from './Card/Card.svelte'
import { onMount } from 'svelte';
onMount(()=>{
        const card1 = document.getElementById('card-1')
        const card2 = document.getElementById('card-2')
        const card3 = document.getElementById('card-3')
        const card4 = document.getElementById('card-4')
        const card5 = document.getElementById('card-5')
        const card6 = document.getElementById('card-6')
        const skillsSection = document.getElementById('skills')
        const options= {
        root: null,
        threshold: 0.25
    }
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting == true){
                card1.classList.add('fade-in-bottom')
                card2.classList.add('fade-in-bottom-d-1')
                card3.classList.add('fade-in-bottom-d-2')
                card4.classList.add('fade-in-bottom-d-3')
                card5.classList.add('fade-in-bottom-d-4')
                card6.classList.add('fade-in-bottom-d-5')
            }
        })
    }, options)
    observer.observe(skillsSection)
    })
</script>
<section id="skills">

<h1><span class="text-pink">console</span>.<span class="text-lblue">log</span><span class="text-ulblue">(</span><span class="text-green">'My Skills'</span><span class="text-ulblue">)</span>;</h1>

<div>
        <Card id={'card-1'} color1={'text-green'}  technology={'NodeJS'} img={'nodejs.png'}/>
        <Card id={'card-2'} color1={'text-purple'}  technology={'React'} img={'react.png'}/>
        <Card id={'card-3'} color1={'text-ulblue'}  technology={'MongoDB'} img={'mongo.png'}/>
        <Card id={'card-4'} color1={'text-lblue'}  technology={'ExpressJS'} img={'express.png'}/>
        <Card id={'card-5'} color1={'text-yellow'}  technology={'JavaScript'} img={'js.png'}/>
        <Card id={'card-6'} color1={'text-pink'}  technology={'HTML/CSS'} img={'htmlcss.png'} exc={'html-img'}/>
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