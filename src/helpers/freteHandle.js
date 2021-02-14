export const freteHandle = (total, setFrete) => {
  if (total > 250) {
    setFrete('Grátis!');
  }
  if (total === 0) {
    setFrete(0);
    //   state(true);
  }
};
