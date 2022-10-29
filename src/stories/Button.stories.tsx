import React from "react";
import Button from "../components/Button/Button";
import { LightningBoltIcon } from "@radix-ui/react-icons"

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

export const ButtonOutlineDisabled = () => {
  return (<Button mode="disabled">Add to calendar</Button>)
}

export const ButtonPrimaryDisabled = () => {
  return (<Button mode="disabledPrimary">Add to calendar</Button>)
}

export const ButtonIconOutline = () => {
  return (<Button content="icon" mode="outline"><LightningBoltIcon /></Button>)
}


export const ButtonIconPrimary = () => {
  return (<Button content="icon" mode="primary"><LightningBoltIcon /></Button>)
}


