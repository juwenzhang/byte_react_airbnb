import styled from 'styled-components';

export const LeftHeaderWrapper = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    //color: var(--primary-color);
    color: ${props => props.theme.colors.primaryColor};
    
    .imgContainer {
        margin: auto 30px;
        min-height: 50px;
        
        img {
            height: 60px;
            cursor: pointer;
        }
    }
`