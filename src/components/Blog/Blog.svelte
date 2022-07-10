<script>
    import FeaturedPost from "./FeaturedPost/FeaturedPost.svelte";
    import Posts from "./Posts/Posts.svelte";
</script>

<div id="blog">
    <h1>Zaniuk's Blog</h1>
    <FeaturedPost fPostTitle="An incredible post" fPostImg="https://picsum.photos/200" fPostDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
    <Posts/>
</div>

<style>
    #blog{
        margin: 0 auto;
        max-width: 900px;
    }
</style>