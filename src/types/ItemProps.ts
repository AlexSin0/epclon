export class ItemProps {
  public color?: "none" | "black" | "white";
  public brand?: "intel" | "amd" | "Asus" | "MSI" | "Adata"| "Corsair";
}

export type Socket = "LGA 1151" | "LGA 1155";

export type RamType = "DDR5" | "DDR4" | "DDR3";

export type GpuCableType = "6-pin" | "8-pin" | "6+2-pin";

export class CpuProps extends ItemProps {
  public socket?: Socket;
  public clockspeed_GHz?: number; 
  public model?: "Ryzen 9" | "Ryzen 7"| "Ryzen 5" | "Ryzen 3" | "Core i9" | "Core i7" | "Core i5" | "Core i3";
  public thread?: number; 
  public coresNumber?: number;
  //...
}

export class MotherboardProps extends ItemProps {
  public socket?: Socket;
  public ramType?: RamType;
  public ramSlots?: number;
  //...
}

export class RamProps extends ItemProps {
  public ramType?: RamType;
  public frequency_GHz?: number;
  public memory_GB?: number;
}

export class PowerUnitProps extends ItemProps {
  public power_watt?: number;
  public gpuCableType?: GpuCableType;
  //
}


//ram class
//gpu class
//motherboard class
//hard-drive class

