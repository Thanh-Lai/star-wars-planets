function TableData ({ columns, planets }) {
    return (
        <tbody>
            {
                planets.map((planet, idx) => {
                    return (
                        <tr key={idx}>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}
export default TableData;
