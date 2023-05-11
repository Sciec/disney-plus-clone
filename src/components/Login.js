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
 display: flex;
`;

const Content = styled.div``;


/*=====  End of using styled-compenents for Login  ======*/




export default Login;
