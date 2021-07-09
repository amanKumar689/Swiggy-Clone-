import style from "../../style/checkout.module.css";

const Auth_checkout = (props) => {
  return (
    <>
      {" "}
      <div className={style.checkout_auth}>
        <h2>ACCOUNT</h2>
        <span>
          To place your order now , log in to your existing account or sign up
        </span>
        <nav>
          <button
            onClick={() => {
              props.sidebarToggle(true, "L", false);
            }}
          >
            Have an account ? <br /> LOGIN IN
          </button>
          <button
            onClick={() => {
              props.sidebarToggle(true, "S", false);
            }}
          >
            New to swiggy ? <br /> SIGN UP
          </button>
        </nav>
      </div>{" "}
    </>
  );
};
export default Auth_checkout;
