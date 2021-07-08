import style from "../style/restaurant.module.css";
import style_2 from "../style/home.module.css";
import style_3 from "../style/sidebar.module.css";
import effectStyle from "../style/effect.module.css";
import $ from "jquery";


// DOM MANIPULATION
export function loadScriptForSortBy() {
  const sortByBoxItems = document.getElementsByClassName(
    effectStyle.Hover_border_bottom
  );

  $(sortByBoxItems).click(function (elem) {
    $(sortByBoxItems).removeClass("border_bottom");
    elem.target.classList.add("border_bottom");
  });
}

export function loadScriptFor_black_background() {
  const HOME_AUTH_BTN = document.getElementsByClassName(style_2.auth)[0]
    .children;
  console.log("loaded:--> ", HOME_AUTH_BTN);
  $(HOME_AUTH_BTN).click(function (elem) {
    $(HOME_AUTH_BTN).removeClass(effectStyle.background_black);
    elem.target.classList.add(effectStyle.background_black);
  });
  $("#" + style_3.close).click(function () {
    console.log("close");
    $(HOME_AUTH_BTN).removeClass(effectStyle.background_black);
  });
}

export function banner_effect() {

  const elem = document.getElementsByClassName(style.restaurant_desc)[0];

  const targetElem = document.getElementsByClassName(style.banner_body)[0];
  elem.onscroll = () => {
    if (elem.scrollTop >= 50) {
      targetElem.style.height = "200px";

      targetElem.classList.add(style.adjust_banner);
    } else {
      targetElem.style.height = "300px";
      targetElem.classList.remove(style.adjust_banner);
    }
  };


} 

export function category_highLighter () {

  const restaurant = document.getElementsByClassName(style.restaurant_desc)[0];
  const items = document.getElementsByClassName("EachItems");

  const EachItem = document.getElementsByClassName(style.itemType)[0]
    .children[0];
  let n = 0; // current_box --> when i pass this --> go to next
  let shouldCheck = 0;
  let displace = 0;
  $(restaurant).scroll(function () {
    const ElementEnd = items[n].offsetHeight + displace;
    const cursor = restaurant.scrollTop;
    if (cursor >= ElementEnd) {
      // after maxScroll
      /*
	  console.log(`reached element ${n+1} and now wait to cross ${n+2}`)
        */
      console.log("first", n, ElementEnd);
      shouldCheck = true;
      $(EachItem.children[n]).removeClass(style.highlighter);
      $(EachItem.children[n + 1]).addClass(style.highlighter);
      displace += items[n].offsetHeight;

      if (n + 1 <= items.length - 1) {
        n += 1;
      }
    } else if (cursor <= ElementEnd) {
      // wait for the Each Box in previous Way
      if (shouldCheck && n == 0) {
        console.log(`at 0 pos`);

        $(EachItem.children[n]).addClass(style.highlighter);
        $(EachItem.children[n + 1]).removeClass(style.highlighter);
      } else if (n >= 1) {
        console.log("2nd", n, ElementEnd);
        /*		  console.log(`within element ${n} and wait to reach ${n-1}`)
         */
        $(EachItem.children[n]).addClass(style.highlighter);
        $(EachItem.children[n + 1]).removeClass(style.highlighter);
        displace -= items[n - 1].offsetHeight;

        if (n - 1 >= 0) {
          n -= 1;
        }
      }
    }
  });

} 

export  function logout_handler(props ,menubar_close) {
	 
	 // Let's do some fun with logout handler
	 
	 props.auth_handler(false);
	 localStorage.removeItem('token')
	 menubar_close()
	 
 }
 export   function sidebarHandler (props,menubar_close) {
 
    props.sidebarToggle(!props.sidebarState.status,'L')
	 menubar_close()
  
  }
