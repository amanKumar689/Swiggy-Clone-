import React from "react";
import food_1 from "../illustrator/images/3rd.jpg";
import $ from "jquery";
import style from "../style/banner.module.css";
const First = () => {
  /*  Let build animate_toggler */

  $(document).ready(function () {});

  return (
    <>
      <section className={style.left}>
        <ul>
          <li> offer 1</li>
          <li> offer 2</li>
          <li> offer 3 </li>
          <li> offer 4</li>
        </ul>
      </section>

      <section className={style.right}>
        <div className={style.exposer}>
          <div className={style.image}>
            <img src={food_1} />
          </div>
          <div className={style.data}>
            <p>
              <span> CHICKEN BIRYANI </span> <br />
              GRAB 50 % OFF USE COUPON SWIGGYIT{" "}
            </p>
          </div>
        </div>
        <nav>button </nav>
      </section>
    </>
  );
};
export default First;
