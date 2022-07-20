<script>
    import FeaturedPost from "./FeaturedPost/FeaturedPost.svelte";
    import Posts from "./Posts/Posts.svelte";

    const postsList = fetch('https://portfolio-backend-production-0477.up.railway.app/posts')
        .then(response => response.json())
        .then(response => {
            return response[0]
        })
        .catch(err => console.error(err));
</script>

<div id="blog">
    <h1>Zaniuk's Blog</h1>
    {#await postsList then post}
    
        <FeaturedPost fPostTitle={post.title} fPostImg={post.img} fPostDesc={post.desc} fPostSlug={"blog/"+post.slug}/>    
    {/await}
    
    <Posts/>
</div>

<style>
    #blog{
        margin: 0 auto;
        max-width: 900px;
    }
    
</style>