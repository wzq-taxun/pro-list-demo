/*
 * @Author: weizhiqiang
 * @Date: 2023-12-06 22:33:06
 * @LastEditors: weizhiqiang
 * @LastEditTime: 2023-12-06 23:14:36
 * @FilePath: /list-demo/src/helper.js
 * @Description: 辅助函数
 */

import dayjs from 'dayjs';
/**
 * @description: 处理字段
 * @param {Array} sorceData
 * @return {Array}
 */
export const handDodatas = (sorceData) => {
  return sorceData.map((ite) => {
    let { time, restTime, ...otherda } = ite;
    if (restTime) {
      otherda['restTime'] = dayjs(Date.now() + restTime * 1000).valueOf();
    }
    return {
      ...otherda,
      timeStart: dayjs(time[0]).format('MM.DD	HH:mm'),
      timeEnd: dayjs(time[1]).format('MM.DD	HH:mm'),
    }
  })

}