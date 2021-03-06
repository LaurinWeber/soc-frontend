import {grayColor,  title} from "../../mainStyles";


const contactStyle = {
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    description: {
        color: "#999"
    },
    button: {
        minHeight: "auto",
        minWidth: "auto",
        backgroundColor: grayColor,
        color: "#FFFFFF",
        boxShadow:
            "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
        border: "none",
        borderRadius: "3px",
        position: "relative",
        padding: "12px 30px",
        margin: ".3125rem 1px",
        fontSize: "12px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition:
            "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover,&:focus": {
            color: "#FFFFFF",
            backgroundColor: grayColor,
            boxShadow:
                "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            position: "relative",
            display: "inline-block",
            top: "0",
            fontSize: "1.1rem",
            marginRight: "4px",
            verticalAlign: "middle"
        },
        "& svg": {
            position: "relative",
            display: "inline-block",
            top: "0",
            width: "18px",
            height: "18px",
            marginRight: "4px",
            verticalAlign: "middle"
        },
        "&$justIcon": {
            "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                marginRight: "0px",
                position: "absolute",
                width: "100%",
                transform: "none",
                left: "0px",
                top: "0px",
                height: "100%",
                lineHeight: "41px",
                fontSize: "20px"
            }
        }
    },
    formControl: {
        width: "20px"
    },
    inputField: {
        width: "100%",
        marginBottom: "10px"
    },

    inputControl: {
        fontSize: '12px',
        width: "60%",
        border: "0.1px solid #ccc",
        borderRadius: "3px"
    },
    inputWrapper: {},
    itemGrid: {
        marginLeft: "auto",
        marginRight: "auto"
    },

    justifyCenter: {
        justifyContent: "center !important"
    },
    socials: {
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
        color: "#999"
    },
    margin5: {
        margin: "5px"
    }
};

export default contactStyle;
