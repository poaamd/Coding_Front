<script setup>
// Function that returns a Promise, simulating an asynchronous operation
const wait = () => {
  return new Promise((resolve) => {
    console.log("Start of wait function"); // Logs when the function starts
    setTimeout(() => {
      console.log("wait"); // Logs after a 2-second delay
      resolve(); // Resolves the Promise after the delay
    }, 2000);
    console.log("End of wait function"); // Logs immediately after setting the timeout (before the delay)
  });
};

// call back Function to execute `wait()` and handle its resolution
// const run = () => {
//   console.log("Start of run function"); // Logs when `run()` is called
//   wait().then(() => {
//     console.log("End of run function"); // Logs after `wait()` completes (2 seconds later)
//   });
// };

// Async function to execute `wait()` and handle its resolution
const run = async () => {
  console.log("Start of run function"); // Logs when `run()` is called
  await wait(); // Wait for the Promise to resolve
  console.log("End of run function"); // Logs after `wait()` completes (2 seconds later)
};
</script>

<template>
  <div>AsyncComp.vue</div>
  <div>
    <!-- Button that triggers the `run` function when clicked -->
    <button @click="run">Run</button>
  </div>
</template>

<!-- 
Explanation: call back function or call back hell
This code defines two functions: `wait` and `run`. The `wait` function returns a Promise that resolves after a 2-second delay. The `run` function logs messages before and after calling `wait`, and then logs a message after the Promise resolves.

When the "Run" button is clicked, the `run` function is executed. The console logs show the order of execution and demonstrate how asynchronous operations work in JavaScript.
1. When you click the button, the `run` function starts and logs "Start of run function."
2. The `wait` function is called, logging "Start of wait function."
3. A 2-second delay is scheduled using `setTimeout`.
4. Before the delay finishes, "End of wait function" is logged.
5. After 2 seconds, "wait" is logged.
6. Finally, "End of run function" is logged, signaling that the process is complete.

Execution order of console logs:
- "Start of run function"
- "Start of wait function"
- "End of wait function"
- (2-second delay)
- "wait"
- "End of run function"

This code demonstrates how JavaScript handles asynchronous operations,
where some tasks (like waiting) do not block the rest of the code from running immediately.
-->
