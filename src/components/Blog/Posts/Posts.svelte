<script>
    function createDate(date){
        let fDate = new Date(date)
        return `${fDate.getDate()}/${fDate.getMonth()+1}/${fDate.getFullYear()}`
    }
    import PostCard from "./PostCard/PostCard.svelte";
    const postsList = fetch('https://portfolio-backend-production-0477.up.railway.app/posts')
        .then(response => response.json())
        .then(response => {
            return response
        })
        .catch(err => console.error(err));
</script>

<div class="posts">
    {#await postsList then posts}
        {#each posts as post }
            <PostCard date={createDate(post.createdAt)} title={post.title} img={post.img} desc={post.body} />
        {/each}
    {/await}
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