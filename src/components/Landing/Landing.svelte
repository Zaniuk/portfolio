<script>
    import ReactWindow from './ReactWindow/ReactWindow.svelte'
    import 'animate.css'
</script>

<section id="home">

    <h1 ><span class="text-lblue">Welcome,</span><span class="text-pink">$&#123;</span><span class="text-lblue">'</span><span class="text-green">Visitor!</span><span class="text-lblue">'</span><span class="text-pink">&#125;</span></h1>
    <h1><span class="text-pink">Thank</span> <span class="text-ulblue">you</span> <span class="text-pink">for</span> <span class="text-lblue">visiting </span><span class="text-green">my site</span></h1>
    <button >Run Welcome.js</button>
    <div>
        
        <article class="bg-light">
            <div id="react-window" class="bg-window">
                <img src="dots.svg" alt="aa">
                <span>App.jsx</span>
            </div>
            <ReactWindow/>
        </article>
    </div>
    
</section>

<style>
    h1{
        padding-top: .5rem;
        padding-bottom: .5rem;
        margin: 0;
    }
    section{
        height: 100vh;
    }
    #home{
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
    }
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
        box-sizing: border-box;
        width: 380px;
        display: inline-block;
        border-radius: 8px;
    }
    @media (max-width: 375px) {
        article{
            font-size: .7rem;
            width: 95vw;
        }
    }
    @media (max-width: 310) {
        article{
            font-size: .55rem;
            width: 95vw;
        }
    }
</style>