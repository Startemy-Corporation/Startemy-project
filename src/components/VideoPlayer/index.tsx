import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import { ClassesContext } from '../../context/ClassesContext';

interface iVdeoPlayerProps {
  url: string;
}

export const VideoPlayer = ({ url }: iVdeoPlayerProps) => {
  const { courseId, classId } = useParams();

  const videoRef = React.useRef<any | null>();
  const { calcRemaining, getDuration, getVideoTime, attCompletedClasses } =
    useContext(ClassesContext);

  const [player, setPlayer] = useState(false);

  useEffect(() => {
    if (player) {
      getVideoTime(videoRef.current.getCurrentTime());
      calcRemaining();
      getDuration(videoRef.current.getDuration());
    }
  }, [player]);

  return (
    <>
      <ReactPlayer
        url={url}
        ref={(el) => {
          videoRef.current = el;
          setPlayer(!!el);
        }}
        width='100%'
        config={{
          youtube: {
            playerVars: {
              showinfo: 1,
              controls: true,
            },
          },
        }}
        pip={true}
        onProgress={() => setPlayer(!player)}
        onEnded={() => attCompletedClasses(Number(courseId), Number(classId))}
      />
    </>
  );
};
