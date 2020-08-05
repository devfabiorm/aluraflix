import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    padding-top: 94px;
    background-color: var(--black);
    color: var(--white);
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    flex: 1;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function PageDefault({ children }) {

    return (
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}
export default PageDefault;