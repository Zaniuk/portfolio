<script>
    import {
        onMount
    } from 'svelte'




    onMount(() => {

        let submit = document.getElementById('submit')
        let email = document.getElementById('email')
        let password = document.getElementById('password')
        async function fetchData() {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: '{"email":"geroza49@gmail.com","password":"callofdutymw3"}'
            };
            const data = await fetch('https://portfolio-backend-production-0477.up.railway.app/login',
                options)
            return await data.json()
        }
        submit.addEventListener('click', async () => {
            console.log(await fetchData())
        })

    })
</script>
<!-- {#await login then token}
    {console.log(token)}
{/await} -->
<form>
    <label>
        Email
        <input id="email" type="email" required>
    </label>

    <label>
        Password
        <input id="password" type="password" required>
    </label>
    <label>
        <input id="submit" type="submit" value="Login">
    </label>
</form>
<h1>Hola login</h1>

<style>
    label {
        display: block;
    }
</style>