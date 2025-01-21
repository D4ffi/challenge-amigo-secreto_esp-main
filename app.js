// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = []
const inputValue = document.getElementById('amigo')

function addFriend() {
    
    if (inputValue.value.trim() != '') {
        friends.push(inputValue.value.trim());
        inputValue.value = '';
        console.log(friends);

        updateFriends();
    } else {
        alert('Este campo no puede estar en blanco');
    }

}

function updateFriends() {
    const firendList = document.getElementById('listaAmigos');
    firendList.innerHTML = ''; // Limpiar la lista actual
    
    // Agregar cada amigo como un elemento de lista
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        firendList.appendChild(li);
    });
}

function sortFriend() {
    
    if (friends.length === 0 || friends.length === 1) {
        alert('Agrega al menos dos amigos');
        return;
    }

    // Seleccionar un nombre aleatorio
    const randomFriend = Math.floor(Math.random() * friends.length);
    const selectedFriend = friends[randomFriend];
    
    // Mostrar el resultado
    const resultList = document.getElementById('resultado');
    resultList.innerHTML = ''; // Limpiar resultados anteriores
    
    const li = document.createElement('li');
    li.textContent = 'El amigo secreto es: '+ selectedFriend;
    resultList.appendChild(li);

}