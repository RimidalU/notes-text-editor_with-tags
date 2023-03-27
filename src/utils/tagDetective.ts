const TagDetective = (str: string): string[] => {
    const regExp = /\B#\w+/gi

    return str.match(regExp) || []
}

export default TagDetective