import p5 from 'p5';

export function getCanvasPosition() {
	const canvas = document.getElementById("defaultCanvas0");
	return [canvas?.offsetLeft, canvas?.offsetTop]
}

function getCanvasSize() {
	const canvas = document.getElementById("defaultCanvas0");
	return [canvas?.clientWidth, canvas?.clientHeight];
}

function alignDiv(offsetX=0, offsetY=0) {
  const pos = getCanvasPosition();
  const size = getCanvasSize();

  const storyDiv = document.getElementById("story");
  if (storyDiv) {
    if (pos[0]) {
      storyDiv.style.left = `${Math.abs(pos[0] + offsetX)}px`;
    }
    if (pos[1]) {
      storyDiv.style.top = `${Math.abs(pos[1] + offsetY)}px`;
    }
    storyDiv.style.maxWidth = `${p5.backPack.width - 25}px`;
    storyDiv.style.maxHeight = `${p5.backPack.height * 0.5}px`;
    storyDiv.style.width = `${p5.backPack.width - 25}px`;
    storyDiv.style.height = `${p5.backPack.height * 0.5}px`;
  }
}
