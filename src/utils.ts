export const wait = (time: number): Promise<void> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
    }, time)
  );

export function awaitScrollTo(scrollTo: number) {
  return new Promise<void>((resolve) => {
    const targetPosition = scrollTo; // スクロール目標
    const checkScroll = () => {
      if (Math.abs(window.scrollY - targetPosition) <= 1) {
        // 目標位置に到達
        window.removeEventListener("scroll", checkScroll);
        resolve(); // 完了通知
      }
    };
    window.addEventListener("scroll", checkScroll);
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  });
}
