function CourseInfo(courseId) {
    const course = courseData[courseId];

    if (!course) {
        const errorContainer = document.createElement('div');
        errorContainer.textContent = 'Course not found';
        return errorContainer;
    }

    const container = document.createElement('div');
    container.className = 'course-info';

    const header = document.createElement('h2');
    header.textContent = 'Course Layout: ' + course.layout;
    container.appendChild(header);

    const table = document.createElement('table');
    table.className = 'course-table';
    container.appendChild(table);

    const thead = document.createElement('thead');
    table.appendChild(thead);

    const headerRow = document.createElement('tr');
    thead.appendChild(headerRow);

    ['Hole', 'Par', 'Distance', 'Tee', 'Avg.', 'Score Dist.'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    course.holes.forEach(hole => {
        const row = document.createElement('tr');
        tbody.appendChild(row);

        Object.values(hole).forEach(cellData => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
    });

    return container;
}
