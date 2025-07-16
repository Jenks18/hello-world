function createHoleDetailComponent(holeData) {
    const component = document.createElement('div');
    component.innerHTML = `
        <div class="hole-detail-container">
            <div class="hole-info-header">
                <div class="hole-number">Hole ${holeData.number}</div>
                <div class="hole-par-length">Par ${holeData.par}, ${holeData.length}m</div>
            </div>
            <div class="hole-info-body">
                <table>
                    <thead>
                        <tr>
                            <th>Tee &rarr; Target</th>
                            <th>Avg</th>
                            <th>Score Distribution</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${holeData.tee} &rarr; ${holeData.target}</td>
                            <td>${holeData.avg}</td>
                            <td>${holeData.scoreDistribution}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    return component;
}
