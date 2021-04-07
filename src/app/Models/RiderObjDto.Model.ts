import { document } from "./RiderDocuments.Model";
import { riderdata } from "./Riders.Modle";
import { serviceArea } from "./RiderServiceArea.Model";

export class RiderObjDto{

    documents:document[]
    serviceArea:serviceArea
    riderdata:riderdata
    }