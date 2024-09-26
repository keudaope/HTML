// Haetaan huoneet PHP API:sta
fetch('fetch_rooms.php')
    .then(response => response.json())
    .then(data => {
        const roomsContainer = document.getElementById('rooms-container');

        // Käydään läpi jokainen huone ja lisätään se DOM:iin
        data.forEach(room => {
            const roomElement = document.createElement('div');
            roomElement.classList.add('room');

            roomElement.innerHTML = `
                <img src="${room.image_url}" alt="${room.room_name}">
                <div class="room-info">
                    <h2>${room.room_name}</h2>
                    <p>${room.description}</p>
                    <p class="price">€${room.price.toFixed(2)}</p>
                </div>
            `;

            roomsContainer.appendChild(roomElement);
        });
    })
    .catch(error => {
        console.error('Error fetching room data:', error);
    });