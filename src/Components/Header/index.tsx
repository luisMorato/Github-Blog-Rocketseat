import { HeaderContainer } from "./styles";

import GithubBlogLogo from '../../assets/Logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
        <img src={GithubBlogLogo} alt="Logo With GitHub Blog Write in it" />
    </HeaderContainer>
  )
}
