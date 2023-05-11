import { Styled, styled } from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <BgImage />
            </Content>
        </Container>
    );
};


/*=========================================================
=            using styled-compenents for Login            =
=========================================================*/


/* Every style related to Login component can be styled inside the js file only using styled- components */

const Container = styled.section`
    overflow: hidden;
    /* @media only screen and (max-width: 768px) {
        padding-right: 200rem;
    }

    @media only screen and (min-width: 480px) and (max-width: 768px) {
        padding-right: 10rem;
    }
    
    @media only screen and (max-width: 479px) {
        padding-right: 20rem;
    } 
    
    */

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(/images/login-background.jpg);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    
    /* z-index of -1 is added to make sure that it stays below the text/ section element */
    
    
    /* background-position, z-index not needed to render, just it has to absolute with position properties */
    
    

`


/*=====  End of using styled-compenents for Login  ======*/




export default Login;
