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
    id: 'freightTable' | 'travelValue' | 'date' | 'travelNumber' | 'driver' | 'plate' | 'vechicleType' | 'origin' | 'destination'| 'boxes' | 'dellivery'| 'km' | 'travelType';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}


const columns: readonly Column[] = [
    { id: 'freightTable', label: 'Tabela_Frete', minWidth: 170 },
    { id: 'travelValue', label: 'Valor Viagem', minWidth: 100 },
    {
        id: 'date',
        label: 'Data',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('pt-BR'),
    },
    {
        id: 'travelNumber',
        label: 'Número da viagem',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'driver',
        label: 'Motorista',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'plate',
        label: 'placa',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'vechicleType',
        label: 'Veiculo',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'origin',
        label: 'Origem',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'destination',
        label: 'Destino',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'boxes',
        label: 'Caixas',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'dellivery',
        label: 'Entregas',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'km',
        label: 'km',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'travelType',
        label: 'Tipo de Viagem',
        minWidth: 170,
        align: 'right',
    },
];


interface Props {
    freights: Freight[]
}

export default function StickyHeadTable(props: Props) {
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
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
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
                                                    {column.format && typeof value === 'number'
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