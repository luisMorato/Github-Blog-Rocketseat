import {
  useEffect,
  useState
} from "react";
import {
  Link,
  useParams
} from "react-router-dom"
import {
  FaCalendarDay,
  FaComment,
  FaGithub
} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { api } from "../../Lib/axios";

import { issueProps } from "../Home";

import {
  PostContainer,
  PostContent,
  PostInfoContainer,
  PostInfoFooter,
  PostInfoHeader,
  PostInfoTitle,
  PostInfoWrapper,
} from "./styles";

interface extendedIssueProps extends issueProps {
  userName: string,
  comments: number
}

export const Post = () => {
  const currentUrl = new URL(String(window.location));
  const { postId } = useParams();

  const [issue, setIssue] = useState<extendedIssueProps>();

  const userName = currentUrl.searchParams.get('user') ?? '';
  const repo = currentUrl.searchParams.get('repo') ?? '';

  const formatIssueBodyText = () => {
    const formattedText = issue?.body
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/```\n*(.*?)```/gs, '<div><code>$1</code></div>')
      .replace(/\n/g, '<br />');

    return formattedText && (
      <p dangerouslySetInnerHTML={{__html: formattedText}}></p>
    )
  };

  useEffect(() => {
    const fetchIssue = async () => {
      const url = `/repos/${userName}/${repo}/issues/${postId}`;
      const response = await api.get(url);

      console.log(response)

      const { data } = response;
      setIssue({...data, userName: data.user.login});
    }

    fetchIssue();
  }, [postId, userName, repo]);

  const formattedDate = issue && formatDistanceToNow(issue.created_at, {
    addSuffix: true,
    locale: ptBR
  });
  
  return issue && (
    <PostContainer>
      <PostInfoContainer>
          <PostInfoWrapper>
            <PostInfoHeader>
              <Link to={'/'} rel="norefferer">
                <div>
                  <IoIosArrowBack size={14} />
                  <span>VOLTAR</span>
                </div>
              </Link>
              <Link to={'#'} target="_Blank" rel="norefferer">
                <div>
                    <span>VER NO GITHUB</span>
                    <FaArrowUpRightFromSquare size={12} />
                </div>
              </Link>
            </PostInfoHeader>
            <PostInfoTitle>{issue.title}</PostInfoTitle>
            <PostInfoFooter>
                <div>
                    <FaGithub size={18} />
                    <span>{issue.userName}</span>
                </div>
                <div>
                    <FaCalendarDay size={18} />
                    <span>{formattedDate}</span>
                </div>
                <div>
                    <FaComment size={18} />
                    <span>{issue.comments} comentários</span>
                </div>
            </PostInfoFooter>
          </PostInfoWrapper>
      </PostInfoContainer>
      <PostContent>
        <>{formatIssueBodyText()}</>
      </PostContent>
    </PostContainer>
  )
}
