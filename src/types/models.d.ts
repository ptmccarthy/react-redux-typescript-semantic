declare interface SiteDataItem {
  active?: boolean,
  buildings?: Array<Building>
  creationDate?: number,
  lastModifiedDate?: number,
  name?: string,
  nodeId?: number
  siteId?: number;
  urn?: string,
}

declare interface Building {
  active?: boolean,
  buildingId?: number,
  creationDate?: number,
  lastModifiedDate?: number,
  name?: string,
  nodeId?: number,
  urn?: string,
  workCenters?: Array<WorkCenter>
}

declare interface WorkCenter {
  active?: boolean,
  creationDate?: number,
  lastModifiedDate?: number,
  name?: string,
  nodeId?: number,
  urn?: string,
  workCenterId?: number,
}

declare type SiteStoreState = SiteDataItem[];
