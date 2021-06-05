import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Iz46GSIhLr0CHuKCpRwdXtlhJz0j6liznIuI0QcwRDoUuNBttOuobOHyKfk54wLn8RREkwJniD47fS7hIfy1jT5005SMYDG58";

  const onToken = (token) => {
    alert("Payment Successful");
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
