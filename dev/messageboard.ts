class Messageboard extends HTMLElement {
    static instance: Messageboard;

    public static getInstance(): Messageboard {
        if (!Messageboard.instance) Messageboard.instance = new Messageboard()
        return Messageboard.instance
    }

    private constructor() {
        super();
    }

    public createMessage(message: Messageboard) {
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(message)
    }

    public showMessage(sentMessage: string) {
        let span = document.createElement("span");
        let message = document.createElement("message");
        span.innerHTML = sentMessage;
        this.append(message);
        message.append(span)
    }
}

window.customElements.define("messageboard-component", Messageboard as any)
