export class ItemProps {
  public color?: "none" | "black" | "white";
  public brand?: "intel" | "amd";
}

export type Socket = "LGA 1151" | "LGA 1155";

export class CpuProps extends ItemProps {
  public socket?: Socket;
  public clockspeed_GHz?: number;
  //...
}

export class MotherboardProps extends ItemProps {
  public socket?: Socket;
  //...
}

//ram class
//gpu class
//motherboard class
//hard-drive class
