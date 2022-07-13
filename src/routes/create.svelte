<script>

    import {
        onMount
    } from "svelte";
    import {
        goto
    } from '$app/navigation';

    onMount(() => {
       
        const select = selector => document.querySelector(selector)
        const submit = select('#submit-post')
        const token = sessionStorage.getItem('token')
        submit.addEventListener('click', async(e) => {
            
            e.preventDefault()
            const title = select('#title').value
            const desc = select('#desc').value
            const body = select('#body').value
            const image = select('#image').value
            const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'auth-token': `${sessionStorage.getItem('token')}`
            },
            body: `{"title":"${title}","desc":"${desc}","body":"${body}","tags":["Featured","Recommended"],"img":"${image}"}`
            };
            if (token) {
                if (title && desc && body && tags && image) {
                    let data = await fetch('https://portfolio-backend-production-0477.up.railway.app/posts', options).then(res => res.json())
                    return data
                } else {
                    throw error
                }

            } else {
                goto('/login')
            }
        })


    })
</script>

<h1>create</h1>

<form>
    <label>
        Title
        <input type="text" id="title">
    </label>
    <label>
        Description
        <input type="text" id="desc">
    </label>
    <label>
        Post
        <input type="text" id="body">
    </label>
    <label>
        Tags
        <input type="text" id="tags">
    </label>
    <label>
        Image
        <input type="text" id="image">
    </label>
    <input type="submit" id="submit-post">
</form>

<style>
    @import '../css/global.css';
</style>