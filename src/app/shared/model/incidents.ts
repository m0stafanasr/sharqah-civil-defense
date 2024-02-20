export class IncidentsModel {
    id:string='';
    callerName:string='';
    callerNumber:string='';
    status:string='';
    areaId:number|null=null;
    areaName:string|null=null;
    incidentType:string|null=null;
    incidentCategory:string|null=null;
    locationType:string|null=null;
    entityCategory:string|null=null;
    location:string='';
    priority:string='';
    priorityColor:string='';
    support:string[]=[];
    latLong:number[]=[];
    dispatchCode:string='';
    comments:comments[ ]=[];
    assignedStations:assignedStations[]=[];
    statuses:statuses[ ]=[]
}

export class statuses {
    status:string='';
    statusTime:string='';
    statusActualTime:string='';
    dispatcherNo:string='';
    user:string=''
}

export class assignedStations{
    stationName:string='';
    currentStatusId:string='';
    statusChangeDate:Date=new Date();
    stationId:string=""
}

export class comments{
    date:string='';
    comment:string='';
    createdBy:string=''
}