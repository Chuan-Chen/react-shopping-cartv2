import React from "react";
import styled from "styled-components"

const FooterStyle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap');
    font-family: 'Noto Sans Mono', monospace;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 100%;
    background-color: #1e1e1e;
    padding-top: .8rem;
    padding-bottom: .8rem;
    z-index: 5;
`;

const FooterA = styled.a`
    text-decoration: none;
    color: white;
    text-shadow: 0 0 10px white;
    &:hover {
        color: rgb(169, 169, 169)
    }
`;


export default class Footer extends React.Component{

    constructor(){
        super();
        this.date = new Date();
    }

    render(){
        return(
            <FooterStyle>
                <div>
                    Copyright © {this.date.getFullYear()} <FooterA href = "https://github.com/Chuan-Chen">Chuan Chen</FooterA>
                </div>
            </FooterStyle>
        )
    }
}