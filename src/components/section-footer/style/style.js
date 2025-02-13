import styled from 'styled-components';

const SectionFooterWrapper = styled.div`
    margin-top: 20px;

    .section-footer {
        display: inline-flex;
        align-items: center;
        border-radius: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        
        .section-footer-rightArrow {
            font-size: 16px;
            margin-left: 10px;
        }

        &:hover {
            cursor: pointer;
        }
    }
`

export default SectionFooterWrapper;