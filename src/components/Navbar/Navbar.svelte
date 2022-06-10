<script>
    function toggleMenu() {
        let list = document.getElementById("list")
        list.classList.toggle('hide')
    }
    import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
</script>

<header>
    <nav>
        <button on:click={toggleMenu}>A</button>
        <div id="list" class="hide">
            <ul>
                <li on:click={toggleMenu} use:scrollTo={'home'}>Home</li>
                <li on:click={toggleMenu} use:scrollTo={'skills'}>Skills</li>
                <li on:click={toggleMenu} use:scrollTo={'projects'}>Projects</li>
                <li on:click={toggleMenu} use:scrollTo={'about'}>About Me</li>
                <li on:click={toggleMenu} use:scrollTo={'contact'}>Contact</li>
            </ul>
        </div>
    </nav>
</header>

<style>
    header{
        position: sticky;
        top: .5rem;
        background-color:white;
    }
    nav{
        display: flex;
        flex-direction: column;
    }
    button{
        align-self: flex-end;
    }
    .hide{
        display: none;
    }
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    ul li{
        list-style-type: none;
        font-size: 1.5em;
        padding-bottom: 6rem;
    }
    /* @media screen and (min-width:768px){

    } */
</style>