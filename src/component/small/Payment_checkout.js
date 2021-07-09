import style from "../../style/checkout.module.css";
import Button from "@material-ui/core/Button";
const Payment_checkout = () => {
  return (
    <div className={style.checkout_payment}>
      <h2>Payment </h2>
      API INTEGRATION Coming Soon <br /> <br />
      <Button
        variant="contained"
        color="primary"
        style={{
          width: "200px",
          backgroundColor: "#00b5ff",
          flex: "1",
          alignSelf: "center",
        }}
      >
        Pay
      </Button>
    </div>
  );
};
export default Payment_checkout;
