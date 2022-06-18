<script>
    import Window from './Window/Window.svelte'
    
</script>
<section id="about">
    <h1 id="title" class="text-purple">About</h1>
    <div id="about-img">
        <img src="person.png" alt="person">
    </div>
    <div class="about-windows">
        <div class="window">
            <h1><span class="text-green">></span> <span class="text-lblue">tsc</span> <span class="text-pink">aBitOfMe</span>.<span class="text-lblue">ts</span></h1>
        <Window title={'aboutMe.ts'} text={"Mi camino en la tecnología empezó a los 4 años, cuando me regalaron una PC HP Pavilion 7910. Con esa máquina que me acompañó hasta llegar a mi adolescencia descubrí el internet y el mundo del hardware y de la programación, aprendiendo HTML, CSS y Python. Desde 2018 que trabajo freelance como soporte técnico de computadoras. En 2021 me propuse dedicarme de lleno a estudiar programación, algo que me apasiona  y me motiva día a día a seguir aprendiendo más y más, a día de hoy diría que mi lenguaje de dominio principal es JavaScript."}/>
        </div>
        
        <div class="window">
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