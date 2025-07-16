const golfCourses = [
    { name: 'Sigona Golf Club', lat: -1.22, lng: 36.66, city: 'Nairobi', overview: [-1.22, 36.66], holes: [
        { number: 1, par: 4, length: 350, tee: 'Red (Short)', target: 'A', avg: 3.02, scoreDistribution: '24% 56% 16%' },
        { number: 2, par: 3, length: 180, tee: 'Red (Short)', target: 'B', avg: 3.44, scoreDistribution: '10% 50% 29%' },
        { number: 3, par: 5, length: 520, tee: 'Red (Short)', target: 'B', avg: 3.41, scoreDistribution: '52% 30%' },
        { number: 4, par: 4, length: 400, tee: 'Red (Short)', target: 'B', avg: 3.29, scoreDistribution: '13% 55% 25%' },
        { number: 5, par: 4, length: 380, tee: 'Red (Short)', target: 'B', avg: 2.98, scoreDistribution: '24% 60% 13%' },
        { number: 6, par: 3, length: 160, tee: 'Red (Short)', target: 'A', avg: 3.30, scoreDistribution: '62% 26%' },
        { number: 7, par: 5, length: 550, tee: 'Red (Short)', target: 'A', avg: 3.33, scoreDistribution: '13% 51% 27%' },
        { number: 8, par: 4, length: 420, tee: 'Red (Short)', target: 'B', avg: 3.28, scoreDistribution: '11% 58% 24%' },
        { number: 9, par: 4, length: 390, tee: 'Red (Short)', target: 'A', avg: 3.01, scoreDistribution: '24% 56% 17%' }
    ] },
    { name: 'Muthaiga Golf Club', lat: -1.26, lng: 36.84, city: 'Nairobi', overview: [-1.26, 36.84], holes: [
        { number: 1, par: 4, length: 360, tee: 'Red (Short)', target: 'A', avg: 3.02, scoreDistribution: '24% 56% 16%' },
        { number: 2, par: 3, length: 170, tee: 'Red (Short)', target: 'B', avg: 3.44, scoreDistribution: '10% 50% 29%' },
        { number: 3, par: 5, length: 530, tee: 'Red (Short)', target: 'B', avg: 3.41, scoreDistribution: '52% 30%' },
        { number: 4, par: 4, length: 410, tee: 'Red (Short)', target: 'B', avg: 3.29, scoreDistribution: '13% 55% 25%' },
        { number: 5, par: 4, length: 390, tee: 'Red (Short)', target: 'B', avg: 2.98, scoreDistribution: '24% 60% 13%' },
        { number: 6, par: 3, length: 150, tee: 'Red (Short)', target: 'A', avg: 3.30, scoreDistribution: '62% 26%' },
        { number: 7, par: 5, length: 560, tee: 'Red (Short)', target: 'A', avg: 3.33, scoreDistribution: '13% 51% 27%' },
        { number: 8, par: 4, length: 430, tee: 'Red (Short)', target: 'B', avg: 3.28, scoreDistribution: '11% 58% 24%' },
        { number: 9, par: 4, length: 400, tee: 'Red (Short)', target: 'A', avg: 3.01, scoreDistribution: '24% 56% 17%' }
    ] },
    // ... (and so on for the other courses)
];

let map;
let selectedCourse = golfCourses[0];
let holePath;

function initMap() {
    map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    selectCourse(golfCourses[0]);
    populateCourseList();
}

function populateCourseList() {
    const courseList = document.getElementById('courses');
    courseList.innerHTML = '';
    golfCourses.forEach((course, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${index + 1}.</span> ${course.name}`;
        listItem.addEventListener('click', () => {
            selectCourse(course);
            document.querySelectorAll('#courses li').forEach(item => {
                item.classList.remove('active');
            });
            listItem.classList.add('active');
        });
        courseList.appendChild(listItem);
    });
}

function selectCourse(course) {
    selectedCourse = course;
    createTabs();
    showOverview();
    setActiveTab(document.querySelector('#hole-tabs .tab'));
}

function createTabs() {
    const holeTabs = document.getElementById('hole-tabs');
    holeTabs.innerHTML = '';
    const overviewTab = document.createElement('div');
    overviewTab.classList.add('tab');
    overviewTab.innerText = 'Overview';
    overviewTab.addEventListener('click', () => {
        setActiveTab(overviewTab);
        showOverview();
    });
    holeTabs.appendChild(overviewTab);

    for (let i = 1; i <= selectedCourse.holes.length; i++) {
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
    if (holePath) {
        map.removeLayer(holePath);
    }
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    map.setView(selectedCourse.overview, 16);
    document.getElementById('hole-detail').innerHTML = '<h2>Overview</h2><p>This is the overview of the course.</p>';
}

function showHole(holeNumber) {
    const hole = selectedCourse.holes[holeNumber - 1];
    const holeDetail = document.getElementById('hole-detail');
    holeDetail.innerHTML = '';
    const holeDetailComponent = createHoleDetailComponent(hole);
    holeDetail.appendChild(holeDetailComponent);

    if (holePath) {
        map.removeLayer(holePath);
    }

    if (hole.path) {
        holePath = L.polyline(hole.path).addTo(map);
        map.fitBounds(holePath.getBounds());
    }
}

initMap();
