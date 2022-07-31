import { Link } from 'react-router-dom';

import { Background } from '@/app/components/Home/Background';
import { Greeting } from '@/app/components/Home/Greeting';

import './index.scss';

export const Home: React.FC = () => {

  return (
    <section className='home'>
      <Background />
      <Greeting  />
      <Link className='home__contact-me' to={'/contact'} datatype={'Contact Me'}>
      </Link>
    </section>
  )
}
