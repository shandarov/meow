if('serviceWorker' in navigator) {
    navigator.serviceWorker.register("js/sw.js")
        .then(() => console.log("Зарегистрировали"))
        .catch(() => console.log("Получилась ошибка"));
}
