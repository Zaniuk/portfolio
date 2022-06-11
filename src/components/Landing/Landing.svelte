<script>
    import ReactWindow from './ReactWindow/ReactWindow.svelte'
</script>

<section id="home">

    <h1>Welcome, $&#123;Visitor!&#125;</h1>
    <h1>Thank you for visiting my site</h1>
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
    section{
        height: 100vh;
    }
    article img{
        height: 24px;
    }
    #react-window{
        display: flex;
        text-align: center;
    }
    #react-window span{
        margin: 0 auto;
    }
    article{
        
        display: inline-block;
    }
</style>