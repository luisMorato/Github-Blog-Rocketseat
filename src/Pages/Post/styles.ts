import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 2rem;
    padding-bottom: 14.5rem;

    width: 100%;
    max-width: calc(54rem + 4rem);
`;

export const PostInfoContainer = styled.section`
    background-color: ${({ theme }) => theme.Profile};
    display: flex;
    align-items: center;
    gap: 2rem;

    border-radius: 10px;
    box-shadow: 0 2px 28px rgba(0, 0, 0, 0.25);
    padding: 2rem 2.25rem;
    transform: translateY(-6rem);
    overflow: hidden;

    width: 100%;

    img {
        height: 9.25rem;
        width: 9.25rem;
        border-radius: 8px;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        padding: 2rem 0;
    }
`;

export const PostInfoWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 1rem;
    flex-grow: 1;

    &>div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const PostInfoHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    margin-bottom: 1rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        color: #3294F8;
        font-size: 0.75rem;
    }
`;

export const PostInfoTitle = styled.h1`
    line-height: 0;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.75rem;
    word-wrap: break-word;
    white-space: pre-wrap;

    @media (max-width: 540px) {
        font-size: 1rem;
    }
`;

export const PostInfoContent = styled.main`
    margin-bottom: 1.5rem;

    p {
        color: ${({ theme }) => theme.Text};
        line-height: 1.6;
        text-overflow: ellipsis;
    }
`;

export const PostInfoFooter = styled.footer`
    display: flex;
    align-items: baseline;
    gap: 2rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        span {
            color: ${({ theme }) => theme.SubTitle};
            white-space: nowrap;
        }

        svg {
            color: ${({ theme }) => theme.Label};
        }
    }

    @media (max-width: 540px) {
        flex-wrap: wrap;
    }
`;



export const PostContent = styled.main`
    p {
        max-width: 50rem;
        line-height: 1.6;
    }

    div {
        background-color: ${({ theme }) => theme.Post};
        border-radius: 2px;
        padding: 0 1rem 1rem 1rem;
    }
`;