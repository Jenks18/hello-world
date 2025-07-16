document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // Create the map container
    const mapContainer = document.createElement('div');
    mapContainer.className = 'map-container';
    mapContainer.textContent = 'Map Placeholder';
    root.appendChild(mapContainer);

    // Create the tabs
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'tabs';
    root.appendChild(tabsContainer);

    const tabContentContainer = document.createElement('div');
    tabContentContainer.className = 'tab-content';
    root.appendChild(tabContentContainer);

    const courseData1_9 = {
        layout: 'Kinder Farm Park (1-9)',
        holes: [
            { hole: 1, par: 3, distance: 250, tee: 'Short', avg: 3.2, dist: '...' },
            { hole: 2, par: 3, distance: 300, tee: 'Short', avg: 3.4, dist: '...' },
            { hole: 3, par: 3, distance: 200, tee: 'Short', avg: 2.9, dist: '...' },
            { hole: 4, par: 4, distance: 450, tee: 'Short', avg: 4.5, dist: '...' },
            { hole: 5, par: 3, distance: 275, tee: 'Short', avg: 3.1, dist: '...' },
            { hole: 6, par: 3, distance: 225, tee: 'Short', avg: 3.0, dist: '...' },
            { hole: 7, par: 4, distance: 400, tee: 'Short', avg: 4.2, dist: '...' },
            { hole: 8, par: 3, distance: 260, tee: 'Short', avg: 3.3, dist: '...' },
            { hole: 9, par: 3, distance: 280, tee: 'Short', avg: 3.2, dist: '...' },
        ]
    };

    const tabs = [
        { name: '1-9', content: CourseInfo(courseData1_9) },
        { name: '10-18', content: 'Content for 10-18' },
        { name: '1-18', content: 'Content for 1-18' },
    ];

    tabs.forEach((tabInfo, index) => {
        const tab = document.createElement('div');
        tab.className = 'tab';
        tab.textContent = tabInfo.name;
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            // Add active class to the clicked tab
            tab.classList.add('active');
            // Update the tab content
            tabContentContainer.innerHTML = '';
            if (typeof tabInfo.content === 'string') {
                tabContentContainer.innerHTML = tabInfo.content;
            } else {
                tabContentContainer.appendChild(tabInfo.content);
            }
        });
        tabsContainer.appendChild(tab);

        // Set the first tab as active by default
        if (index === 0) {
            tab.classList.add('active');
            tabContentContainer.innerHTML = '';
            if (typeof tabInfo.content === 'string') {
                tabContentContainer.innerHTML = tabInfo.content;
            } else {
                tabContentContainer.appendChild(tabInfo.content);
            }
        }
    });
});
