<script>
    const postDate = new Date()
    export let fPostImg, fPostTitle, fPostDesc, fPostSlug;
    const postDateStr = `${postDate.getDate()}/${postDate.getMonth()}/${postDate.getFullYear()}`
    
</script>
<div class="featured-post">
    <img src={fPostImg} alt="Blank">
    <div class="post-info">
        <p class="date">{postDateStr}</p>
        <a href={fPostSlug}>
            <h1>{fPostTitle}</h1>
        </a>
        <p>{fPostDesc}</p>
    </div>
</div>
<style>
    
    .featured-post{
        width: 100%;
        display: flex;
        align-items: center;
    }
    h1, p{
        padding: 0 1rem;
        margin: 0;
    }
    img{
        aspect-ratio: 2 / 1.5;
        object-fit: cover;
        width: 300px;
    }
    @media screen and (max-width: 768px){
        .featured-post{
            flex-flow: column;
        }
    }
    a{
        all: unset;
    }
</style>