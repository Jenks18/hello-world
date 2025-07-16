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

    // Create a container for the course info
    const courseInfoContainer = document.createElement('div');
    courseInfoContainer.id = 'course-info-container';
    root.appendChild(courseInfoContainer);

    // Function to render the course info
    function renderCourseInfo(courseId) {
        courseInfoContainer.innerHTML = '';
        courseInfoContainer.appendChild(CourseInfo(courseId));
    }

    // Render the initial course info
    renderCourseInfo(courseSelector.value);

    // Add an event listener to the selector
    courseSelector.addEventListener('change', (e) => {
        renderCourseInfo(e.target.value);
    });
});
