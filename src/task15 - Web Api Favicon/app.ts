// Создать веб-приложение, которое:

// 1 - Изменяет размер элементов при изменении размеров окна с помощью Resize Observer API.
// 2 - Анимирует каждый элемент при клике на него с помощью различных случайных анимаций, используя Web Animations API.
// 3 - Меняет favicon страницы если она не активна.
interface ChildDiv extends HTMLDivElement {
  animation?: Animation;
}

const divElement = document.getElementById("div-element") as HTMLDivElement;
const childDivs: ChildDiv[] = Array.from(divElement.children) as ChildDiv[]; // ?????

function handleResize(entries: ResizeObserverEntry[]): void {
  for (let entry of entries) {
    const { width, height } = entry.contentRect;

    for (let i = 0; i < childDivs.length; i++) {
      const childDiv = childDivs[i] as HTMLDivElement;

      const childWidth = width / childDivs.length;

      childDiv.style.setProperty("width", `${childWidth}px`);
      childDiv.style.setProperty("height", `${height}px`);
    }
  }
}

const resizeObserver = new ResizeObserver(handleResize);
resizeObserver.observe(divElement);

function animateSpin(div: ChildDiv): Animation {
  return div.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    {
      duration: 1000,
      iterations: Infinity,
    }
  );
}

function animatePulse(div: ChildDiv): Animation {
  return div.animate([{ opacity: 1 }, { opacity: 0.5 }, { opacity: 1 }], {
    duration: 1000,
    iterations: Infinity,
    easing: "ease-in-out",
  });
}

function animateGrowShrink(div: ChildDiv): Animation {
  return div.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.2)" },
      { transform: "scale(1)" },
    ],
    {
      duration: 750,
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
}

for (let i = 0; i < childDivs.length; i++) {
  childDivs[i].addEventListener("click", () => {
    let animation: Animation;
    switch (i) {
      case 0:
      case 3:
        animation = animateSpin(childDivs[i]);
        break;
      case 1:
      case 4:
        animation = animatePulse(childDivs[i]);
        break;
      case 2:
      case 5:
        animation = animateGrowShrink(childDivs[i]);
        break;
      default:
        break;
    }
  });
}

function changeFavicon(src: string) {
  const faviconLink = document.getElementById("favicon") as HTMLLinkElement;
  faviconLink.href = src;
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    changeFavicon("favicon-inactive.png");
  } else {
    changeFavicon("favicon.png");
  }
});
