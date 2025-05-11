const iconList = [
    "mjolnir",
    "moon",
    "nazar",
    "corruption",
    "compass",
    "monstera",
    "amulet",
    "coral",
    "mark",
    "stick",
    "yin_yang",
    "dandelion",
    "basic",
    "yggdrasil",
    "mimic",
    "third_eye",
    "magnet",
    "egg_beetle",
    "stinger",
]

addEventListener("DOMContentLoaded", async function () {

    const getRolesNeedIconFromHTMLElements = (() => {
        return function (HTMLElements) {
            const arr = [];
            for (let i = 0; i < iconList.length; i++) {
                const iconName = iconList[i];
                arr[i] = null;
                for (let j = 0; j < HTMLElements.length; j++) {
                    const role = HTMLElements[j];
                    if (role.classList.contains(iconName)) {
                        arr[i] = role;
                        break;
                    }
                }
            }
            return arr;
        }
    })();

    const image = await new Promise(function (resolve, reject) {
        const image = new Image();
        image.src = "icons.png";
        image.onload = () => { resolve(image); };
        image.onerror = error => { reject(error) };
    });

    const createCanvasForIcon = (() => {
        let img = image;
        return function (i) {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = "100";
            canvas.height = "100";
            const imgW = 64;
            const imgX = imgW * (i % 8);
            const imgY = imgW * Math.floor(i / 8);
            ctx.drawImage(img, imgX, imgY, imgW, imgW, 0, 0, canvas.height, canvas.width);
            return canvas;
        }
    })();

    const addIconBeforeElement = (() => {
        let func = createCanvasForIcon;
        return function (i, element) {
            const canvas = func(i);
            element.parentNode.insertBefore(canvas, element);
        }
    })();





    const rolesHTMLElements = document.getElementsByClassName("roles");
    const rolesNeedIcon = getRolesNeedIconFromHTMLElements(rolesHTMLElements);

    for (let i = 0; i < rolesNeedIcon.length; i++) {
        if (!rolesNeedIcon[i]) continue;
        addIconBeforeElement(i, rolesNeedIcon[i]);
    }
})