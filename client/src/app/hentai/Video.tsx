import React from "react";

const Video = ({ src, name }: { src: string; name: string }) => {
  return (
    <div className="z-50 w-[300px] h-auto mt-[150px]">
      <p className="capitalize text-center text-xl text-black break-words h-[60px]">
        {name}
      </p>
      <iframe src={src} className="w-full h-[300px] " allowFullScreen={true} />
    </div>
  );
};

export default Video;
