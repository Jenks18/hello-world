const golfCourses = [
    { name: 'Sigona Golf Club', lat: -1.22, lng: 36.66, city: 'Nairobi', holes: [
        { par: 4, length: 350 }, { par: 3, length: 180 }, { par: 5, length: 520 },
        { par: 4, length: 400 }, { par: 4, length: 380 }, { par: 3, length: 160 },
        { par: 5, length: 550 }, { par: 4, length: 420 }, { par: 4, length: 390 }
    ] },
    { name: 'Muthaiga Golf Club', lat: -1.26, lng: 36.84, city: 'Nairobi', holes: [
        { par: 4, length: 360 }, { par: 3, length: 170 }, { par: 5, length: 530 },
        { par: 4, length: 410 }, { par: 4, length: 390 }, { par: 3, length: 150 },
        { par: 5, length: 560 }, { par: 4, length: 430 }, { par: 4, length: 400 }
    ] },
    { name: 'Limuru County Club', lat: -1.13, lng: 36.67, city: 'Nairobi', holes: [
        { par: 4, length: 340 }, { par: 3, length: 190 }, { par: 5, length: 510 },
        { par: 4, length: 390 }, { par: 4, length: 370 }, { par: 3, length: 170 },
        { par: 5, length: 540 }, { par: 4, length: 410 }, { par: 4, length: 380 }
    ] },
    { name: 'Royal Nairobi Golf Club', lat: -1.30, lng: 36.80, city: 'Nairobi', holes: [
        { par: 4, length: 370 }, { par: 3, length: 160 }, { par: 5, length: 540 },
        { par: 4, length: 420 }, { par: 4, length: 400 }, { par: 3, length: 180 },
        { par: 5, length: 570 }, { par: 4, length: 440 }, { par: 4, length: 410 }
    ] },
    { name: 'Karen Golf & Country Club', lat: -1.34, lng: 36.72, city: 'Nairobi', holes: [
        { par: 4, length: 380 }, { par: 3, length: 150 }, { par: 5, length: 550 },
        { par: 4, length: 430 }, { par: 4, length: 410 }, { par: 3, length: 190 },
        { par: 5, length: 580 }, { par: 4, length: 450 }, { par: 4, length: 420 }
    ] },
    { name: 'Windsor Golf & Country Club', lat: -1.21, lng: 36.85, city: 'Mombasa', holes: [
        { par: 4, length: 390 }, { par: 3, length: 140 }, { par: 5, length: 560 },
        { par: 4, length: 440 }, { par: 4, length: 420 }, { par: 3, length: 200 },
        { par: 5, length: 590 }, { par: 4, length: 460 }, { par: 4, length: 430 }
    ] },
    { name: 'Vipingo Ridge', lat: -3.79, lng: 39.79, city: 'Mombasa', holes: [
        { par: 4, length: 400 }, { par: 3, length: 130 }, { par: 5, length: 570 },
        { par: 4, length: 450 }, { par: 4, length: 430 }, { par: 3, length: 210 },
        { par: 5, length: 600 }, { par: 4, length: 470 }, { par: 4, length: 440 }
    ] },
    { name: 'Nyali Golf Club', lat: -4.04, lng: 39.71, city: 'Mombasa', holes: [
        { par: 4, length: 410 }, { par: 3, length: 120 }, { par: 5, length: 580 },
        { par: 4, length: 460 }, { par: 4, length: 440 }, { par: 3, length: 220 },
        { par: 5, length: 610 }, { par: 4, length: 480 }, { par: 4, length: 450 }
    ] },
    { name: 'Mombasa Golf Club', lat: -4.07, lng: 39.68, city: 'Mombasa', holes: [
        { par: 4, length: 420 }, { par: 3, length: 110 }, { par: 5, length: 590 },
        { par: 4, length: 470 }, { par: 4, length: 450 }, { par: 3, length: 230 },
        { par: 5, length: 620 }, { par: 4, length: 490 }, { par: 4, length: 460 }
    ] },
    { name: 'Leisure Lodge Resort & Golf Club Resort', lat: -4.17, lng: 39.56, city: 'Mombasa', holes: [
        { par: 4, length: 430 }, { par: 3, length: 100 }, { par: 5, length: 600 },
        { par: 4, length: 480 }, { par: 4, length: 460 }, { par: 3, length: 240 },
        { par: 5, length: 630 }, { par: 4, length: 500 }, { par: 4, length: 470 }
    ] },
    { name: 'Thika Sports Club', lat: -1.01, lng: 37.07, city: 'Thika', holes: [
        { par: 4, length: 330 }, { par: 3, length: 200 }, { par: 5, length: 500 },
        { par: 4, length: 380 }, { par: 4, length: 360 }, { par: 3, length: 180 },
        { par: 5, length: 530 }, { par: 4, length: 400 }, { par: 4, length: 370 }
    ] },
    { name: 'Nandi Bears Golf Club', lat: 0.10, lng: 35.18, city: 'Nandi', holes: [
        { par: 4, length: 320 }, { par: 3, length: 210 }, { par: 5, length: 490 },
        { par: 4, length: 370 }, { par: 4, length: 350 }, { par: 3, length: 190 },
        { par: 5, length: 520 }, { par: 4, length: 390 }, { par: 4, length: 360 }
    ] },
    { name: 'Nyeri Sports Club', lat: -0.42, lng: 36.95, city: 'Nyeri', holes: [
        { par: 4, length: 310 }, { par: 3, length: 220 }, { par: 5, length: 480 },
        { par: 4, length: 360 }, { par: 4, length: 340 }, { par: 3, length: 200 },
        { par: 5, length: 510 }, { par: 4, length: 380 }, { par: 4, length: 350 }
    ] },
    { name: 'Nakuru Golf Club', lat: -0.27, lng: 36.07, city: 'Nakuru', holes: [
        { par: 4, length: 300 }, { par: 3, length: 230 }, { par: 5, length: 470 },
        { par: 4, length: 350 }, { par: 4, length: 330 }, { par: 3, length: 210 },
        { par: 5, length: 500 }, { par: 4, length: 370 }, { par: 4, length: 340 }
    ] },
    { name: 'Mt. Kenya Safari Club', lat: -0.03, lng: 37.13, city: 'Mt. Kenya', holes: [
        { par: 4, length: 290 }, { par: 3, length: 240 }, { par: 5, length: 460 },
        { par: 4, length: 340 }, { par: 4, length: 320 }, { par: 3, length: 220 },
        { par: 5, length: 490 }, { par: 4, length: 360 }, { par: 4, length: 330 }
    ] },
    { name: 'Rift Valley Lodge & Golf Resort', lat: -0.67, lng: 36.32, city: 'Naivasha', holes: [
        { par: 4, length: 280 }, { par: 3, length: 250 }, { par: 5, length: 450 },
        { par: 4, length: 330 }, { par: 4, length: 310 }, { par: 3, length: 230 },
        { par: 5, length: 480 }, { par: 4, length: 350 }, { par: 4, length: 320 }
    ] }
];

