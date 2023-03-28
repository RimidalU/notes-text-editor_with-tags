const highlighter = (str: string) => {

    return str.replace(/\B#\w+/gi, function (match) {
        return "<mark>" + match + "</mark>";
    });
}

export default highlighter