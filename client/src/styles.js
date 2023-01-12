import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    pagination: {
        borderRadius: 17,
        marginTop: "1rem",
        padding: "16px",
        backgroundColor: "#f2fefe",
    },
    MuiGridSpacingXs3: {
        margin: 'auto',
    },
    [theme.breakpoints.down("xs")]: {
        mainContainer: {
            flexDirection: "column",
        },
    },
    mainContainer: {
        borderRadius: 15,
        margin: "0 30px 0 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
        minHeight: "75vh"
            // border: '1px red solid',
    },
    projectsContainer: {
        borderRadius: 15,
        margin: "0 30px 0 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
        minHeight: "75vh"
            // border: '1px red solid',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
        myPostsMainContainer: {
            flexDirection: "column-reverse",
            paddingBottom: "50px",
        },
    },

    [theme.breakpoints.down("xs")]: {
        pagination: {
            marginTop: "1rem",
            // padding: '16px',
            marginRight: "1.7em",
        },
    },
}));