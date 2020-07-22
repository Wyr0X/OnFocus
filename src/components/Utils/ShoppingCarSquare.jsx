import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { setFavorite, deleteFavorite, totalShopping } from "../../actions";
import ShoppingCar from "../../assets/static/images/svg/shopping-car-squad.svg";
import ShoppingCarSelected from "../../assets/static/images/svg/shopping-car-squad-black.svg";

import "../../assets/styles/components/Utils.scss";

const ShoppingCarSquare = (props) => {
  const course = props.course;

  const {
    category,
    course_id,
    creation_date,
    description,
    discount,
    duration,
    entity_status,
    featured_image,
    module,
    name,
    price,
    status,
    students,
    teacher,
    video_intro,
  } = course;

  const [isToggle, setIsToggle] = useState(false);

  const handleShopping = () => {
    setIsToggle(!isToggle);
    props.setFavorite({
      category,
      course_id,
      creation_date,
      description,
      discount,
      duration,
      entity_status,
      featured_image,
      module,
      name,
      price,
      status,
      students,
      teacher,
      video_intro,
    });
  };

  const handleDeleteShopping = (course_id) => {
    setIsToggle(!isToggle);
    props.deleteFavorite(course_id);
  };
  // <----------Se debe refactorizar mas adelante----------->

  let totalWithOutDiscount = 0;
  let totalDiscount = 0;
  const totalWithOutDiscountshoppingcar = props.shoppingcar.map(
    (item) => (totalWithOutDiscount += item.price)
  );
  const discountCourse = props.shoppingcar.map(
    (item) => (totalDiscount += item.discount / props.shoppingcar.length)
  );

  let totalToPay = parseInt(
    totalWithOutDiscount - (totalWithOutDiscount * totalDiscount) / 100
  );

  useEffect(() => {
    props.totalShopping(totalToPay);
  });
  // <----------Se debe refactorizar mas adelante----------->

  return (
    <>
      {isToggle ? (
        <div
          onClick={() => handleDeleteShopping(course_id)}
          className={" discovery__box__info__icon" + " " + props.class}
          alt="Shopping Car"
        >
          <img
            src={ShoppingCarSelected}
            alt="Ícono de Carrito de compra seleccionado"
          />
        </div>
      ) : (
        <div
          onClick={handleShopping}
          className={" discovery__box__info__icon" + " " + props.class}
          alt="Shopping Car"
        >
          <img
            src={ShoppingCar}
            alt="Ícono de Carrito de compra seleccionado"
          />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    shoppingcar: state.shoppingcar || {},
    total: state.total,
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
  totalShopping,
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCarSquare);
