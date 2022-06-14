<script>
    export let text;
    export let title;
</script>

    <div>
        
        <article class="bg-light">
            <div id="react-window" class="bg-window">
                <img src="dots.svg" alt="aa">
                <span>{title}</span>
            </div>
            <p>
                {text}
            </p>            
        </article>
    </div>
    

<style>
    article img{
        height: 24px;
    }
    #react-window{
        display: flex;
        text-align: center;
        border-radius: 8px 8px 0px 0px;
    }
    #react-window span{
        margin: 0 auto;
    }
    article{
        width: 380px;
        display: inline-block;
        border-radius: 8px;
        height: 300px;
    }
    @media (max-width: 375px) {
        article{
            font-size: 1rem;
            width: 100%;
        }
    }
    @media (max-width: 310) {
        article{
            font-size: .9rem;
            width: 100%;
        }
    }
</style>