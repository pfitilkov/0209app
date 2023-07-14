const user = {
    id:"1",
    name: "Иван",
    lastname: "Иванов",
    email: "ivan@ya.ru",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
    about: "Тут я рассказываю о себе, своих увлечениях...",
};

const users = {
    0: {name: "Валерия", lastname: "Тимохина"},
    1: {name: "Екатерина", lastname: "Свердлова"},
    2: {name: "Константин", lastname: "Свиридов"},
    3: {name: "Юлия", lastname: "Петрова"},
    4: {name: "Пётр", lastname: "Великий"},

}

export function getUser() {
    return user;
}

export function getUsers () {
    return users;
}