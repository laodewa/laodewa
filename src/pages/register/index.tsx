/*
 * @Author: goupeng 2953854684@qq.com
 * @Date: 2023-10-10 19:36:41
 * @LastEditors: goupeng 2953854684@qq.com
 * @LastEditTime: 2023-10-15 22:54:35
 * @FilePath: \project2\my-app\src\pages\register\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import Styles from './style.module.scss'
import Image from 'next/image';
import icon from '../../../public/images/register/back.png'
const index = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.centerBox}>
                <div className={Styles.title}>
                    注册
                </div>
                <Image
                    className={Styles.iconImg}
                    src={icon}
                    alt='back icon'
                />
            </div>
            <span className={Styles.notice}>
                验证码会发送至邮箱
            </span>
            <input type="email" placeholder='请输入邮箱' className={Styles.email} />
            <div className={Styles.captcha}>
                <div className={Styles.words}>
                    <div className={Styles.time}>
                        60s
                    </div>
                    <div>
                        请输入验证码
                    </div>
                </div>
                <input type="number" placeholder='请输入验证码' className={Styles.number} />
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
                注册
            </div>
        </div>

    );
};

export default index;