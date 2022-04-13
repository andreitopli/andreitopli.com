import React, { CSSProperties, useEffect, useRef, useState } from 'react';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  placeholderStyle?: CSSProperties;
};

export const ImagePlaceHolder: React.FC<Props> = ({
  onLoad = () => {},
  style,
  placeholderStyle,
  ...imgProps
}) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  // This is needed because nextjs loads images from cache
  //  and they don't trigger the onload
  useEffect(() => {
    if (imageRef?.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      {!loaded && <div style={placeholderStyle} />}
      <img
        ref={imageRef}
        {...imgProps}
        style={loaded ? style : { display: 'none' }}
        onLoad={(e) => {
          setLoaded(true);
          onLoad(e);
        }}
      />
    </>
  );
};
