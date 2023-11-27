export class ItemProps {
  public color?: "none" | "black" | "white";
  public brand?: "intel" | "amd" | "Asus" | "MSI" | "Adata"| "Corsair";
}

export type Socket = "LGA 1151" | "LGA 1155" | "AM5" | "AM4";

export type RamType = "DDR5" | "DDR4" | "DDR3";

export type GpuCableType = "6-pin" | "8-pin" | "6+2-pin";

export type PCI_version = "PCIe 1.0" | "PCIe 2.0" | "PCIe 3.0" | "PCIe 4.0" | "PCIe 5.0";

export class CpuProps extends ItemProps {
  public socket?: Socket;
  public powerUsage_W?: number;
  public clockspeed_GHz?: number; 
  public model?: string;
  public thread?: number; 
  public coresNumber?: number;
}

export class MotherboardProps extends ItemProps {
  public socket?: Socket;
  public ramType?: RamType;
  public pcie?: PCI_version;
  public ramSlots?: number;
  public powerUsage_W?: number;
  public model?: string;
}

export class RamProps extends ItemProps {
  public ramType?: RamType;
  public frequency_GHz?: number;
  public memory_Gb?: number;
  public powerUsage_W?: number;
  public model?: string;
}

export class PowerUnitProps extends ItemProps {
  public gpuCableType?: GpuCableType;
  public power_W?: number;
  public model?: string;
}

export class GpuProps extends ItemProps {
  public pcie?: PCI_version;
  public cableType?: GpuCableType;
  public memory_Mb?: number;
  public clockspeed_MHz?: number;
  public model?: string;
  public memory_type?: string;
}

export class HardDriveProps extends ItemProps {
  public memory_Gb?: number;
  public readSpeed_MBs?: number;
  public writeSpeed_MBs?: number;
  public type?: string;
  public intrface?: string;
  public powerUsage_W?: number;
  public model?: string;
}

//ram class Vasa
//gpu class 
//motherboard class Vasa
//hard-drive class

