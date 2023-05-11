import styled from 'styled-components'

const Header = (props) => {
    return(
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney-logo" />
            </Logo> 

        </Nav>
    )
}


/*==========================================================
=            using styled-compenents for Header            =
===========================================================*/

const Nav = styled.nav`
    position: fixed;
    
    /* hardcode the positions */
    top: 0;
    left: 0;
    right: 0;
    /* ======================= */
    
    height: 70px;
    background-color: #090b13;
    opacity: 0.7;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;

    letter-spacing: 16px;
    z-index: 3;


`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    opacity: 1;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    
    img {
        display: block;
        width: 100%;
    }
    
`;



/*=====  End of using styled-compenents for Header  ======*/



export default Header;
