import React from 'react';
import axios from 'axios';

const BaseUrl = 'https://apis.openapi.sk.com/tmap/';
const AppKey = 'l7xxaa988ec5c97f499186a2545e0ab433fe';

// https://apis.openapi.sk.com/tmap/pois?version={version}&page={page}&count={count}&searchKeyword={searchKeyword}&areaLLCode={areaLLCode}&areaLMCode={areaLMCode}&resCoordType={resCoordType}&searchType={searchType}&searchtypCd={searchtypCd}&radius={radius}&reqCoordType={reqCoordType}&centerLon={centerLon}&centerLat={centerLat}&multiPoint={multiPoint}&callback={callback}&appKey={appKey}

export async function requestPoi(searchText) {
  if (searchText == null || searchText == '') return;

  let url = BaseUrl + `pois?version=1&count=200&radius=0&appkey=${AppKey}&searchKeyword=${searchText}`;

  const response = await axios.get(url).catch(error => {
    console.error(error);
    throw error;
  });

  if (response == undefined) return null;

  console.log(
    'response totalCount >> ' + response.data.searchPoiInfo.totalCount,
  );
  console.log('response count >> ' + response.data.searchPoiInfo.count);
  console.log('response page >> ' + response.data.searchPoiInfo.page);

  return response.data.searchPoiInfo.pois.poi;
}
