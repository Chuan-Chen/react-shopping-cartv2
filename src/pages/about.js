import styled from "styled-components"
import contactImage from "../Icons/pexels-photo-3257811.jpeg"
import { useState } from "react";

import FB from "../Icons/icons8-facebook-50.png";
import Twitter from "../Icons/icons8-twitter-50.png"
import Instagram from "../Icons/icons8-instagram-50.png"

const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );

const validName = new RegExp(
    "(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})"
);

const PageLayout = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Martian+Mono:wght@200;400&display=swap');   
    width: 100%;
    display: grid;
    font-family: 'Martian Mono', monospace;

    @media (min-width: 1140px){
        grid-auto-flow: column;
        grid-template-columns: 1fr 2fr;
    }
    @media (max-width: 1140px){
        width: 100%;
        grid-template-rows: 1fr 1.5fr;
    }
`

const LeftWrapper = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
`

const RightWrapper = styled.div`
    display: grid;
    border: 1px solid #babab6;
    margin: 70px;
    @media(max-width: 800px){
        margin: 0px;
    }
`

const Image = styled.img`
    height: 80%;
    width: auto;
    object-fit: contain;
    align-self: center;
    justify-self: center;
    border-radius: 2px;
    @media(max-width: 500px){
        width: 100%;
        height: auto;
    }
`

const RightWrapperInner = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
    "header header"
    "bodyL bodyR"
    "bodyL bodyR"
    "bodyL bodyR"
    "bodyL bodyR";
    @media(max-width: 1140px){
        
        grid-template-areas:
        "header header"
        "bodyR bodyR"
        "bodyR bodyR"
        "bodyL bodyL"
        "bodyL bodyL";
    }
       
`

const Contact = styled.div`
    >* {
        display: grid;
        user-select: none;
        
        label{
            font-weight: bold;
        }
        input{
            height: 2rem;
            font-size: 1.5rem;
            background: none;
            border: none;
            outline: none;
            border-bottom: 1px solid black;
        }
        textarea{
            height: 10rem;
            background: none;
            outline: none;
            font-size: 1.5rem;
            resize: none;
            font-family: 'Martian Mono', monospace;
        }
    };
    button{
        height: 2rem;
        width: 7rem;
        background-color: #fcfbff;
        border: none;
        border-radius: 4px;
        font-size: 1.2em;
        display: grid;
        justify-content: center;
        font-family: 'Martian Mono', monospace;
        align-items: center;
        cursor: pointer;  
        justify-self: start;
        align-self: center;
        box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
        transition: background-color 0.3s linear;
        &:hover{
            box-shadow: 0px 15px 35px -5px rgba(23, 53, 87, 0.59);
            background: #1f202a;
            color: white;
            text-shadow: 0px 0px 10px white;
        }

    }
    grid-area: bodyL;
    justify-self: center;
    align-self: center;
    display: grid;
    gap: 20px;
;
`

const ContactForm = () => {

    const [validE, setValidE] = useState(false);
    const [validN, setValidN] = useState(false);

    return (
        <Contact>
            <div>
                <label>Full Name:</label>
                <input style={{borderBottom: `1px solid ${validN ? 'black' : 'red'}`}} onChange = {(e) => setValidN(validName.test(e.target.value))}></input>
            </div>
            <div>
                <label >E-mail:</label>
                <input style = {{borderBottom: `1px solid ${validE ? 'black' : 'red'}`}} type="email" onChange = {(e) => setValidE(validEmail.test(e.target.value))}></input>
            </div>
            <div>
                <label>Message:</label>
                <textarea></textarea>
            </div>
            <div style = {{display: 'grid', alignItems: 'center', justifyContent: 'center'}}><button>Submit</button></div>
            
        </Contact> 
        
    )
}

const ContactInfo = styled.div`
    display: grid;
    grid-area: bodyR;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;   
    >*{
        display: grid;
        
        t, e{
            
            font-size: 1.5rem;
            font-weight: bold;
        }

    }
    social{
        display: grid;
        grid-auto-flow: column;
        justify-content: space-evenly;
        align-items: center;
 
        img{
            user-select: none;
            height: 40px;
            width: 40px;
            border-radius: 10px;
            cursor: pointer;

            &:hover{
                box-shadow: 0px 15px 35px -5px rgba(23, 53, 87, 0.59);
                background: white;
                color: white;
                text-shadow: 0px 0px 10px white;
            }
        }
    }
    
`


export default function about(){

    return (
       <PageLayout>
            <LeftWrapper>
                <Image src = {contactImage}></Image>
            </LeftWrapper>
            <RightWrapper>
                <RightWrapperInner>
                    <div style = {{gridArea: "header", fontSize: '3rem', fontWeight: 'bold', display: 'grid', alignSelf:'center', justifySelf: 'center', borderBottom: '1px solid  #babab6'}}>  Contact Us </div> 
                    <ContactForm></ContactForm>
                    <ContactInfo>
                        <div>
                            <t>Based in</t>
                            <address>000 Unknown dr</address>
                            <address>Dryland US 00000-0000</address>
                        </div>
                        <div>
                            <e>Contact</e>
                            <e1>example@example.company.com</e1>
                            <e1>(000)000-0000</e1>
                        </div>
                        <social >
                            <a href = "https://facebook.com"><img src = {FB} alt = "FaceBook" draggable = "false"></img></a>
                            <a href = "https://twitter.com"><img src = {Twitter} alt = "Twitter" draggable = "false"></img></a>
                            <a href = "https://instagram.com"><img src = {Instagram} alt = "Instagram" draggable = "false"></img></a>
                        </social>
                        
                    </ContactInfo>
                </RightWrapperInner>
            </RightWrapper>

       </PageLayout>
    )
}