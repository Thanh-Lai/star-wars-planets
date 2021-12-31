function TableHeader ({ headers }) {
    return (
        <thead>
            <tr>
                {
                    headers.map((name, idx) => {
                        return (
                            <th key={idx}>{name}</th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}

export default TableHeader;
