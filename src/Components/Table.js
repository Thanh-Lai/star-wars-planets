import { TableHeader, TableData } from './';
import '../styles/Table.css';

function Table ({ planets }) {
    const displayData = {
        'link': 'Name',
        'climate': 'Climate',
        'residents_spaced': 'Residents',
        'terrain': 'Terrains',
        'population_spaced': 'Population',
        'surface_area': 'Water Surface Area (km^2)',
    }
    const headers = Object.values(displayData);
    const columns = Object.keys(displayData);

    return (
        <div id='table'>
            <table>
                <TableHeader headers={headers}/>
                <TableData columns={columns} planets={planets}/>
            </table>
        </div>
    )
}
export default Table;
