export interface DataType {
  thingName: string;
  shadow: {
    batLvl: number;
    connAt: string;
    disconnAt: string;
    disconnReason: number;
    connCardNum: number;
    connGW: string;
    rawSentCnt: number;
    remainData: number;
    rssi: number;
    fwVer: string;
    hwVer: number;
  };
}
export default DataType;
