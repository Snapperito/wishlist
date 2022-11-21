const x = window.matchMedia("(max-width: 700px)")
const keyboard = document.querySelector('#keyboard')
const merch = document.querySelector('#merch')
const pc = document.querySelector('#pc')
const keyboardContent = document.querySelector('#keyboard-content')
const merchContent = document.querySelector('#merch-content')
const pcContent = document.querySelector('#pc-content')

function resize(x) {
    if (x.matches) { // If mobile
        keyboard.addEventListener('click', () => {
            new WinBox({
                //config
                title: "Endgame Keyboard Finishing Touches - $120",
                mount: keyboardContent,
                modal: true,
                //appearance
                background: "#26272e",
                border: 3,
                //pos
                x: "center",
                y: "center",
                //dimensions
                width: "100%",
                height: "100%",

            })
        });

        merch.addEventListener('click', () => {
            new WinBox({
                //config
                title: "Merch! ",
                mount: merchContent,
                modal: true,
                //appearance
                background: "#26272e",
                border: 3,
                //pos
                x: "center",
                y: "center",
                //dimensions
                width: "100%",
                height: "100%",

            })
        });

        pc.addEventListener('click', () => {
            new WinBox({
                //config
                title: "PC Upgrade - $1040",
                mount: pcContent,
                modal: true,
                //appearance
                background: "#26272e",
                border: 3,
                //pos
                x: "center",
                y: "center",
                //dimensions
                width: "100%",
                height: "100%",

            })
        });
    } else { // If desktop
        keyboard.addEventListener('click', () => {
            new WinBox({
                //config
                title: "Endgame Keyboard Finishing Touches - $120",
                mount: keyboardContent,
                modal: true,
                //appearance
                background: "#26272e",
                border: 3,
                //viewport
                top: 50,
                right: 50,
                bottom: 0,
                left: 50,
                //pos
                x: "center",
                y: "center",
                //dimensions
                width: "50%",
                height: "80%",

            })
        });

        merch.addEventListener('click', () => {
            new WinBox({
                //config
                title: "Merch!",
                mount: merchContent,
                modal: true,
                //appearance
                background: "#26272e",
                border: 3,
                //viewport
                top: 50,
                right: 50,
                bottom: 0,
                left: 50,
                //pos
                x: "center",
                y: "center",
                //dimensions
                width: "50%",
                height: "80%",

            })
        });

        pc.addEventListener('click', () => {
            new WinBox({
                //config
                title: "PC Upgrade - $1040",
                mount: pcContent,
                modal: true,
                //appearance
                background: "#26272e",
                border: 3,
                //viewport
                top: 50,
                right: 50,
                bottom: 0,
                left: 50,
                //pos
                x: "center",
                y: "center",
                //dimensions
                width: "50%",
                height: "80%",

            })
        });
    }
}

resize(x)
x.addEventListener("change", resize);