import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "POST",
      data: { amount: priceForStripe, token },
    })
      .then((res) => {
        alert("Payment Success!");
      })
      .catch((e) => {
        console.log(e);
        alert(
          "There was an issue with the payment. Please use the provided credit card or try again later."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Pvt Ltd."
      shippingAddress
      billingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
}

export default StripeButton;
