import React from "react";
import styles from '../../assets/scss/svg/PlayButton.module.scss';

const PlayButton = props => {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 40 40"
      version="1.1"
      className={styles.play}
      onClick={props.onClick}
    >
      <g id="surface1">
        <path
          className={styles.play__path}
          d="M 7.398438 30.121094 C 7.398438 31.027344 7.785156 31.746094 8.558594 32.28125 C 8.988281 32.519531 9.441406 32.640625 9.921875 32.640625 C 10.292969 32.640625 10.667969 32.546875 11.039062 32.359375 L 31.238281 22.28125 C 31.640625 22.066406 31.972656 21.761719 32.238281 21.359375 C 32.507812 20.960938 32.625 20.507812 32.601562 20 C 32.574219 19.492188 32.453125 19.054688 32.238281 18.679688 C 32.027344 18.308594 31.691406 18 31.238281 17.761719 L 11.039062 7.679688 C 10.667969 7.492188 10.292969 7.398438 9.921875 7.398438 C 9.464844 7.398438 9.011719 7.519531 8.558594 7.761719 C 7.785156 8.265625 7.398438 8.988281 7.398438 9.921875 Z M 7.398438 30.121094 "
        />
      </g>
    </svg>
  );
};

export default PlayButton;
