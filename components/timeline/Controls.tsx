"use client";

export default function Controls({ onPlay, onPause, onReverse, onReset, isPlaying }: any) {
  return (
    <div className="flex gap-4 mt-8">
      <button
        onClick={onPlay}
        disabled={isPlaying}
        className="px-6 py-3 bg-neon-pink/20 border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black transition rounded-lg disabled:opacity-50"
      >
        Play
      </button>

      <button
        onClick={onPause}
        disabled={!isPlaying}
        className="px-6 py-3 bg-neon-blue/20 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition rounded-lg disabled:opacity-50"
      >
        Pause
      </button>

      <button
        onClick={onReverse}
        disabled={isPlaying}
        className="px-6 py-3 bg-neon-green/20 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition rounded-lg disabled:opacity-50"
      >
        Reverse
      </button>

      <button
        onClick={onReset}
        className="px-6 py-3 bg-neon-yellow/20 border border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-black transition rounded-lg"
      >
        Reset
      </button>
    </div>
  );
}
