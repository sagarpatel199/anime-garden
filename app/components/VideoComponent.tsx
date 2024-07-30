import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { VideoSource } from "../types/videoInterface";

interface VideoComponentProps {
  videoSources: VideoSource[];
}

const VideoComponent: React.FC<VideoComponentProps> = ({ videoSources }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSource, setCurrentSource] = useState<string>(videoSources[0]?.url || "");

  useEffect(() => {
    let hls: Hls | null = null;
    const videoElement = videoRef.current;

    if (currentSource && videoElement) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(currentSource);
        hls.attachMedia(videoElement);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoElement.play();
        });
      } else if (
        videoElement.canPlayType("application/vnd.apple.mpegurl")
      ) {
        videoElement.src = currentSource;
        videoElement.addEventListener("loadedmetadata", () => {
          videoElement.play();
        });
      }

      return () => {
        if (hls) {
          hls.destroy();
        }
      };
    }
  }, [currentSource, videoSources]);

  return (
    <div>
      <video ref={videoRef} controls style={{ width: "100%", height: "auto" }} />
      <div>
        {videoSources.map((source) => (
          <button key={source.quality} onClick={() => setCurrentSource(source.url)}>
            {source.quality}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
