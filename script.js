const golfCourses = [
    { name: 'Sigona Golf Club', lat: -1.22, lng: 36.66, city: 'Nairobi', overview: [-1.22, 36.66], holes: [
        { par: 4, length: 350 }, { par: 3, length: 180 }, { par: 5, length: 520 },
        { par: 4, length: 400 }, { par: 4, length: 380 }, { par: 3, length: 160 },
        { par: 5, length: 550 }, { par: 4, length: 420 }, { par: 4, length: 390 }
    ] },
    { name: 'Muthaiga Golf Club', lat: -1.26, lng: 36.84, city: 'Nairobi', overview: [-1.26, 36.84], holes: [
        { par: 4, length: 360 }, { par: 3, length: 170 }, { par: 5, length: 530 },
        { par: 4, length: 410 }, { par: 4, length: 390 }, { par: 3, length: 150 },
        { par: 5, length: 560 }, { par: 4, length: 430 }, { par: 4, length: 400 }
    ] },
    { name: 'Limuru County Club', lat: -1.13, lng: 36.67, city: 'Nairobi', overview: [-1.13, 36.67], holes: [
        { par: 4, length: 340 }, { par: 3, length: 190 }, { par: 5, length: 510 },
        { par: 4, length: 390 }, { par: 4, length: 370 }, { par: 3, length: 170 },
        { par: 5, length: 540 }, { par: 4, length: 410 }, { par: 4, length: 380 }
    ] },
    { name: 'Royal Nairobi Golf Club', lat: -1.30, lng: 36.80, city: 'Nairobi', overview: [-1.30, 36.80], holes: [
        { par: 4, length: 370 }, { par: 3, length: 160 }, { par: 5, length: 540 },
        { par: 4, length: 420 }, { par: 4, length: 400 }, { par: 3, length: 180 },
        { par: 5, length: 570 }, { par: 4, length: 440 }, { par: 4, length: 410 }
    ] },
    { name: 'Karen Golf & Country Club', lat: -1.34, lng: 36.72, city: 'Nairobi', overview: [-1.34, 36.72], holes: [
        { par: 4, length: 380 }, { par: 3, length: 150 }, { par: 5, length: 550 },
        { par: 4, length: 430 }, { par: 4, length: 410 }, { par: 3, length: 190 },
        { par: 5, length: 580 }, { par: 4, length: 450 }, { par: 4, length: 420 }
    ] },
    { name: 'Windsor Golf & Country Club', lat: -1.21, lng: 36.85, city: 'Mombasa', overview: [-1.21, 36.85], holes: [
        { par: 4, length: 390 }, { par: 3, length: 140 }, { par: 5, length: 560 },
        { par: 4, length: 440 }, { par: 4, length: 420 }, { par: 3, length: 200 },
        { par: 5, length: 590 }, { par: 4, length: 460 }, { par: 4, length: 430 }
    ] },
    { name: 'Vipingo Ridge', lat: -3.79, lng: 39.79, city: 'Mombasa', overview: [-3.79, 39.79], holes: [
        { par: 4, length: 400 }, { par: 3, length: 130 }, { par: 5, length: 570 },
        { par: 4, length: 450 }, { par: 4, length: 430 }, { par: 3, length: 210 },
        { par: 5, length: 600 }, { par: 4, length: 470 }, { par: 4, length: 440 }
    ] },
    { name: 'Nyali Golf Club', lat: -4.04, lng: 39.71, city: 'Mombasa', overview: [-4.04244, 39.70720], holes: [
        { par: 4, length: 410, path: [[-4.0396981, 39.7087741], [-4.0391416, 39.7093320], [-4.0376259, 39.7097531]] },
        { par: 3, length: 120, path: [[-4.0379269, 39.7085917], [-4.0390131, 39.7083181], [-4.0397355, 39.7080030]] },
        { par: 5, length: 580, path: [[-4.0393663, 39.7063172], [-4.0383871, 39.7074223], [-4.0374506, 39.7082658]] },
        { par: 4, length: 460, path: [[-4.0446585, 39.7072989], [-4.0433850, 39.7080606], [-4.0421703, 39.7097410]] },
        { par: 4, length: 440, path: [[-4.0434867, 39.7068992], [-4.0426091, 39.7079265], [-4.0411375, 39.7090369]] },
        { par: 3, length: 220, path: [[-4.0430559, 39.7054991], [-4.0421489, 39.7064272], [-4.0415389, 39.7075510]] },
        { par: 5, length: 610, path: [[-4.0415977, 39.7058773], [-4.0424271, 39.7046810], [-4.0434974, 39.7037744]] },
        { par: 4, length: 480, path: [[-4.0449823, 39.7055447], [-4.0444258, 39.7048286], [-4.0432084, 39.7046998]] },
        { par: 4, length: 450, path: [[-4.0433288, 39.7033346], [-4.0449154, 39.7028249], [-4.0458856, 39.7031719]] },
        { par: 4, length: 450, path: [[-4.0448940, 39.7047186], [-4.0457609, 39.7053167], [-4.0459247, 39.7066303]] }
    ] },
    { name: 'Mombasa Golf Club', lat: -4.07, lng: 39.68, city: 'Mombasa', overview: [-4.07, 39.68], holes: [
        { par: 4, length: 420 }, { par: 3, length: 110 }, { par: 5, length: 590 },
        { par: 4, length: 470 }, { par: 4, length: 450 }, { par: 3, length: 230 },
        { par: 5, length: 620 }, { par: 4, length: 490 }, { par: 4, length: 460 }
    ] },
    { name: 'Leisure Lodge Resort & Golf Club Resort', lat: -4.17, lng: 39.56, city: 'Mombasa', overview: [-4.17, 39.56], holes: [
        { par: 4, length: 430 }, { par: 3, length: 100 }, { par: 5, length: 600 },
        { par: 4, length: 480 }, { par: 4, length: 460 }, { par: 3, length: 240 },
        { par: 5, length: 630 }, { par: 4, length: 500 }, { par: 4, length: 470 }
    ] },
    { name: 'Thika Sports Club', lat: -1.01, lng: 37.07, city: 'Thika', overview: [-1.01, 37.07], holes: [
        { par: 4, length: 330 }, { par: 3, length: 200 }, { par: 5, length: 500 },
        { par: 4, length: 380 }, { par: 4, length: 360 }, { par: 3, length: 180 },
        { par: 5, length: 530 }, { par: 4, length: 400 }, { par: 4, length: 370 }
    ] },
    { name: 'Nandi Bears Golf Club', lat: 0.10, lng: 35.18, city: 'Nandi', overview: [0.10, 35.18], holes: [
        { par: 4, length: 320 }, { par: 3, length: 210 }, { par: 5, length: 490 },
        { par: 4, length: 370 }, { par: 4, length: 350 }, { par: 3, length: 190 },
        { par: 5, length: 520 }, { par: 4, length: 390 }, { par: 4, length: 360 }
    ] },
    { name: 'Nyeri Sports Club', lat: -0.42, lng: 36.95, city: 'Nyeri', overview: [-0.42, 36.95], holes: [
        { par: 4, length: 310 }, { par: 3, length: 220 }, { par: 5, length: 480 },
        { par: 4, length: 360 }, { par: 4, length: 340 }, { par: 3, length: 200 },
        { par: 5, length: 510 }, { par: 4, length: 380 }, { par: 4, length: 350 }
    ] },
    { name: 'Nakuru Golf Club', lat: -0.27, lng: 36.07, city: 'Nakuru', overview: [-0.27, 36.07], holes: [
        { par: 4, length: 300 }, { par: 3, length: 230 }, { par: 5, length: 470 },
        { par: 4, length: 350 }, { par: 4, length: 330 }, { par: 3, length: 210 },
        { par: 5, length: 500 }, { par: 4, length: 370 }, { par: 4, length: 340 }
    ] },
    { name: 'Mt. Kenya Safari Club', lat: -0.03, lng: 37.13, city: 'Mt. Kenya', overview: [-0.03, 37.13], holes: [
        { par: 4, length: 290 }, { par: 3, length: 240 }, { par: 5, length: 460 },
        { par: 4, length: 340 }, { par: 4, length: 320 }, { par: 3, length: 220 },
        { par: 5, length: 490 }, { par: 4, length: 360 }, { par: 4, length: 330 }
    ] },
    { name: 'Rift Valley Lodge & Golf Resort', lat: -0.67, lng: 36.32, city: 'Naivasha', overview: [-0.67, 36.32], holes: [
        { par: 4, length: 280 }, { par: 3, length: 250 }, { par: 5, length: 450 },
        { par: 4, length: 330 }, { par: 4, length: 310 }, { par: 3, length: 230 },
        { par: 5, length: 480 }, { par: 4, length: 350 }, { par: 4, length: 320 }
    ] }
];

