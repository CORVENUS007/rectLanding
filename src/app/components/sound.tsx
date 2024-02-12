import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
interface SoundButtonProps {
  soundSrc: string; // Path to your sound file
  volume?: number; // Optional volume (0-1)
}

const SoundButton: React.FC<SoundButtonProps> = ({
  soundSrc,
  volume = 0.5,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Howl | null>(null);

  useEffect(() => {
    // Create a Howler instance when the component mounts
    const newSound = new Howl({
      src: [soundSrc], // Array for different file types or fallbacks
      autoplay: false, // Disable autoplay
      loop: false, // Disable looping by default
      volume: 1, // Set initial volume
    });
    setSound(newSound);

    // Clean up the Howler instance on unmount
    return () => {
      if (sound) {
        sound.unload();
      }
    };
  }, [soundSrc, volume]);

  const handlePlay = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button className="fixed left-4 bottom-6" onClick={handlePlay}>
      {isPlaying ? (
        <SpeakerWaveIcon className="h-[18px] hover:text-gray-500"></SpeakerWaveIcon>
      ) : (
        <SpeakerXMarkIcon className="h-[18px] hover:text-gray-500"></SpeakerXMarkIcon>
      )}
    </button>
  );
};

export default SoundButton;
