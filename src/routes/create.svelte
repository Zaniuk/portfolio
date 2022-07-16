<script>
    import 'bytemd/dist/index.css'
    import { Editor } from 'bytemd'
    import gfm from '@bytemd/plugin-gfm'
    import CryptoJS from 'crypto-js'
    const strToB64 = (str) => {
        var rawStr = str;
        var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
        var base64 = CryptoJS.enc.Base64.stringify(wordArray);
        return base64
    }


  let value
  const plugins = [
    gfm(),
    // Add more plugins here
  ]
  function handleChange(e) {
    value = e.detail.value
    return e.detail.value
  }
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
            const body = strToB64(value)
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
                if (title && desc && body && image) {
                    let data = await fetch('https://portfolio-backend-production-0477.up.railway.app/posts', options).then(res => res.json())
                    goto('/blog')
                } else {
                    throw error
                }

            } else {
                goto('/login')
            }
        })


    })
</script>

<h1>Create new post</h1>

<form>
    
    <label>
        <p id="p-title">Title</p>
        <input type="text" id="title">
    </label>
    <label>
        <p id="p-desc">Description</p>
        <input type="text" id="desc">
    </label>
    <label>
        <p id="p-image">Thumbnail</p>
        <input type="text" id="image">
    </label>
    <input type="submit" id="submit-post">
</form>
<div class="post-editor">
    <Editor value={value} {plugins} on:change={handleChange} />
</div>
<style>
    @import '../css/global.css';
    :root{
    --lblue: #3C91E6;
    --green: #75B150;
    --pink: #AE415C;
    --purple: #A78ADD;
    --yellow: #FFF500;
    --white: white;
    --ulblue: #7BCFCE;
    --bg-dark: #16161E;
    --bg-light: #1A1B26 ;
    --bg-window:rgba(217, 217, 217, .03);
}
h1{
    text-align: center;
}
form{
    box-sizing: border-box;
    margin: .4rem 1rem ; 
    display: flex;
    gap: 1rem;
}
label{
    width: 33%;
}
label input{
    box-sizing: border-box;
    width: 100%;
    padding: .5rem;
    background-color: rgb(27, 27, 27);
    border-radius: .2rem;
}
#submit-post{
    align-self: self-end;
    padding: .5rem;
    margin-left: auto;
    background-color: var(--bg-dark);
    border: solid 2px var(--purple);
    color: var(--purple);
    border-radius: .2rem;
}
#submit-post:hover{
    background-color: var(--purple);
    color: white;
}
#p-desc{
    color: var(--pink);
}
#desc{
    color: var(--pink);
    border: 2px solid var(--pink);
}
#p-image{
    color: var(--lblue);
}
#image{
    color: var(--lblue);
    border: 2px solid var(--lblue);
}
#p-title{
    color: var(--green);
}
#title{
    color: var(--lblue);
    border: 2px solid var(--green);
}

</style>