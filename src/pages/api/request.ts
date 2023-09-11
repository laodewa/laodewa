import { Modal, Toast } from 'antd-mobile'
import axios from 'axios'
import nookies, { parseCookies, destroyCookie } from 'nookies'
import { NextPageContext } from "next"
import apiUrl from './apiUrl';
import Router from 'next/router';
import { ToastHandler } from 'antd-mobile/es/components/toast';
var loading: ToastHandler | null = null

type ParamsType = {
  [propName: string]: any
}

type OptionsType = {
  isLoading?: boolean,
  ctx?: NextPageContext
}




let tsyParms: TsyAppParamsType | null = null
let platform = '673_h5'

if (typeof window != 'undefined') {
  let localData = localStorage.getItem('tsyAppParams')
  if (localData != null) {
    tsyParms = JSON.parse(localData)
  }
  let from = localStorage.getItem('from')
  if (from != null) {
    platform = from
  }
}


export default function request(action: string, data: ParamsType, method = 'GET', options?: OptionsType) {
  let headers: ParamsType = {
    'Content-Type': 'application/json',
    'channel': tsyParms?.channel,
    'platform': platform
  }

  if (typeof window === 'undefined') {  //服务器端
    const cookies = nookies.get(options?.ctx)
    let token = String(cookies.token)
    if (token == 'undefined' || token == 'null') {
      token = ''
    }
    headers = {
      ...headers,
      'Authorization': 'Bearer ' + token,
    }
  } else if (typeof window != 'undefined') { //浏览器端
    const cookies = parseCookies()
    let token = String(cookies.token)
    if (token == 'undefined' || token == 'null') {
      token = ''
    }
    headers = {
      ...headers,
      'Authorization': 'Bearer ' + token,
    }
  }

  if (options?.isLoading) {
    if (typeof window != 'undefined') {
      loading = Toast.show({
        icon: 'loading',
        maskClickable: false,
        duration: 0
      })
    }
  }

  return new Promise<RequestResultType>((resolve, reject) => {
    axios({
      method: method,
      url: apiUrl.apiUrl + action,
      headers,
      [method == 'POST' ? 'data' : 'params']: data
    }).then((res) => {
      let data = res.data

      if (res.status == 200) {
        if (options?.isLoading) {
          loading && Toast.clear()
        }
        if (data.code == -1) {
          destroyCookie(null, 'token')
          if (typeof window != 'undefined') {
            localStorage.removeItem('token')
            if (action != apiUrl.getuserInfo && action != apiUrl.goodsInfo && action != apiUrl.loginShowAuthorize && action != apiUrl.loginAuthorize) {
              Toast.show({ content: '请登录再来操作' })
              Router.push({ pathname: '/login', query: { returnUrl: location.href } })
            }
          }
          reject(data);
          return
        }

        if (data.code < 0 || data.code == 1 || data.code == 10006 || data.code == 10002) {
          if (typeof window != 'undefined') {
            Toast.show({
              content: data.msg,
            })
          }
          resolve(data);
          return
        }

        resolve(data)
      } else {
        reject(data);
      }
    })
  })


}

/**
 * 
 * @param file 上传的文件
 * @param path 保存目录  default: 'app/trade'
 * @param name 字段名    default: 'file'
 */
export const uploadFile = (file: File, path: string = 'app/trade', name: string = 'file', isLoading: boolean = true) => {
  const cookies = parseCookies()
  let token = cookies.token
  const formData = new FormData()
  formData.append(name, file)
  formData.append('path', path)
  let loading: ToastHandler | null = null
  if (isLoading) {
    loading = Toast.show({
      icon: 'loading',
      maskClickable: false,
      duration: 0
    })
  }

  return new Promise<RequestResultType>((resolve, reject) => {
    axios.post(apiUrl.apiUrl + apiUrl.uploadImg, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'channel': tsyParms?.channel,
        'platform': platform,
        'Authorization': 'Bearer ' + token,
      }
    }).then((res: any) => {
      if (isLoading) {
        loading && loading.close()
      }
      resolve(res.data)
    })
  })
}
