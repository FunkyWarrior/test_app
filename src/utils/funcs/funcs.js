export function ucFirst(str) {
    if (!str) return str;
    if (typeof str !== 'string') return str;
    return str[0].toUpperCase() + str.slice(1);
}

export const checkHash = () => {
    const links = [...document.getElementsByClassName('header__link')];
    links.forEach(li => li.pathname === window.location.pathname ? li.id = 'current' : li.id = false)
};

export function removePropFromObj (obj, field){
    const { [field]: _, ...newObj } = obj;
    return newObj;
}