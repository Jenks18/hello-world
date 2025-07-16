document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // Create the map container
    const mapContainer = document.createElement('div');
    mapContainer.className = 'map-container';
    mapContainer.textContent = 'Map Placeholder';
    root.appendChild(mapContainer);

    // Create a course selector
    const courseSelectorContainer = document.createElement('div');
    courseSelectorContainer.className = 'course-selector-container';
    root.appendChild(courseSelectorContainer);

    const courseSelectorLabel = document.createElement('label');
    courseSelectorLabel.for = 'course-selector';
    courseSelectorLabel.textContent = 'Select a course:';
    courseSelectorContainer.appendChild(courseSelectorLabel);

    const courseSelector = document.createElement('select');
    courseSelector.id = 'course-selector';
    courseSelectorContainer.appendChild(courseSelector);

    // Populate the selector with courses from the data
    Object.keys(courseData).forEach(courseId => {
        const option = document.createElement('option');
        option.value = courseId;
        option.textContent = courseData[courseId].layout;
        courseSelector.appendChild(option);
    });

    // Create the tabs
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'tabs';
    root.appendChild(tabsContainer);

    const tabContentContainer = document.createElement('div');
    tabContentContainer.className = 'tab-content';
    root.appendChild(tabContentContainer);

    const courseLayoutContent = document.createElement('div');
    courseLayoutContent.className = 'tab-content';
    root.appendChild(courseLayoutContent);


    const tabs = [
        { name: 'Overview', content: 'Overview Content' },
        { name: '1-9', content: 'Content for 1-9' },
        { name: '10-18', content: 'Content for 10-18' },
    ];

    tabs.forEach((tabInfo, index) => {
        const tab = document.createElement('div');
        tab.className = 'tab';
        tab.textContent = tabInfo.name;
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            tabContentContainer.innerHTML = tabInfo.content;
            courseLayoutContent.style.display = 'none';
            tabContentContainer.style.display = 'block';
        });
        tabsContainer.appendChild(tab);

        if (index === 0) {
            tab.classList.add('active');
            tabContentContainer.innerHTML = tabInfo.content;
        }
    });

    const courseLayoutTab = document.createElement('div');
    courseLayoutTab.className = 'tab';
    courseLayoutTab.textContent = 'Course Layout';
    tabsContainer.appendChild(courseLayoutTab);


    function renderCourseLayout(courseId) {
        courseLayoutContent.innerHTML = '';
        courseLayoutContent.appendChild(CourseInfo(courseId));
    }

    courseLayoutTab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        courseLayoutTab.classList.add('active');
        tabContentContainer.style.display = 'none';
        courseLayoutContent.style.display = 'block';
        renderCourseLayout(courseSelector.value);
    });

    courseSelector.addEventListener('change', (e) => {
        if (courseLayoutTab.classList.contains('active')) {
            renderCourseLayout(e.target.value);
        }
    });

    // Hide the course layout content by default
    courseLayoutContent.style.display = 'none';
});
