import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
    PostCardContainer,
    PostCardContent,
    PostCardHeader
} from "../styles"
import { issueProps } from '..';
import { Link } from 'react-router-dom';

interface postCardProps {
  issue: issueProps,
  userName: string,
  repoName: string,
}

export const PostCard = ({ issue, userName, repoName }: postCardProps) => {
  const formattedDate = formatDistanceToNow(issue.created_at, {
    addSuffix: true,
    locale: ptBR,
  });

  const checkTextLength = (text: string) => {
    return text.substring(0, 30) + '...';
  }
  
  return (
    <Link to={`/post/${issue.number}?user=${userName}&repo=${repoName}`}>
      <PostCardContainer>
          <PostCardHeader>
              <h2>{checkTextLength(issue.title)}</h2>
              <span>{formattedDate}</span>
          </PostCardHeader>
          <PostCardContent>
              <p>{issue.body}</p>
          </PostCardContent>
      </PostCardContainer>
    </Link>
  )
}
