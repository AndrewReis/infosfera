import React,{ useState, FormEvent } from 'react';
import api from '../../services/api';
import { Container, Main } from './styles';

interface Anime{
    results: [
        {
            mal_id: number;
            title: string;
            episodes: number;
            image_url: string;
            type: string;
            synopsis: string;
            score: number
        }
    ]

}

const Landing: React.FC = () => {

    const [ anime, setAnime ] = useState<Anime | null>(null);
    const [ query, setQuery ] = useState('');

    async function handleQueryAnime(event:FormEvent ){
        event.preventDefault();

        try {

            const response = await api.get<Anime>(`/search/anime?q=${query}&page=1`);
            const { results } =  response.data;
    
            setAnime({ results: results  });
            setQuery('');            
        } catch (error) {
            alert('Anime não localizado');
        }
    }

    return(
        <Container>
            <header>
                <form onSubmit={handleQueryAnime}>
                    <input
                        type="text"
                        placeholder="Digite o nome da Obra"
                        value={query}
                        onChange={ e => setQuery(e.target.value) }    
                    />
                    <button type="submit">Pesquisar</button>
                </form>
            </header>
            <Main>
                {
                   anime?.results.map(anime => (
                        <div key={anime.mal_id} >
                            <div>
                                <h1> {anime.title} </h1>
                                <span> <strong> {anime.type} </strong></span>  
                            </div>
                            <img src={anime.image_url} alt={anime.title}/>
                            <p>
                                {anime.synopsis}
                            </p>
                            <div>
                                <label> score: <strong> {anime.score} </strong> </label>
                                <label> episodio: <strong> {anime.episodes} </strong> </label>
                            </div>
                        </div>
                   ))
                }
            </Main>
        </Container>
    );
}

export default Landing;