export var setCommon = config => {

    window.localStorage.setItem('$config', JSON.stringify(config));
}

export var getCommon = () => {
    var config = window.localStorage.getItem('$config');
    if (typeof config === "object") {
        return config;
    } else if (typeof config === 'string') {
        try {
            config = JSON.parse(config);
        } catch (error) {
            config = null;
        }
    } else {
        config = null;
    }
    return config;
}