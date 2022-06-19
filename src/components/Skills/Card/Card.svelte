<script>
    export let technology;
    export let color1;
    export let img;
    export let exc;
    export let id;
</script>
<article id={id}>
    <h1 class={color1}>{technology}</h1>
    <div class="img-wrapper bg-light">
        <img class={exc} src={img} alt="random">
    </div>
</article>
<style>
    h1{
        text-align: center;
        margin-top: .5rem;
        margin-bottom: .5rem;
    }

    article{
        box-sizing: border-box;
        padding-top: .5rem;
        padding-bottom: .5rem;
        padding-right: .2rem;
        padding-left: .2rem;
    }
    .img-wrapper{
        width: 240px;
        height: 240px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: .5rem;
        border-radius: .5rem;
    }
    .img-wrapper img{
        width: 90%;
        height: auto;
    }
</style>