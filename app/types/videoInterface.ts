export interface VideoSource {
	url: string;
	isM3U8: boolean;
	quality: string;
  }
  
export interface VideoComponentProps {
	videoSources: VideoSource[];
  }