import styled from "styled-components"

const EntireFilterWrapper = styled.div`
    display: flex;
    align-items: center;
    height: auto;
    padding: 20px 16px 10px;
    
    margin-bottom: 20px;
    background: #f4f8fa;

    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 80px;

    border-bottom: 1px solid #b2adad;

    .entire-filter {
        display: flex;
        flex-shrink: 0;

        .entire-filter-card {
            margin: 0 4px 0 8px;
            padding: 6px 12px;
            border: 1px solid #dce0e0;
            border-radius: 4px;
            color: #484848;
            cursor: pointer;

            &.active {
                background: #008489;
                border: 1px solid #008499;
                color: #ffffff;
            }
        }
    }
`

export default EntireFilterWrapper