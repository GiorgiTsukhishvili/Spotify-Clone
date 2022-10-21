export interface TrackInterface {
  layout: string;
  type: string;
  key: string;
  title: string;
  subtitle: string;
  images: {
    background: string;
    coverart: string;
    coverarthq: string;
    joecolor: string;
  };
  share: {
    subject: string;
    text: string;
    href: string;
    image: string;
    twitter: string;
    html: string;
    avatar: string;
    snapchat: string;
  };
  hub: {
    type: string;
    image: string;
    actions: {
      name: string;
      type: string;
      id: string;
    }[];
    options: {
      caption: string;
      actions: {
        name: string;
        type: string;
        uri: string;
      }[];
      beacondata: {
        type: string;
        providername: string;
      };
      image: string;
      type: string;
      listcaption: string;
      overflowimage: string;
      colouroverflowimage: false;
      providername: string;
    }[];
    explicit: false;
    displayname: string;
  };
  sections: {
    type?: string;
    text?: string[];
    metapages?: {
      image?: string;
      caption?: string;
    }[];
    tabname?: string;
    metadata?: {
      title?: string;
      text?: string;
    }[];
    beacondata?: {
      lyricsid: string;
      providername: string;
      commontrackid: string;
    };
    footer?: string;
  }[];

  url: string;
  artists: {
    alias: string;
    id: string;
    adamid: string;
  }[];
  alias: string;
  isrc: string;
  genres: {
    primary: string;
  };
  urlparams?: {
    "{tracktitle}": string;
    "{trackartist}": string;
  };
  highlightsurls: {};
  albumadamid: string;
  trackadamid: string;
  releasedate: string;
}
