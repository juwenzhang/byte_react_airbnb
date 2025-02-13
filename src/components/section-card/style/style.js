import styled from 'styled-components';

const SectionCardWrapper = styled.div`
    width: 100%;
    margin-left: -8px;

    .card {
        text-align: center;
        white-space: nowrap;
        color: #13110f;
        font-size: 16px;
        font-weight: 600;
        border: 1px solid #100d0d;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 0 8px;
        flex-basis: 120px;
        flex-shrink: 0;
        background-color: #468cbe;
        cursor: pointer;
    }

    .card.active {
        background-color: #b73434;
        color: white;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`

export default SectionCardWrapper;