<script>
    import Window from './Window/Window.svelte'
    import { onMount } from 'svelte';
onMount(()=>{
        const window1 = document.getElementById('window-1')
        const window2 = document.getElementById('window-2')
        const aboutImg = document.getElementById('about-img')

        const aboutSection = document.getElementById('about')
        const options= {
        root: null,
        threshold: 0.2
    }
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting == true){
                aboutImg.classList.add('fade-in-bottom')
                window1.classList.add('fade-in-bottom-d-2')
                window2.classList.add('fade-in-bottom-d-4')
            }
        })
    }, options)
    observer.observe(aboutSection)
    })
</script>
<section id="about">
    <h1 id="title" class="text-purple">About</h1>
    <div id="about-img">
        <img src="person.png" alt="person">
    </div>
    <div class="about-windows">
        <div id="window-1" class="window">
            <h1><span class="text-green">></span> <span class="text-lblue">tsc</span> <span class="text-pink">aBitOfMe</span>.<span class="text-lblue">ts</span></h1>
            <Window title={'aboutMe.ts'} text={"Mi camino en la tecnología empezó a los 4 años, cuando me regalaron una PC HP Pavilion 7910. Con esa máquina que me acompañó hasta llegar a mi adolescencia descubrí el internet y el mundo del hardware y de la programación, aprendiendo HTML, CSS y Python. Desde 2018 que trabajo freelance como soporte técnico de computadoras. En 2021 me propuse dedicarme de lleno a estudiar programación, algo que me apasiona  y me motiva día a día a seguir aprendiendo más y más, a día de hoy diría que mi lenguaje de dominio principal es JavaScript."}/>
        </div>
        
        <div id="window-2" class="window">
            <h1><span class="text-yellow">></span> <span class="text-green">python</span> <span class="text-pink">whyMe</span>.<span class="text-green">py</span></h1>
            <Window title={'whyMe.py'} text={"Soy una persona muy autodidacta, que no le cuesta preguntar o ayudar a sus compañeros. Me considero un muy buen compañero de equipo, suelo tomar mucho las iniciativas, aprendo rápido, tengo conocimientos de SCRUM y KANBAN. Me apasiona estar costantemente aprendiendo y resolviendo problemas y todo lo que hago lo hago con la pasión y la ambición de crecer como persona y como profesional."}/>
        </div>
    </div>
</section>

<style>
    #title{
        margin-top: 5rem;
    }
    section{
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
    .about-windows{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
    .window{
        padding: .5rem;
    }
    #about-img{
        text-align: center;
    }
    img{
        width: 50%;
    }
</style>