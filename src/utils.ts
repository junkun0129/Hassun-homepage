export const wait = (time: number): Promise<void> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
    }, time)
  );
