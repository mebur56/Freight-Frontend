import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Freight } from '../../features/freightsPage/interfaces'

interface Column {
    id: 'freightTable' | 'travelValue' | 'date' | 'travelNumber' | 'driver' | 'plate' | 'vechicleType' | 'origin' | 'destination' | 'boxes' | 'dellivery' | 'km' | 'travelType';
    label: string;
    minWidth?: number;
    align?: 'center';
    format?: (value: string) => string;
}


const columns: readonly Column[] = [
    { id: 'freightTable', label: 'Tabela_Frete', minWidth: 115 },
    { id: 'travelValue', label: 'Valor', minWidth: 50 },
    {
        id: 'date',
        label: 'Data',
        minWidth: 115,
        align: 'center',
        format: (value: string) => new Date(value).toLocaleDateString('pt'),
    },
    {
        id: 'travelNumber',
        label: 'Número',
        minWidth: 70,
        align: 'center',
    },
    {
        id: 'driver',
        label: 'Motorista',
        minWidth: 170,
        align: 'center'
    },
    {
        id: 'plate',
        label: 'Placa',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'vechicleType',
        label: 'Veiculo',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'origin',
        label: 'Origem',
        minWidth: 200,
        align: 'center'
    },
    {
        id: 'destination',
        label: 'Destino',
        minWidth: 200,
        align: 'center'
    },
    {
        id: 'boxes',
        label: 'Caixas',
        minWidth: 70,
        align: 'center'
    },
    {
        id: 'dellivery',
        label: 'Entregas',
        minWidth: 70,
        align: 'center'
    },
    {
        id: 'km',
        label: 'km',
        minWidth: 70,
        align: 'center'
    },
    {
        id: 'travelType',
        label: 'Tipo de Viagem',
        minWidth: 110,
        align: 'center'
    },
];


interface Props {
    freights: Freight[]
}

export default function FreightTable(props: Props) {
    const { freights } = props
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const rows = freights;

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ overflow: 'hidden', backgroundColor: "lightGrey" }}>
            <TableContainer sx={{ maxHeight: "50vh", backgroundColor: "white" }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    sx={{ backgroundColor: "grey" }}
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === "date" && typeof value === 'string'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                labelRowsPerPage={"Linhas Por Página"}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}