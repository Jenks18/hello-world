const golfCourses = [
    { name: 'Sigona Golf Club', lat: -1.22, lng: 36.66, city: 'Nairobi' },
    { name: 'Muthaiga Golf Club', lat: -1.26, lng: 36.84, city: 'Nairobi' },
    { name: 'Limuru County Club', lat: -1.13, lng: 36.67, city: 'Nairobi' },
    { name: 'Royal Nairobi Golf Club', lat: -1.30, lng: 36.80, city: 'Nairobi' },
    { name: 'Karen Golf & Country Club', lat: -1.34, lng: 36.72, city: 'Nairobi' },
    { name: 'Windsor Golf & Country Club', lat: -1.21, lng: 36.85, city: 'Mombasa' },
    { name: 'Vipingo Ridge', lat: -3.79, lng: 39.79, city: 'Mombasa' },
    { name: 'Nyali Golf Club', lat: -4.04, lng: 39.71, city: 'Mombasa' },
    { name: 'Mombasa Golf Club', lat: -4.07, lng: 39.68, city: 'Mombasa' },
    { name: 'Leisure Lodge Resort & Golf Club Resort', lat: -4.17, lng: 39.56, city: 'Mombasa' },
    { name: 'Thika Sports Club', lat: -1.01, lng: 37.07, city: 'Thika' },
    { name: 'Nandi Bears Golf Club', lat: 0.10, lng: 35.18, city: 'Nandi' },
    { name: 'Nyeri Sports Club', lat: -0.42, lng: 36.95, city: 'Nyeri' },
    { name: 'Nakuru Golf Club', lat: -0.27, lng: 36.07, city: 'Nakuru' },
    { name: 'Mt. Kenya Safari Club', lat: -0.03, lng: 37.13, city: 'Mt. Kenya' },
    { name: 'Rift Valley Lodge & Golf Resort', lat: -0.67, lng: 36.32, city: 'Naivasha' }
];

const map = L.map('map').setView([-1.286389, 36.817223], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const courseList = document.getElementById('courses');

golfCourses.forEach((course, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${index + 1}.</span> ${course.name}`;
    listItem.dataset.lat = course.lat;
    listItem.dataset.lng = course.lng;
    courseList.appendChild(listItem);

    const marker = L.marker([course.lat, course.lng]).addTo(map);
    marker.bindPopup(`<b>${course.name}</b><br>${course.city}`);

    listItem.addEventListener('click', () => {
        map.setView([course.lat, course.lng], 13);
        marker.openPopup();

        document.querySelectorAll('#courses li').forEach(item => {
            item.classList.remove('active');
        });
        listItem.classList.add('active');
    });
});
