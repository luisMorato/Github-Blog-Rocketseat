import styled from "styled-components";
import { css } from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(4.5rem - 6rem);
    margin: 0 auto;
    padding: 0 2rem;
    padding-bottom: 14.5rem;

    width: 100%;
    max-width: calc(54rem + 4rem);
`;

export const ProfileContainer = styled.section`
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

export const ProfileWrapper = styled.section`
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

export const ProfileHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;

    h1 {
        line-height: 0;
        font-size: 1.5rem;
        font-weight: bold;

        @media (max-width: 540px) {
            font-size: 1rem;
        }
    }

    div {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;

        color: #3294F8;
        font-size: 0.75rem;
    }
`;

export const ProfileContent = styled.main`
    margin-bottom: 1.5rem;

    p {
        color: ${({ theme }) => theme.Text};
        line-height: 1.6;
        text-overflow: ellipsis;

        
    }
`;

export const ProfileFooter = styled.footer`
    display: flex;
    align-items: baseline;
    gap: 1.5rem;

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

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;

    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        button[type='submit'] {
            background-color: ${({ theme }) => theme.Input};
            border: 1px solid transparent;
            border-radius: 6px;

            display: flex;
            align-items: center;
            justify-content: center;
            align-self: flex-end;

            margin-top: -1rem;
            padding: 0.75rem 1rem;
            cursor: pointer;

            width: fit-content;

            &:disabled {
                cursor: not-allowed;
                opacity: 0.8;
            }
        }
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    label {
        font-size: 1.125rem;
        color: ${({ theme }) => theme.SubTitle};
    }

    span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.Span};
    }
`;

export const BaseInput = styled.input`
    background-color: ${({ theme }) => theme.Input};
    border: 1px solid #1C2F41;
    border-radius: 6px;
    padding: 1rem;
    font-size: 1rem;
    flex-grow: 1;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.8;
    }

    &.invalid {
        border: 1px solid ${({ theme }) => theme.InputError};
    }

    &::placeholder {
        color: ${({ theme }) => theme.Label};
    }
`;

interface homecontentProps {
    issuesLength: number
}

export const HomeContent = styled.main<homecontentProps>`
    ${({ issuesLength }) => {
        if(issuesLength > 0){
            return css`
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
            `;
        } else {
            return css`
                display: block;
            `;
        }
    }}

    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const PostCardContainer = styled.section`
    background-color: ${({ theme }) => theme.Post};
    border-radius: 10px;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    max-width: 26rem;
`;

export const PostCardHeader = styled.header`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;

    h2 {
        line-height: 1.6;
        font-size: 1.25rem;
    }

    span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.Span};
        white-space: nowrap;
    }

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }
`;

export const PostCardContent = styled.main`
    p {
        overflow: hidden;
        text-overflow: ellipsis;

        color: ${({ theme }) => theme.Text};
        font-size: 1rem;

        max-height: 7rem;
    }
`;

export const EmptyIssues = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.5);

    width: 100%;

    span {
        font-weight: bold;
        font-size: 1.5rem;
    }
`;