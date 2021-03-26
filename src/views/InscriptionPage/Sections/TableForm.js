import React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

export default function TableForm() {
    const headCells = [
        {id: 'state', numeric: false, disablePadding: true, label: 'State'},
        {id: 'region', numeric: false, disablePadding: false, label: 'Region'},
        {id: 'description', numeric: false, disablePadding: false, label: 'Description'},
        {id: 'visitsPerWeek', numeric: true, disablePadding: false, label: 'Visits per week'},
        {id: 'hours', numeric: true, disablePadding: false, label: 'Hours'},
    ];

    const rows = [
        {id: 1, state: 'Bern', region: 'Thun', description: 'Arbeitsweg', visitsPerWeek: 5, hours: .5}]

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableRow>
                        {headCells.map((row) => (
                            <TableCell align="right">{row.id}</TableCell>
                            ))}
                    </TableRow>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell align="right">{row.state}</TableCell>
                        <TableCell align="right">{row.region}</TableCell>
                        <TableCell align="right">{row.description}</TableCell>
                        <TableCell align="right">{row.visitsPerWeek}</TableCell>
                        <TableCell align="right">{row.hours}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
        ;
}