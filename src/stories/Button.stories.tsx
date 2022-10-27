import React from "react";
import Button from "../components/Button/Button";

export default {
  title: "Components/Buttons",
  component: Button,
};

export const ButtonDefault = () => {
  return (<Button>
    Add to calendar
  </Button>
  )
}

export const ButtonSecondary = () => {
  return (<Button mode="secondary">
    Add to calendar
  </Button>
  )
}

export const ButtonOutline = () => {
  return (<Button mode="outline">
    Add to calendar
  </Button>
  )
}
