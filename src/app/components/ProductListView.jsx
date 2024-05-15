import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import {getProductData} from 'app/data/products';
import {findManufacturerById} from 'app/data/manufacturers';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import DeleteButton from 'app/components/DeleteButton';
import AddIcon from '@mui/icons-material/Add';
import {Container, Grid, TextField, Select, InputLabel, MenuItem} from '@mui/material';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Fab from '@mui/material/Fab';
import {getPersistentValue, updatePersistentValue, getDefaultValue} from 'utils/Utilities';
import { useNavigate } from 'react-router-dom';
import pageURLs from 'constants/pagesURLs';
import * as pages from 'constants/pages';
import * as action from 'app/constants/actionTypes';
import {useIntl} from 'react-intl';

const PAGE_PARAMETER = "PAGE";
const ROWS_PER_PAGE_PARAMETER = "ROWS_PER_PAGE";
const FILTER_PARAMETER = "FILTER";

const FIRST_PAGE_NUMBER = 0;
const DEFAULT_PAGE_SIZE = 10;


export default function ProductListView() {
    const {formatMessage} = useIntl();
    const navigate = useNavigate();

    const [page, setPage] = useState(getPersistentValue(PAGE_PARAMETER, FIRST_PAGE_NUMBER));
    const [rowsPerPage, setRowsPerPage] = useState(getPersistentValue(ROWS_PER_PAGE_PARAMETER, DEFAULT_PAGE_SIZE));
    const resetPageParameter = () => {
        setPage(FIRST_PAGE_NUMBER);
        updatePersistentValue(PAGE_PARAMETER, FIRST_PAGE_NUMBER);
    };


    const productSelectionHandler = (product) => {
        navigate(`${pageURLs[pages.productEditor]}/${action.VIEW}/${product.id}`);
    };
    const prevFilter = getPersistentValue(FILTER_PARAMETER, {});
    const [filter, setFilter] = useState(prevFilter);
    const [data, setData] = useState(getProductData(prevFilter));

    const [productNameStart, setProductNameStart] = useState(getDefaultValue(prevFilter.nameStart, ""));
    const [productNameEnd, setProductNameEnd] = useState(getDefaultValue(prevFilter.nameEnd, ""));

    const [binProduct, setBinProduct] = useState(null);
    const [binAnchor, setBinAnchor] = useState(null);

    const productAddHandler = () => {
        navigate(`${pageURLs[pages.productEditor]}/${action.CREATE}`);
    };

    const clearFilterHandler = () => {
        setProductNameStart("");
        setProductNameEnd("");
        setFilter(undefined);
        resetPageParameter();
        updatePersistentValue(FILTER_PARAMETER, undefined);
        setData(getProductData(undefined));
    };

    const setFilterHandler = () => {
        const newFilter = {
            nameStart: productNameStart,
            nameEnd: productNameEnd,
        };
        setFilter(newFilter);
        updatePersistentValue(FILTER_PARAMETER, newFilter);
        resetPageParameter();
        setData(getProductData(newFilter));
    };

    const productBinShowHandler = (event, product) => {
        setBinProduct(product);
        setBinAnchor(event.currentTarget);
    };

    const productBinHideHandler = () => {
        setBinAnchor(null);
    };

    const pageChangeHandler = (event, newPage) => {
        setPage(newPage);
        updatePersistentValue(PAGE_PARAMETER, newPage);
    };

    const rowsPerPageChangeHandler = (event) => {
        const rowsPerPage = event.target.value;
        setRowsPerPage(rowsPerPage);
        setPage(FIRST_PAGE_NUMBER);
        updatePersistentValue(PAGE_PARAMETER, FIRST_PAGE_NUMBER);
        updatePersistentValue(ROWS_PER_PAGE_PARAMETER, rowsPerPage);
    };

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <Container maxWidth="xl" sx={{marginTop: 1}}>
                <Box sx={{flexGrow: 1}}>
                    <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 1, md: 1}} alignItems="left">
                        <Grid item xs="2">
                            <Fab color="secondary" variant="extended" size="small">
                                <IconButton onClick={productAddHandler}>
                                    <AddIcon/>
                                    {formatMessage({id: "button.product.add"})}
                                </IconButton>
                            </Fab>
                        </Grid>
                        <Grid item xs="2">
                            <InputLabel id="name"
                                        size='small'>{formatMessage({id: "filter.parameter.name"})}</InputLabel>
                            <TextField
                                id='name-start-field'
                                value={productNameStart}
                                size='small'
                                label={formatMessage({id: "filter.parameter.name.start"})}
                                onChange={(event) => setProductNameStart(event.target.value)}
                            />
                            <TextField
                                id='name-end-field'
                                value={productNameEnd}
                                size='small'
                                label={formatMessage({id: "filter.parameter.name.finish"})}
                                onChange={(event) => setProductNameEnd(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 1, md: 1}} alignItems="left">
                <Grid item xs={11}>
                    <TableContainer sx={{maxHeight: 600}}>
                        <Table sx={{minWidth: 200}} size="small" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"
                                               style={{minWidth: 50}}>{formatMessage({id: "product.list.header.name"})}</TableCell>
                                    <TableCell align="center"
                                               style={{minWidth: 30}}>{formatMessage({id: "product.list.header.releaseYear"})}</TableCell>
                                    <TableCell align="left"
                                               style={{minWidth: 10}}>{formatMessage({id: "product.list.header.price"})}</TableCell>
                                    <TableCell align="left"
                                               style={{minWidth: 20}}>{formatMessage({id: "product.list.header.manufacturer"})}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    key={data.id}
                                    hover role="checkbox"
                                    tabIndex={-1}
                                    onClick={() => productSelectionHandler(data)}
                                    onMouseEnter={(event) => productBinShowHandler(event, data)}
                                    onMouseLeave={productBinHideHandler}
                                >
                                    <TableCell align="left">{data.name}</TableCell>
                                    <TableCell align="center">{data.releaseYear}</TableCell>
                                    <TableCell align="left">{data.price}</TableCell>
                                    <TableCell align="left">{findManufacturerById(data.manufacturer_id)}</TableCell>
                                </TableRow>
                            </TableBody>

                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15, 20, 50]}
                            colSpan={3}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            labelRowsPerPage={formatMessage({id: "product.list.footer.rowsPerPage"})}
                            onPageChange={pageChangeHandler}
                            onRowsPerPageChange={rowsPerPageChangeHandler}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableContainer>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
            <Popper
                open={binProduct !== null}
                anchorEl={binAnchor}
                placement="right"
                onClose={productBinHideHandler}
                transition>
                {({TransitionProps}) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Fab color="secondary">
                            <DeleteButton product={binProduct} action={() => {
                                setBinProduct(null);
                                setData(getProductData(filter));
                            }}/>
                        </Fab>
                    </Fade>
                )}
            </Popper>
        </Paper>
    );
}

function TablePaginationActions({count, page, rowsPerPage, onPageChange}) {
    const theme = useTheme();

    return (
        <Box sx={{flexShrink: 0, ml: 2.5}}>
            <IconButton
                onClick={(event) => {
                    onPageChange(event, 0);
                }}
                disabled={page === 0}
            >
                {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
            </IconButton>
            <IconButton
                onClick={(event) => {
                    onPageChange(event, page - 1);
                }}
                disabled={page === 0}
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                onClick={(event) => {
                    onPageChange(event, page + 1);
                }}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </IconButton>
            <IconButton
                onClick={(event) => {
                    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
                }}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            >
                {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};