<script>
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation';





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
                body: `{"email":"${email.value}","password":"${password.value}"}`
            };
            const data = await fetch('https://portfolio-backend-production-0477.up.railway.app/login',
                options).then(data => data.json())
            return await data
        }
        submit.addEventListener('click', async (e) => {
            e.preventDefault()
            fetchData().then(data => {
                const token = data.token
                if(token){
                    sessionStorage.setItem('token', token)
                    goto('/create')
                }else{
                    console.error('error')
                }
            })
        })

    })
</script>

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