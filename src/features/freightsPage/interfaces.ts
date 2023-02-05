export enum freightsTypes {
    FREIGHTS_REQUEST = "FREIGHTS_REQUEST",
    FREIGHTS_SUCCESS = "FREIGHTS_SUCCESS",
    FREIGHTS_FAILURE = "FREIGHTS_FAILURE"
}

export enum filterTypes {
    DRIVER = "DRIVER",
    DESTINATION = "DESTINATION",
    ORIGIN = "ORIGIN",
    DATE = "DATE"
}

export interface FreightsState {
    success: boolean;
    freights: Freight[];
    pending: boolean;
}

export interface Freight {
    id: number;
    freightTable: string;
    travelValue: number;
    date: string;
    travelNumber: number;
    driver: string;
    plate: string;
    vechicleType: string;
    origin: string;
    destination: string;
    boxes: number;
    dellivery: number;
    km: number;
    travelType: string;
}

export interface RequestFilterPayload {
    filterType: string,
    filterText: string
}


export interface FreightsRequest {
    type: typeof freightsTypes.FREIGHTS_REQUEST;
    payload?: RequestFilterPayload
}
export interface FreightsRequest {
    type: typeof freightsTypes.FREIGHTS_REQUEST;
}

export interface FreightsSuccess {
    type: typeof freightsTypes.FREIGHTS_SUCCESS;
    payload: Freight[]
};

export interface FreightsFailure {
    type: typeof freightsTypes.FREIGHTS_FAILURE;
};

export type FreightsActions =
    | FreightsRequest
    | FreightsSuccess
    | FreightsFailure;



