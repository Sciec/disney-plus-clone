import { Styled, styled } from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>Content</Content>
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


/*=====  End of using styled-compenents for Login  ======*/




export default Login;
