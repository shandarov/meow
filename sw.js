// Если не работает, то оставьте эти обработчики событий в этом файле

self.addEventListener('install', evt => {
    console.log("Install");
});

self.addEventListener('activate', evt => {
    console.log("activate");
});

self.addEventListener('fetch', evt => {
    console.log("fetch data");
});
