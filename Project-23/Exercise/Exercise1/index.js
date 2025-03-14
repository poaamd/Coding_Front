const { createApp, ref } = Vue;

createApp({
  setup() {
    const randFunc = () => {
      const randNum = Math.random();
      const result = "";
      if (randNum % 2 == 0) {
        result = "Heads";
      } else {
        result = "Tails";
      }
    };

    return { randFunc };
  },
}).mount("#app");
