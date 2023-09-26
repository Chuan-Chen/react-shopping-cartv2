import styled from "styled-components"
import contactImage from "../Icons/pexels-photo-3257811.jpeg"


const PageLayout = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-column: 1fr 1fr;

    @media (max-width: 800px){
        grid-auto-flow: row;
        grid-template-row: 1fr 1fr;
    }
`

const LeftWrapper = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
`

const RightWrapper = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
`

const Image = styled.img`
    height: 80%;
    width: auto;
    object-fit: contain;
    align-self: center;
    justify-self: center;
`

const RightWrapperInner = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
`


export default function about(){

    return (
       <PageLayout>
            <LeftWrapper>
                <Image src = {contactImage}></Image>
            </LeftWrapper>
            <RightWrapper>
                <RightWrapperInner>

                </RightWrapperInner>
            </RightWrapper>

       </PageLayout>
    )
}