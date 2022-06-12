import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    container: {
        minHeight: "60%",
        paddingTop: "64px",
        background: 'rgba(192,192,192, 0.8)',
        maxWidth: "80%",
        minWidth: "80%",
        maxHeight: "70%",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "30px",
      },
      textField: {
            maxWidth: "80%",
            width: "70%",
      },
}));
