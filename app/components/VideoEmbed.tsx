"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from "./icons";

export default function VideoEmbed({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (!videoId) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 text-sm text-white/40 shadow-lg">
        Vídeo em breve
      </div>
    );
  }

  if (playing) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-lg">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Reproduzir vídeo: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-lg"
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        fill
        className="object-cover"
      />
      <span className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/25" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#f7931e] to-[#ffc700] shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
          <PlayIcon className="h-7 w-7 text-black sm:h-8 sm:w-8" />
        </span>
      </span>
    </button>
  );
}
