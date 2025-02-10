import styled from "styled-components"

const SectionCardsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    padding-bottom: 20px;
    border-bottom: 1px solid #4b4949;
    
    .section-cards {
        width: 100%;
        height: 100%;
        line-height: 100%;
        position: relative;
        
        .section-cards-right, .section-cards-left {
            position: absolute;
            top: 0;
            bottom: 0;
        }

        .section-cards-left {
            left: 0;
        }

        .section-cards-right {
            right: 0;
        }
    }
`

export default SectionCardsWrapper