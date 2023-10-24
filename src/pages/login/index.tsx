/*
 * @Author: peng 1574714104@qq.com
 * @Date: 2023-10-10 22:02:07
 * @LastEditors: peng 1574714104@qq.com
 * @LastEditTime: 2023-10-24 20:58:00
 * @FilePath: \project2\my-app\src\pages\login\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React, { useRef, useState } from 'react';
import Styles from './style.module.scss'
import { useRouter } from 'next/router';
import { EyeOutline, EyeInvisibleOutline } from 'antd-mobile-icons'

const index = () => {
    const [visible, setVisible] = useState(true)
    const eyeChangeHandle = () => {
        setVisible(!visible)
    }
    const router = useRouter()
    return (
        <div className={Styles.main}>
            <div className={Styles.header}>
                欢迎
            </div>
            <input type="email" placeholder="请输入邮箱" className={Styles.email} />
            <input type={!visible ? 'password' : 'text'} placeholder="请输入密码" className={Styles.password} />
            {
                visible ? <EyeOutline onClick={eyeChangeHandle} /> : <EyeInvisibleOutline onClick={eyeChangeHandle} />
            }
            <div className={Styles.rec} onClick={() => { router.push('./passwordrec') }}>
                忘记密码?
            </div>
            <div className={Styles.agree}>
                同意
                <span className={Styles.userAgt}>
                    《用户协议》
                </span>
                和
                <span className={Styles.privacyAgt}>
                    《隐私政策》
                </span>
                <input type="checkbox" className={Styles.checkbox} />
            </div>
            <div className={Styles.loginBtn}>
                登陆
            </div>
            <div className={Styles.register}>
                还没有账号?
                <span className={Styles.registerJp} onClick={() => { router.push('./register') }}>
                    去注册
                </span>
            </div>
        </div>
    );
};

export default index;