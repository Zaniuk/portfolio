<script>
    export let date, title,img, desc, link
    const postDate = new Date()
    const postDateStr = `${postDate.getDate()}/${postDate.getMonth()}/${postDate.getFullYear()}`
</script>
<div class="post-card">
    
        <p class="date">{date}</p>
        <img src={img} alt="">
        <h1><a href={link}>{title}</a></h1>
        <p>{desc}.</p>
</div>

<style>
    a{
        text-decoration: none;
        color: unset;
    }
    img{
        aspect-ratio: 1.5 / 1;
        object-fit: cover;
        border-radius: .5rem;
    }
.post-card{
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
}
h1{
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 1;
    font-size: 1.3rem;
}
</style>