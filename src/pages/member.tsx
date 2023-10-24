/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-09 21:45:27
 * @LastEditors: goupeng 2953854684@qq.com
 * @LastEditTime: 2023-10-21 21:38:49
 * @FilePath: \my-app\src\pages\member.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useMemo } from 'react';
import Styles from '@/styles/member.module.scss'
import { useRouter } from 'next/router';
import { Image } from 'antd-mobile';


const member = () => {
    const myList = useMemo(() => {
        return [
            {
                icon: '/images/member/mycollection.png',
                name: '我的收藏',
                id: '0',
            },
            {
                icon: '/images/member/mysale.png',
                name: '我的出售',
                id: '1',
            },
            {
                icon: '/images/member/myorder.png',
                name: '我的订单',
                id: '2',
            }
        ]
    }, [])
    const router = useRouter()
    return (
        <div className={Styles.member}>
            <div className={Styles.header}>
                <div className={Styles.log}>
                    <span onClick={() => { router.push('./register') }}>
                        注册
                    </span>
                    <span>
                        /
                    </span>
                    <span onClick={() => { router.push('./login') }}>
                        登陆
                    </span>
                </div>
                <div className={Styles.profile}>

                </div>
            </div>
            <div className={Styles.nav}>
                {
                    myList.map((item, index) => {
                        return (
                            <div className={Styles.navBox} key={item.id}>
                                <div className={Styles.jumpBox}>
                                    <Image src={item.icon} className={Styles.myList} alt={item.name}></Image>
                                    <span>{item.name}</span>
                                </div>
                                {index != 0 ? (<span className={Styles.line}></span>) : <></>}
                            </div>
                        )
                    }
                    )}
            </div>
        </div>
    );
};

export default member;