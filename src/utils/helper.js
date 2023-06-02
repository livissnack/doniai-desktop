export function getResourceType(video_url) {
  let extName = getFileExt(video_url);

  if (["m3u8"].includes(extName)) {
    return "hls";
  }

  if (["flv"].includes(extName)) {
    return "flv";
  }

  if (["php"].includes(extName)) {
    return "php";
  }

  if (["mp4", "ogg", "webm", "mkv", "3gp", "avi"].includes(extName)) {
    return "video";
  }

  return "未知的直播类别";
}

export function isLive(video_url) {
  let extName = getFileExt(video_url);
  return ["m3u8", "flv"].includes(extName);
}

export function isVideo(video_url) {
  let extName = getFileExt(video_url);
  return ["mp4", "ogg", "webm", "mkv", "3gp"].includes(extName);
}

export function getUrlParams(url = "") {
  const result = {};
  if (url) {
    const queryIndex = url.lastIndexOf("?");
    if (queryIndex > -1) {
      url
        .substr(queryIndex + 1)
        .split("&")
        .forEach(param => {
          const keys = param.split("=");
          if (keys.length >= 2) result[keys[0]] = keys[1];
        });
    }
  }
  return result;
}

export function sliceThreeArray(data) {
  let result = [];
  for (let i = 0, length = data.length; i < length; i += 3) {
    result.push(data.slice(i, i + 3));
  }
  return result;
}

export function timeToDate(time) {
  let diff = new Date().getTime() - new Date(time);
  let days = Math.floor(diff / (24 * 3600 * 1000));
  let leave1 = diff % (24 * 3600 * 1000);
  let hours = Math.floor(leave1 / (3600 * 1000));
  let leave2 = leave1 % (3600 * 1000);
  let minutes = Math.floor(leave2 / (60 * 1000));
  let leave3 = leave2 % (60 * 1000);
  let seconds = Math.round(leave3 / 1000);
  let returnStr = "";
  if (days > 0) {
    returnStr = days + "天前";
  } else {
    if (hours > 0) {
      returnStr = hours + "小时前";
    } else {
      if (minutes > 0) {
        returnStr = hours + "分钟前";
      } else {
        if (seconds > 0) {
          returnStr = seconds + "秒前";
        }
      }
    }
  }
  return returnStr;
}

export function isEmpty(value) {
  if (value === "" || value === undefined || value === [] || value === null) {
    return true;
  }
  return false;
}

export function timeNow() {
  let time = new Date();
  let year = time.getFullYear();
  let month =
    time.getMonth() + 1 < 10
      ? "0" + (time.getMonth() + 1)
      : time.getMonth() + 1;
  let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
  let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  let minute =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  let second =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

export function year() {
  let time = new Date();
  return time.getFullYear();
}

export function month() {
  let time = new Date();
  return time.getMonth() + 1 < 10
    ? "0" + (time.getMonth() + 1)
    : time.getMonth() + 1;
}

export function day() {
  let time = new Date();
  return time.getDate();
}

export function monningAndAfternoonText() {
  let time = new Date();
  let hour = time.getHours();
  return hour > 12 ? "下午" : "上午";
}

export function friendlyTime(stringTime) {
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let week = day * 7;
  let month = day * 30;
  let time1 = new Date().getTime(); //当前的时间戳
  let time2 = Date.parse(new Date(stringTime)); //指定时间的时间戳
  let time = time1 - time2;

  let result = null;
  if (time < 0) {
    result = "--";
  } else if (time / month >= 1) {
    result = parseInt(time / month) + "月前";
  } else if (time / week >= 1) {
    result = parseInt(time / week) + "周前";
  } else if (time / day >= 1) {
    result = parseInt(time / day) + "天前";
  } else if (time / hour >= 1) {
    result = parseInt(time / hour) + "小时前";
  } else if (time / minute >= 1) {
    result = parseInt(time / minute) + "分钟前";
  } else {
    result = "刚刚";
  }
  return result;
}

export function getFileExt(fileName) {
  let url = fileName;
  if (url.indexOf("?") != -1) {
    url = url.split("?")[0];
  }
  return url
    .split(".")
    .pop()
    .toLowerCase();
}

export const timestampToTimeByFormat = (
  timestamp,
  format = "yyyy-MM-dd hh:mm:ss"
) => {
  if ((timestamp + "").length === 10) timestamp *= 1000;
  const date = new Date(timestamp);
  var o = {
    "M+": date.getMonth() + 1, // month
    "d+": date.getDate(), // day
    "H+": date.getHours(), // hour
    "h+": date.getHours(), // hour
    "m+": date.getMinutes(), // minute
    "s+": date.getSeconds(), // second
    "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds(), // 毫秒
    w: date.getDay() // 周几
  };

  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
};

export function throttle(func, wait) {
  let timeout = null;
  let result = null;
  let previous = 0; //=> 上次执行的时间点
  return function(...args) {
    let now = new Date(),
      context = this;
    //=> remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间间隔
    let remaining = wait - (now - previous);
    if (remaining <= 0) {
      clearTimeout(timeout);
      previous = now;
      timeout = null;
      result = func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = new Date();
        timeout = null;
        result = func.apply(context, args);
      }, remaining);
    }
    return result;
  };
}

/**
 * 将多行文本按换行符分隔数组
 * @param str
 */
export function snsArr(str) {
  //转换成数组
  let snsArr = str.split(/[(\r\n)\r\n]+/)
  let newArr = []
  //删除空项
  snsArr.forEach((item, index)=> {
    let curItem = item.trim()
    console.log(curItem, index, 'ppp---')
    if (!isEmpty(curItem)) {
      newArr.push(curItem)
    }
  })
  return newArr
}

/**
 * 检查字符串是否是json
 * @param value
 * @returns {boolean}
 */
export function isJson(value) {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

/**
 * base64加密
 * @param str
 */
export function base64_encode(str) {
  let wait_str = window.encodeURIComponent(str)
  return window.btoa(wait_str)
}

/**
 * base64解密
 * @param str
 */
export function base64_decode(str) {
  let wait_str = window.decodeURIComponent(str)
  return window.atob(wait_str)
}