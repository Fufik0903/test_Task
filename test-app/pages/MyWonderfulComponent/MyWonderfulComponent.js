import React, {useState, useEffect} from 'react';
import {Grid} from "@mui/material";
import { makeStyles } from '@material-ui/styles';

const useStyles  = makeStyles({
    title :{
        color: 'red'
    }
})
function MyWonderfulComponent(props) {
    const classes = useStyles();
    const {id, children, options, count, ...other} = props;
    const defaultSumm = isNaN(count) ? 0 : +count;
    const [summ, setSumm] = useState(defaultSumm);

    useEffect(() => {
        if (id && options?.params?.fields?.isDynamic) {
            setSumm(prevState => (prevState + 1));
        }
    }, []);

    return (
        <Grid>
            <h1 className={classes.title}>Hello World!</h1>
            <Grid>
                <Grid item xs={12}>{children}</Grid>
                <Grid>{summ}</Grid>
            </Grid>
        </Grid>
    );
}

export default MyWonderfulComponent;