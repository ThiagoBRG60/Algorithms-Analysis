import { waitBarsUpdate } from "../components/StartButton";
import { playSound, initializeAudioContext } from "./sounds";

async function bubbleSort(numbers, setNumbers, speed) {
  initializeAudioContext();
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
        setNumbers([...numbers]);
        playSound(numbers[j], min, max);
        await waitBarsUpdate(speed);
      }
    }
  }
}

async function selectionSort(numbers, setNumbers, speed) {
  initializeAudioContext();
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  for (let i = 0; i < numbers.length; i++) {
    let menor = i;

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[menor]) {
        menor = j;
      }
    }

    if (menor !== i) {
      [numbers[i], numbers[menor]] = [numbers[menor], numbers[i]];
      setNumbers([...numbers]);
      playSound(numbers[i], min, max);
      await waitBarsUpdate(speed);
    }
  }
}

async function insertionSort(numbers, setNumbers, speed) {
  initializeAudioContext();
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  for (let i = 1; i < numbers.length; i++) {
    let temp = numbers[i];
    let j = i - 1;

    while (j >= 0 && numbers[j] > temp) {
      numbers[j + 1] = numbers[j];
      j--;
      setNumbers([...numbers]);
      playSound(temp, min, max);
      await waitBarsUpdate(speed);
    }
    numbers[j + 1] = temp;
    setNumbers([...numbers]);
    playSound(temp, min, max);
  }
}

async function quickSort(numbers, setNumbers, speed, left, right) {
  initializeAudioContext();
  if (left < right) {
    const pivot = await partition(numbers, setNumbers, speed, left, right);
    await quickSort(numbers, setNumbers, speed, left, pivot - 1);
    await quickSort(numbers, setNumbers, speed, pivot + 1, right);
  }
}

async function partition(numbers, setNumbers, speed, left, right) {
  initializeAudioContext();
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const pivot = numbers[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (numbers[j] < pivot) {
      i++;
      [numbers[j], numbers[i]] = [numbers[i], numbers[j]];
      setNumbers([...numbers]);
      playSound(numbers[j], min, max);
      await waitBarsUpdate(speed);
    }
  }
  [numbers[i + 1], numbers[right]] = [numbers[right], numbers[i + 1]];
  setNumbers([...numbers]);
  playSound(numbers[i + 1], min, max);
  await waitBarsUpdate(speed);

  return i + 1;
}

async function mergeSort(numbers, setNumbers, speed, left, right) {
  initializeAudioContext();
  if (left >= right) return;

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const middle = Math.floor((left + right) / 2);

  await mergeSort(numbers, setNumbers, speed, left, middle);
  await mergeSort(numbers, setNumbers, speed, middle + 1, right);
  await merge(numbers, setNumbers, speed, left, middle, right, min, max);
}

async function merge(array, setNumbers, speed, left, middle, right, min, max) {
  initializeAudioContext();
  let start1 = left;
  let start2 = middle + 1;
  const tempArray = [...array];

  for (let i = left; i <= right; i++) {
    if (start1 <= middle && (start2 > right || array[start1] <= array[start2])) {
      tempArray[i] = array[start1++];
    } else {
      tempArray[i] = array[start2++];
    }
  }

  for (let i = left; i <= right; i++) {
    array[i] = tempArray[i];
  }

  setNumbers([...array]);
  playSound(array[left], min, max);
  await waitBarsUpdate(speed);
}

async function heapSort(array, setNumbers, speed) {
  initializeAudioContext();
  const min = Math.min(...array);
  const max = Math.max(...array);
  const n = array.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(array, n, i, setNumbers, speed, min, max);
  }

  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    setNumbers([...array]);
    playSound(array[0], min, max);
    await waitBarsUpdate(speed);
    await heapify(array, i, 0, setNumbers, speed, min, max);
  }

  setNumbers([...array]);
  await waitBarsUpdate(speed);
}

async function heapify(array, n, i, setNumbers, speed, min, max) {
  initializeAudioContext();
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    setNumbers([...array]);
    playSound(array[largest], min, max);
    await waitBarsUpdate(speed);
    await heapify(array, n, largest, setNumbers, speed, min, max);
  }
}

export { bubbleSort, selectionSort, insertionSort, quickSort, mergeSort, heapSort };