import styled from 'styled-components';

export const CenterHeaderWrapper = styled.div`
    color: orange;
    //width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 50%;
    margin: auto 0;
    border-radius: 10px;
    border: 1px solid #d5c29e;

    .text {
        margin-left: 10px;
        font-size: 16px;
    }

    .icon {
        color: #69655e;
        width: 15px;
        height: 15px;
        line-height: 15px;
        margin-right: 20px;
    }

    transition: all 0.5s ease;

    &:hover {
        box-shadow: 0 0 10px 1px ${props => props.theme.colors.primaryColor};
    }
`