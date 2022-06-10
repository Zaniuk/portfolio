<script>
    function toggleMenu() {
        let list = document.getElementById("list")
        list.classList.toggle('hide')
    }
</script>

<header>
    <nav>
        <button on:click={toggleMenu}>A</button>
        <div id="list" class="hide">
            <ul>
                <a class="text-lblue" on:click={toggleMenu} href="#home"><li>Home</li></a>
                <a class="text-green" on:click={toggleMenu} href="#skills"><li>Skills</li></a>
                <a class="text-pink" on:click={toggleMenu} href="#projects"><li>Projects</li></a>
                <a class="text-purple" on:click={toggleMenu} href="#about"><li>About Me</li></a>
                <a class="text-pink" on:click={toggleMenu} href="#contact"><li>Contact</li></a>
            </ul>
        </div>
    </nav>
</header>

<style>
    header{
        position: sticky;
        min-height: 3rem;
        top: 0;
        background-color:black;
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