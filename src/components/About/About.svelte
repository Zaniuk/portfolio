<script>
    import AboutWindow from './AboutWindow/AboutWindow.svelte'
    import { scrollRef} from 'svelte-scrolling'
</script>
<section use:scrollRef={'about'}>
    <h1>> tsc aboutMe.ts</h1>
    <AboutWindow/>
</section>