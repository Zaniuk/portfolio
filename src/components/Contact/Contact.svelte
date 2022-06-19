<section id="contact">
    <h1><span class="text-purple">></span> <span class="text-green">node</span> <span class="text-pink">contact</span>.<span class="text-yellow">js</span></h1>
    <form id="contactForm" action="https://formsubmit.co/023b700a72f3537aafd55f633b1e11ba" method="POST">
        <input type="text" name="_honey" style="display:none;"  >
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://portfolio-f01.pages.dev/sucess">
        <span>
            <b class="text-pink">Name</b>
            <input class="border-pink caret-pink"  type="text" name="Name" id="name-input" placeholder="Show me how much awsome your name is!!">
        </span>
        <span>
            <b class="text-green">Email</b>
            <input class="border-green caret-green"  type="email" name="Email" id="email-input" required placeholder="Put a beatiful email here...">
        </span>
        <span>
            <b class="text-lblue">Company (optional)</b>
            <input class="border-lblue caret-lblue"  type="text" name="Company" id="company-input" placeholder="Talking from a company? 👀">
        </span>
        <span>
            <b class="text-purple">Message</b>
            <textarea class="border-purple caret-purple" name="Message" id="message-input" cols="30" rows="10" required></textarea>
        </span>
        <div class="send-button">
            <input type="submit" id="sendButton" class="text-lblue border-lblue" value="Send">
        </div>
    </form>
</section>

<style>
    h1{
        text-align: center;
    }
    h1 span{
        display: inline;
    }
    b{
        font-weight: normal;
    }
    form{
        display: flex;
        flex-flow: column nowrap;
        /*margin: .5rem;*/
        
    }
    form span{
        display: flex;
        flex-flow: column nowrap;
        width: 95%;
        margin: 0 auto;
    }
    @media (min-width: 600px) {
        form span{
            width: 90%;
            margin: 0 auto;
        }
    }
    @media (min-width: 1000px) {
        form span{
            width: 900px;
            margin: 0 auto;
        }
    }
    input{
        color: white;
        background-color: #1A1B26;
        border-radius: .3rem;
        padding: 1rem 2rem;
    }
    textarea{
        color: white;
        resize: none;
        background-color: #1A1B26;
        border-radius: .3rem;
    }
    b{
        padding-top: .5rem;
        padding-bottom: .5rem;
    }
    .send-button{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }
    .send-button input{
        background-color: #1A1B26;
        padding: .5rem 2rem;
        font-size: 1.2rem;
        border-radius: .5rem;
        transition: 250ms ease-in-out;
    }
    .send-button input:hover{
        background-color: var(--lblue);
        color: white;
    }
</style>