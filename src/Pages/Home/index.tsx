import {
  useEffect,
  useState
} from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Profile } from "./Components/Profile";

import {
  BaseInput,
  HomeContainer,
  HomeContent,
  HomeWrapper,
  InputWrapper,
} from "./styles";
import { PostCard } from "./Components/PostCard";
import { api } from "../../Lib/axios";

const publicationsFormSchema = z.object({
  publications: z.string().min(1),
  repo: z.string().min(1),
});

type publicationsFormProps = z.infer<typeof publicationsFormSchema>

export interface userProps {
  avatar_url: string,
  followers: number,
  html_url: string,
  login: string,
  name: string,
}

export const Home = () => {
  const { 
    register,
    handleSubmit,
    formState: {
      isSubmitting,
      errors
    }
   } = useForm<publicationsFormProps>({

  });

  const [user, setUser] = useState<userProps>();

  useEffect(() => {
      const fetchUser = async () => {
          const response = await api.get('/users/luisMorato');

          setUser(response.data);
      }

      fetchUser();
  }, []);

  const SubmitSearchQuery = async (data: publicationsFormProps) => {
    const { publications, repo } = data;
    const url = `/search/issues?q=${publications}repo:${repo}`;

    const response = await api.get(url);

    console.log(response);
  }
  
  return user && (
    <HomeContainer>
      <Profile 
        user={user}
      />
      <HomeWrapper>
        <form onSubmit={handleSubmit(SubmitSearchQuery)}>
          <InputWrapper>
            <label htmlFor='repo'>Repositório</label>
            <BaseInput
              id='repo'
              type='text'
              placeholder="Buscar Repositório"
              title="Pressione Enter Para Pesquisar"
              disabled={isSubmitting}
              className={`${errors['repo'] ? 'invalid' : ''}`}
              { ...register('repo', { required: true }) }
            />
          </InputWrapper>
          <InputWrapper>
            <div>
              <label htmlFor='publications'>Publicações</label>
              <span>6 publicações</span>
            </div>
            <BaseInput
              id='publications'
              type='text'
              placeholder="Buscar conteúdo"
              title="Pressione Enter Para Pesquisar"
              disabled={isSubmitting}
              className={`${errors['publications'] ? 'invalid' : ''}`}
              { ...register('publications', { required: true }) }
            />
          </InputWrapper>
        </form>
        <HomeContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <PostCard
                key={index}
              />
            ))}
        </HomeContent>
      </HomeWrapper>
    </HomeContainer>
  )
}
