import { TableRow } from './';

function TableData ({ columns, planets }) {

    const alterFields = (planet) => {
        const planetURL = planet['url'] ?? '';
        planet['link'] = <a href={planetURL} target="_blank">{planet['name']}</a>;
        planet['residents_spaced'] = countResidents(planet['residents']);
        planet['population_spaced'] = spaceNumbers(planet['population']);
        planet['surface_area'] = calculateSurfaceArea(planet);
    }

    const countResidents = (residents) => {
        return spaceNumbers(residents.length);
    }

    const calculateSurfaceArea = (planet) => {
        const surfaceWater = planet['surface_water'];
        if (surfaceWater === 'unknown') return 'unknown';
        const radius = planet['diameter'] / 2;
        const totalSurfaceArea = 4 * Math.PI * Math.pow(radius, 2);
        const waterSurfacePercentage = surfaceWater / 100;
        const result = Math.round(totalSurfaceArea * waterSurfacePercentage);
        return spaceNumbers(result);
    }

    const spaceNumbers = (number) => {
        const regex = /(\d)(?=(\d{3})+\b)/g;
        return number.toString().replace(regex, '$1 ');
    }

    return (
        <tbody>
            {
                planets.map((planet, idx) => {
                    alterFields(planet);
                    return (
                        <tr key={idx}>
                            <TableRow planetData={planet} columns={columns} />
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default TableData;
