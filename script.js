const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
string = " , "
for (let i = 0; i < friends.length; i++) {
    string += friends[i];
    if (i < friends.length - 1) {
        string += ' , ';
    }
}
console.log(string);

const joinFriends = friends.join(" , ");
console.log(joinFriends)

const cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5"
];

console.log(cards)
// видаляємо (по індексу), метод indexOf()
const cardsIndex = cards.indexOf("Карточка-3");
console.log(cardsIndex); // другий елемент по індексу
const deleteCard = cards.splice(2, 1);
console.log(cards)

// Додаємо (по індексу)
const addCard = cards.splice(4, 0, "Карточка-6")
console.log(cards)

// оновлення елемента
const updateCard = cards.splice(3, 0, "Карточка-3")
console.log(cards)
