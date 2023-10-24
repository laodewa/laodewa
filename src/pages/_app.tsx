/*
 * @Author: goupeng 2953854684@qq.com
 * @Date: 2023-09-13 18:48:22
 * @LastEditors: goupeng 2953854684@qq.com
 * @LastEditTime: 2023-09-13 20:00:33
 * @FilePath: \my-app\src\pages\_app.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AppProps } from 'next/app';
import React from 'react';
import "../styles/global.scss"

const App = ({ pageProps, Component }: AppProps) => {
    return (
        <Component {...pageProps} style={{ direction: 'rtl' }} />
    );
};

export default App;
