"use client";

import { FacebookFilled, TikTokFilled, YoutubeFilled } from '@ant-design/icons';
import { FloatButton, ConfigProvider } from 'antd';

export default function FloatingButtons() {
  return (
    <ConfigProvider 
    theme={{
        token: {

        },
      }}>
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
        <FloatButton icon={<FacebookFilled style={{ fontSize: '20px' }}/>} onClick={() => window.open('https://www.facebook.com/Comolaundryplace')}  className='w-[60px] h-[60px] bg-[#1877F2]' />
        <FloatButton icon={<YoutubeFilled style={{ fontSize: '20px' }}/>} onClick={() => window.open('https://www.youtube.com/@comothailand')}  className='w-[60px] h-[60px] bg-[#FF0000]' />
        <FloatButton icon={<TikTokFilled style={{ fontSize: '20px' }}/>} onClick={() => window.open('https://www.tiktok.com/@comolaundry')}  className='w-[60px] h-[60px] bg-[#25F4EE]' />
      </FloatButton.Group>
    </ConfigProvider>
  );
}