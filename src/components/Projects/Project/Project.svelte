<script>
    export let project;
    export let linkGithub;
</script>

<div class="project">
    <h1>{project}</h1>
    <img src="https://i.picsum.photos/id/356/200/200.jpg?hmac=Pd7TXMbO4gSTwhtmub1DcSo1vPpeCVRsuY_BRE_llmU" alt="random">
    <div class="buttons">
        <a class="text-lblue" href={linkGithub} target="_blank">Github</a>
        <a class="text-green" href="...">About</a>
        <a class="text-pink" href="...">Demo</a>
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