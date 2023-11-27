export class ItemProps {
  public color?: "none" | "black" | "white";
  public brand?: "intel" | "amd";
}

export type Socket = "LGA 1151" | "LGA 1155" | "AM5" | "AM4";

export class CpuProps extends ItemProps {
  public socket?: Socket;
  public clockspeed_GHz?: number;
  //...
}

export class MotherboardProps extends ItemProps {
  public socket?: Socket;
  //...
}

export type PCI_version = "PCIe 1.0" | "PCIe 2.0" | "PCIe 3.0" | "PCIe 4.0" | "PCIe 5.0";

export class GpuProps extends ItemProps {
  public gpumemory_Mb?: number;
  public gpumemory_MHz?: number;
  public gpumodel?: string;
  public gpumemory_type?: string;
  public pcie?: PCI_version;
}

export class HardDriveProps extends ItemProps {
  public harddrivememory_Gb?: number;
  public readspeed_MBs?: number;
  public writespeed_MBs?: number;
  public harddrivetype?: string;
  public harddriveintrface?: string;
}

//ram class Vasa
//gpu class 
//motherboard class Vasa
//hard-drive class
