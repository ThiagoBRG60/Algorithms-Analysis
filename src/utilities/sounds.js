let audioContext;
let isMuted = false

function initializeAudioContext() {
  if (!audioContext || audioContext.state === 'suspended') {
    audioContext = new window.AudioContext();
  }
}

export function setMute(muted) {
  isMuted = muted
}

function playSound(value, min, max) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  const frequency = 200 + ((value - min) / (max - min)) * 1800;
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

  gain.gain.setValueAtTime(isMuted ? 0 : 0.02, audioContext.currentTime);
  gain.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.1);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.1);
}

export { initializeAudioContext, playSound };
