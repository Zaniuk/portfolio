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
        <p id="p-email">Email</p>
        <input id="email" type="email" required>
    </label>

    <label>
        <p id="p-pass">Password</p>
        <input id="password" type="password" required>
    </label>
    <label>
        <input id="submit" type="submit" value="Login">
    </label>
</form>

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
    label {
        display: block;
    }
    #p-email{
        color: var(--lblue);
    }
    #p-pass{
        color: var(--pink);
    }
    #email{
        padding: .5rem;
        width: 280px;
        border: 2px solid var(--lblue);
        color: var(--lblue);
        background-color: var(--bg-light);
        border-radius: .3rem;
        transition: 100ms ease-in-out
    }
    #password{
        padding: .5rem;
        width: 280px;
        border: 2px solid var(--pink);
        color: var(--pink);
        background-color: var(--bg-light);
        border-radius: .3rem;
        transition: 100ms ease-in-out
    }
    #submit{
        background-color: var(--bg-light);
        color: var(--purple);
        border: 2px solid var(--purple);
        padding: .5rem 1rem;
        margin: 1rem;
        border-radius: .3rem;
        transition: 250ms ease-in-out;
    }
    #submit:hover, #submit:focus{
        background-color: var(--purple);
        color: white;
    }
    form{
        margin-top: 20vh;
        display: flex;
        flex-flow: column;
        align-items: center;
    }
</style>