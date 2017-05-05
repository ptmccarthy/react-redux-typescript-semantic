declare interface SiteDataItem {
  siteId?: number;
  nodeId?: number
  name?: string,
  urn?: string,
  creationDate?: number,
  lastModifiedDate?: number,
  active?: boolean,
  buildings?: Array<Object>
}

declare type SiteStoreState = SiteDataItem[];
