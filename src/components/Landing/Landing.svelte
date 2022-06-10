<script>
    import ReactWindow from './ReactWindow/ReactWindow.svelte'
    import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
</script>
<section use:scrollRef={'home'} >
    <h1>Welcome, $&#123;Visitor!&#125;</h1>
    <h1>Thank you for visiting my site</h1>
    <button>Run Welcome.js</button>
    <article>
        <ReactWindow/>
    </article>
</section>

<style>
    section{
        height: 100vh;
    }
</style>