import { TableHeader } from './';

function Table ({ }) {
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
            </table>
        </div>
    )
}
export default Table;