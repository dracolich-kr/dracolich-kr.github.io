const codeBlocks = document.querySelectorAll(
  ".code-header + .highlighter-rouge"
);
const copyCodeButtons = document.querySelectorAll(".copy-code-button");

copyCodeButtons.forEach((copyCodeButton, index) => {
  const code = codeBlocks[index].innerText;
  let id;

  copyCodeButton.addEventListener("click", () => {
    window.navigator.clipboard.writeText(code);

    const img = copyCodeButton.querySelector("img");

    const originalSrc = img.dataset.originalSrc || "/assets/images/icon/copy.png";
    const copiedSrc = img.dataset.copiedSrc || "/assets/images/icon/check.png";

    img.src = copiedSrc;

    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      img.src = originalSrc;
    }, 2000);
  });
});
