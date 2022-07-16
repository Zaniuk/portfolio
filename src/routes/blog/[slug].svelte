<script>
    import Navbar from '../../components/Blog/Navbar/Navbar.svelte'
    import { page } from '$app/stores';
    import CryptoJS from 'crypto-js'
    const b64ToStr = (str) => {
        var parsedWordArray = CryptoJS.enc.Base64.parse(str);
        var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
        return parsedStr
    }
    let slug = $page.params.slug
    import { Viewer } from 'bytemd'
    import gfm from '@bytemd/plugin-gfm'
    const postReq = fetch(`https://portfolio-backend-production-0477.up.railway.app/posts/${slug}`)
        .then(response => response.json())
        .then(response => {
            const {title, desc, body, img} = response[0]
            const parsedBody = b64ToStr(body);
            const post = {
                title: title,
                desc: desc,
                body: parsedBody,
                img: img
            }
            return post
        })
        .catch(err => console.error(err));
  const plugins = [
    gfm(),
    // Add more plugins here
  ]

    

    
</script>
<Navbar/>
{#await postReq then post }
    <div class="container">
        <Viewer value={post.body} />    
    </div>
    
{/await}

<style>
    @import '../../css/global.css';
    
</style>