import { TableRow } from './';

function TableData ({ columns, planets }) {
    return (
        <tbody>
            {
                planets.map((planet, idx) => {
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
