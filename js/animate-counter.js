export default function animateCounter(block, time) {
  let counterNumber = block.dataset.value,
    i=0,
    step = 1000*time/counterNumber;
  let interval = setInterval(() => {
      block.innerText = ++i;
      if(i == counterNumber) clearInterval(interval);
  }, step);
  
}

