<script>
    import {
        onMount
    } from 'svelte'




    onMount(() => {
        let submit = document.getElementById('submit')
        let email = document.getElementById('email')
        let password = document.getElementById('password')
        submit.addEventListener('click', (e) => {
            e.preventDefault()
            if (email.value === '' || password.value === '') {
                console.error('Error: fields are not valid')
                return 0
            }
            async function enter() {
                const body = `{"email":"${email.value},"password":"${password.value}"}`
                let options = {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: body
                };
                const login = fetch(
                        'https://portfoliobackendapp.herokuapp.com/login', options)
                    .then(res => res.text())
                    .then(res => {
                        return res
                    })
                try {
                    console.log(await login)
                } catch (error) {
                    console.error(error)
                }
                // console.log(document.cookie)
                // document.cookie = '{"email":"geroza49@gmail.com","password":"callofdutymw3"}'
            }
            enter()
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