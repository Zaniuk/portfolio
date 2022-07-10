<script>
    import PostCard from "./PostCard/PostCard.svelte";
</script>
<div class="posts">
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
</div>



<style>
    .posts{
        margin: 1rem;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1rem;
    }
</style>