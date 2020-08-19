import React, {useState, useEffect} from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';
import api from '../../services/api';

import { Container } from './styles';

interface PokemonProfileParams {
  indice: string;
}

interface AbilityPokemon {
  name: string;
  url: string;
}

interface Profile {
  ability: AbilityPokemon;
  is_hidden: boolean;
  slot: number;
}

const ProfilePokemon: React.FC = () => {
  const [profile, setProfile] = useState<Profile[]>([]);
  const { params } = useRouteMatch<PokemonProfileParams>();

  const result = params.indice.split('');

  useEffect(() => {
    api.get(`/${result[1]}`).then(response => {
      const result = response.data.abilities;
      console.log(result);
      
      setProfile(result);
    });
  }, []);

  return (
    <Container>

      <Link to="/">
        <FiArrowLeftCircle size={100} color="#FECA1B"/>
      </Link>

      <div>
        {profile.map(info => (
          <h1 key={info.slot}>
            Ability: <span>{info.ability.name}</span>
          </h1>
        ))}
      </div>
    </Container>
  );
}

export default ProfilePokemon;