import React from 'react';
import TableRow from './TableRow';

const MineralTable = () => {
    return (
        <div>
            <table>
                <tr>
                    <th>Which rock</th>
                    <th>Found in</th>
                </tr>
                <TableRow/>
            </table>
        </div>
    )
};

export default MineralTable;