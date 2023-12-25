import request from "@/utils/request";

/**
 * @description: 获取token
 * @param {*}
 * @return {*}
 */
export function getToken(data) {
  return request({
    url: "/sys-auth/oauth/token",
    method: "post",
    data: data,
  });
}

// 获取园区办公统计数据
export const getBanGongData = () => {
  return request({
    url: `/statistics/project/1ba7a619-4998-44b4-8f98-9f580a239b87/detail`,
    method: "get",
  });
};
// 获取园区商业汇总数据
export const getParkShopsData = () => {
  return request({
    url: `/statistics/project/4de1a5cb-a420-4717-8598-7f136ff53ffe/detail`,
    method: "get",
  });
};
//获取各楼栋租赁情况 通过params传递的id不同区分是商业还是非商业
export const getParkBusiness = (params) => {
  return request({
    url: `/statistics/buildings/detail`,
    method: "get",
    params,
  });
};

// 租控详情 通过楼的id去调用 能得到这栋楼下面所有的楼层信息
export const getRentControlById = (id) => {
  return request({
    url: `/rentControl/${id}/buildingInfo`,
    method: "get",
  });
};
// 获取办公意向的数据
export const getIntentionBanGongData = (id) => {
  return request({
    url: `${window.HostConfig.backend_plus_url}/adas/industry/intention?projectId=1ba7a619499844b48f989f580a239b87`,
    method: "get",
  });
};
// 获取商业意向的数据
export const getIntentionShangYeData = (id) => {
  return request({
    url: `${window.HostConfig.backend_plus_url}/adas/industry/intention?projectId=4de1a5cba420471785987f136ff53ffe`,
    method: "get",
  });
};
// 获取所有的意向数据
export const getIntentionAllData = (params) => {
  return request({
    url: `${window.HostConfig.backend_plus_url}/adas/industry/intention`,
    method: "get",
    params,
  });
};

// 获取房间
export const getFangJianData = (data) => {
  return request({
    url: `${window.HostConfig.private_backend}/merchant/getLeaseInfoByFloorNum`,
    method: "post",
    data,
  });
};
// 获取地下一层商业环廊
export const getHuanLangData = () => {
  return request({
    url: `${window.HostConfig.private_backend}/merchant/getHuanLangLeaseInfo`,
    method: "get",
  });
};

// 获取已租的企业
export const getYiZuGongSiData = (params) => {
  return request({
    url: `${window.HostConfig.backend_plus_url}/adas/industry/customer`,
    method: "get",
    params,
  });
};

// 获取已租的企业入住人数
export const getRuZhuRenShuData = (params) => {
  return request({
    url: `${window.HostConfig.backend_plus_url}/adas/industry/ruzhurenshu`,
    method: "get",
    params,
  });
};

// 获取意向企业信息
export const getIntentionInfoData = (params) => {
  return request({
    url: `${window.HostConfig.private_backend}/merchant/getIntentionInfo`,
    method: "get",
    params,
  });
};

// 录入意向企业信息
export const setIntentionInfoData = (data) => {
  return request({
    url: `${window.HostConfig.private_backend}/merchant/setIntentionInfo`,
    method: "post",
    data,
  });
};
// 获取已租的企业入住人数
export const getZiDianData = (params) => {
  return request({
    url: `${window.HostConfig.backend_plus_url}/adas/industry/selectData`,
    method: "get",
    params,
  });
};
// 意向信息
export const getBuildingCondtionData = (params) => {
  return request({
    url: `${window.HostConfig.private_backend}/merchant/getBuildingCondtion`,
    method: "get",
    params,
  });
};