let map;
let selectedCourse = golfCourses[0];

function initMap() {
    map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    selectCourse(golfCourses[0]);
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
    if (holePolygon) {
        map.removeLayer(holePolygon);
    }
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    if (selectedCourse.overview) {
        map.setView(selectedCourse.overview, 16);
    } else {
        const group = new L.featureGroup();
        selectedCourse.holes.forEach(hole => {
            if (hole.path) {
                const line = L.polyline(hole.path);
                group.addLayer(line);
            }
        });
        if (group.getLayers().length > 0) {
            map.fitBounds(group.getBounds());
        } else {
            map.setView([selectedCourse.lat, selectedCourse.lng], 15);
        }
    }

    document.getElementById('hole-detail').innerHTML = '<h2>Overview</h2><p>This is the overview of the course.</p>';
}

let holePath;

function showHole(holeNumber) {
    const hole = selectedCourse.holes[holeNumber - 1];
    document.getElementById('hole-detail').innerHTML = `<h2>Hole ${holeNumber}</h2>
        <p>Par: ${hole.par}</p>
        <p>Length: ${hole.length}m</p>`;

    if (holePath) {
        map.removeLayer(holePath);
    }

    if (hole.path) {
        holePath = L.polyline(hole.path).addTo(map);
        map.fitBounds(holePath.getBounds());
    }
}

initMap();
populateCourseList();
selectCourse(golfCourses[0]);
