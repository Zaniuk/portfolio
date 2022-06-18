<script>
    export let project;
    export let linkGithub;
    export let linkDemo;
    export let img;
</script>

<div class="project">
    <h1>{project}</h1>
    <div id="project-window" class="bg-light">
        <img src='dots.svg' alt="">
        <span>Project</span>
    </div>
    <img src={img} alt="random">
    <div class="buttons">
        <a class="text-lblue" href={linkGithub} target="_blank">Github</a>
        <!-- <a class="text-green" href="...">About</a> -->
        <a class="text-pink" href={linkDemo} target="_blank">Demo</a>
    </div>
</div>
<style>
    .project{
        max-width: 400px;
        display: flex;
        flex-flow: column wrap;
        
    }
    img{
        width:100%;
        aspect-ratio: 1;
    }
    #project-window{
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        border-bottom: 1px solid #20212e;
        border-radius: .5rem .5rem 0 0;
    }
    #project-window img{
        all: unset;
        height: 20px;
    }
    #project-window span{
        font-size: .8rem;
        position: absolute;
        left: 40%;
    }
    .buttons{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
    }
    a{
        padding-top: .5rem;
        padding-bottom: .5rem;
        text-decoration: none;
    }
    
</style>