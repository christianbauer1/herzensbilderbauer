interface HeadlineProps {
  h2?: string;
  title: string;
  description?: any;
  className?: string;
  h2Ash1?: boolean;
}

interface VideoButton {
  videoUrl: string;
  videoTitle: string;
  gifUrl?: string;
  gifAlt?: string;
  className?: string;
  showPlayButton?: boolean;
}

interface Heading {
  hTag: string;
  title: string;
  description?: React.ReactNode;
}
