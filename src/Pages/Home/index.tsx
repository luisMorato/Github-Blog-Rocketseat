import {
  useEffect,
  useState
} from "react";
import {
  SubmitHandler,
  useForm
} from "react-hook-form";
import { z } from "zod";

import { Profile } from "./Components/Profile";

import {
  BaseInput,
  EmptyIssues,
  HomeContainer,
  HomeContent,
  HomeWrapper,
  InputWrapper,
} from "./styles";
import { PostCard } from "./Components/PostCard";
import { api } from "../../Lib/axios";

const SearchFormSchema = z.object({
  query: z.string().min(1).optional(),
  repo: z.string().min(1),
});

type searchFormProps = z.infer<typeof SearchFormSchema>

export interface userProps {
  avatar_url: string,
  followers: number,
  html_url: string,
  login: string,
  name: string,
}

export interface issueProps {
  title: string,
  body: string,
  number: number,
  created_at: string,
  repository_url: string,
}

export const Home = () => {
  const { 
    register,
    handleSubmit,
    formState: {
      isSubmitting,
      errors
    }
  } = useForm<searchFormProps>({
    defaultValues: {
      query: '',
      repo: ''
    }
  });

  const [user, setUser] = useState<userProps>();
  const [issues, setIssues] = useState<issueProps[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [repoName, setRepoName] = useState<string>('');

  useEffect(() => {
      const fetchUser = async () => {
          const response = await api.get('/users/luisMorato');
          const { data } = response;

          setUser(data);
      }

      fetchUser();
  }, []);

  const submitSearchQuery: SubmitHandler<searchFormProps> = async (data: searchFormProps) => {
    const { query, repo } = data;

    const url = `/search/issues?q=${query} repo:${user?.login}/${repo}`;
    const response = await api.get(url);

    const { items, total_count } = response.data;
    const { repository_url }: { repository_url: string } = items[0];

    const lastSlashIndex = repository_url.lastIndexOf('/');
    const slicedRepoName = repository_url.slice(lastSlashIndex + 1, repository_url.length);
    setRepoName(slicedRepoName);

    setTotalCount(total_count);
    setIssues(items);
  }
  
  return user && (
    <HomeContainer>
      <Profile 
        user={user}
      />
      <HomeWrapper>
        <form onSubmit={handleSubmit(submitSearchQuery)}>
          <InputWrapper>
            <label htmlFor='repo'>Repositório</label>
            <BaseInput
              id='repo'
              type='text'
              placeholder="Buscar Repositório"
              disabled={isSubmitting}
              className={errors['repo'] ? 'invalid' : ''}
              { ...register('repo', { required: true }) }
            />
          </InputWrapper>
          <InputWrapper>
            <div>
              <label htmlFor='query'>Publicações</label>
              <span>{totalCount > 0 ? `${totalCount} publicações` : "Nenhuma Publicação"}</span>
            </div>
            <BaseInput
              id='query'
              type='text'
              placeholder="Filtrar conteúdo"
              disabled={isSubmitting}
              className={errors['query'] ? 'invalid' : ''}
              { ...register('query') }
            />
          </InputWrapper>
          <button 
            type="submit"
            disabled={isSubmitting}
          >pesquisar
          </button>
        </form>
        <HomeContent
          issuesLength={issues.length} 
        >
            {issues.length > 0 ?
              issues.map((issue) => (
                <PostCard
                  key={issue.number}
                  issue={issue}
                  userName={user.login}
                  repoName={repoName}
                />
              ))
              : (
                <EmptyIssues>
                  <span>Nenhuma Publicação</span>
                </EmptyIssues>
              )
            }
        </HomeContent>
      </HomeWrapper>
    </HomeContainer>
  )
}
