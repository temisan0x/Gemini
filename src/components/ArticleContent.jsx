import React from 'react';
import styled from 'styled-components';

const  Content = styled.div `
    padding-left:70px;
    padding-right:70px;
`

function ArticleContent() {
    return (
        <Content>
            <h2>Industry-leading security from day one</h2>
        </Content>
    )
}

export default ArticleContent