const holeTabs = document.getElementById('hole-tabs');
const holeDetail = document.getElementById('hole-detail');

function createTabs() {
    holeTabs.innerHTML = '';
    const overviewTab = document.createElement('div');
    overviewTab.classList.add('tab', 'active');
    overviewTab.innerText = 'Overview';
    overviewTab.addEventListener('click', () => {
        setActiveTab(overviewTab);
        showOverview();
    });
    holeTabs.appendChild(overviewTab);

    for (let i = 1; i <= 9; i++) {
        const tab = document.createElement('div');
        tab.classList.add('tab');
        tab.innerText = `Hole ${i}`;
        tab.addEventListener('click', () => {
            setActiveTab(tab);
            showHole(i);
        });
        holeTabs.appendChild(tab);
    }
}

function setActiveTab(activeTab) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    activeTab.classList.add('active');
}

function showOverview() {
    holeDetail.innerHTML = '<h2>Overview</h2><p>This is the overview of the course.</p>';
}

let selectedCourse = golfCourses[0];

function showHole(holeNumber) {
    const hole = selectedCourse.holes[holeNumber - 1];
    holeDetail.innerHTML = `<h2>Hole ${holeNumber}</h2>
        <p>Par: ${hole.par}</p>
        <p>Length: ${hole.length}m</p>`;
}

function selectCourse(course) {
    selectedCourse = course;
    document.getElementById('course-details').innerHTML = `
        <h2>${course.name}</h2>
        <p>${course.city}</p>
    `;
    map.setView([course.lat, course.lng], 13);
    showOverview();
}

function populateCourseList() {
    const courseList = document.createElement('ul');
    golfCourses.forEach(course => {
        const listItem = document.createElement('li');
        listItem.innerText = course.name;
        listItem.addEventListener('click', () => {
            selectCourse(course);
        });
        courseList.appendChild(listItem);
    });
    const sidebar = document.getElementById('sidebar');
    const layoutList = document.getElementById('layout-list');
    sidebar.insertBefore(courseList, layoutList);
}

createTabs();
populateCourseList();
selectCourse(selectedCourse);

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
