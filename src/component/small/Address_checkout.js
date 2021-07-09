import style from "../../style/checkout.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const Address_checkout = (props) => {
  return (
    <div className={style.checkout_address}>
      <h2>Address </h2>
      <form className={style.address_form} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Street / Mahaullah"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Town / Village"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="District" variant="outlined" />
        <Button
          variant="contained"
          color="primary"
          style={{
            width: "60%",
            backgroundColor: "#505050",
            flex: "1",
            alignSelf: "center",
          }}
          onClick={props.next}
        >
          Continue
        </Button>
      </form>
    </div>
  );
};
export default Address_checkout;
