<script>
    const postDate = new Date()
    const postDateStr = `${postDate.getDate()}/${postDate.getMonth()}/${postDate.getFullYear()}`
</script>
<div class="post-card">
    <p class="date">{postDateStr}</p>
    <img src="https://picsum.photos/200" alt="">
    <h1>An Amazing Article</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos quam molestiae nulla.</p>
</div>

<style>
    img{
        aspect-ratio: 1.5 / 1;
        object-fit: cover;
        border-radius: .5rem;
    }
.post-card{
    display: flex;
    flex-flow: column nowrap;
}
h1{
    font-size: 1.3rem;
}
</style>