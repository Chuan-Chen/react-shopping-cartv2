import styled from "styled-components"
export default function error(){
    const Page = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
`

    return(
        <Page>
            404 Error
        </Page>
            
        
    )
}