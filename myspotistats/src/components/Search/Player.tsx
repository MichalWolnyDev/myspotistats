import useAudio from '../../hooks/use-audio'
import PlayButton from '../Svg/PlayButton';

interface Url {
  url: string
}

const Player = ({url}: Url) => {
  const [playing, toggle] = useAudio(url);


  return (
    <PlayButton onClick={toggle} isPlaying={playing}/>
  )
}

export default Player