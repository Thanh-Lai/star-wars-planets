import { TableHeader, TableData } from './';
import '../styles/Table.css';

function Table ({ planets }) {
    const displayData = {
        'name': 'Name',
        'climate': 'Climate',
        'residents': 'Residents',
        'terrain': 'Terrains',
        'population': 'Population',
        'surface_area': 'Surface Area',
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
