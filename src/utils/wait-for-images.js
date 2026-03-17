export const waitForImages = (images) =>
  Promise.all(
    images.map((img) => {
      return new Promise((resolve) => {
        if (img.complete) resolve();
        else img.onload = img.onerror = resolve;
      });
    })
  );
