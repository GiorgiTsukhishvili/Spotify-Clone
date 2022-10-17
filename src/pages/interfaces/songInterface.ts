export interface SongInterface {
  layout: string;
  type: string;
  key: string;
  title: string;
  subtitle: string;
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
  images: {
    background: string;
    coverart: string;
    coverarthq: string;
    joecolor: string;
  };
  hub: {
    type: string;
    image: string;
    actions: {
      name: string;
      type: string;
      uri: string;
    }[];
    options: [
      {
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
        colouroverflowimage: boolean;
        providername: string;
      }
    ];
    explicit: boolean;
    displayname: string;
  };
  artists: {
    alias: string;
    id: string;
    adamid: string;
  }[];
  url: string;
  highlightsurls: {};
  properties: {};
}
