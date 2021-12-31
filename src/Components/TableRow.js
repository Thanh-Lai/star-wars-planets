function TableRow ({ planetData, columns }) {
    return (
        columns.map((column, idx) => {
            const field = planetData[column] === 'unknown' ? '?' : planetData[column];
            return (
                <td key={idx}>
                    {field}
                </td>
            )
        })
    )
}

export default TableRow;
