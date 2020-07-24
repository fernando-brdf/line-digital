const Helper = {
    href() {
        // eslint-disable-next-line
        return '';
    },

    limitarTexto(texto, limite) {

        if (texto.length > Number(limite))
            return texto.substr(0, limite);
        return texto;
    },

    removerStrong(texto) {
        let txt = texto.replace(/<strong>/g, "");
        txt = txt.replace(/<\/strong>/g, "");
        return txt;
    },

    rota() {
        return window.location.pathname.split('/').pop();
    },

    scrollTop() {
        document.getElementById("root").scrollTop = 0;
    },

    minusculo(texto){
        return String(texto).toLowerCase();
    },

    maiusculo(texto){
        return String(texto).toLocaleUpperCase();
    }
}

export default Helper;
